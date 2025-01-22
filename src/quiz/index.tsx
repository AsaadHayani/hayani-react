import {
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MouseEvent, useRef, useState } from "react";
import { data } from "./data.ts";

interface QuestionProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number;
}

const Quiz = () => {
  const theme = useTheme();
  const [index, setIndex] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionProps>(data[index]);
  const [lock, setLock] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);

  const questions = [
    question.option1,
    question.option2,
    question.option3,
    question.option4,
  ];

  const opt_1 = useRef<HTMLLIElement>(null);
  const opt_2 = useRef<HTMLLIElement>(null);
  const opt_3 = useRef<HTMLLIElement>(null);
  const opt_4 = useRef<HTMLLIElement>(null);

  const optArr = [opt_1, opt_2, opt_3, opt_4];

  const checkAns = (e: MouseEvent, ans: number) => {
    const target = e.currentTarget as HTMLLIElement;
    if (!lock) {
      if (question.ans === ans) {
        target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        target.classList.add("wrong");
        setLock(true);
        optArr[question.ans - 1].current?.classList.add("correct");
      }
    }
  };
  // onClick={(e) => checkAns(e, ir)}

  const clickNext = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prev) => prev + 1);
      setQuestion(data[index]);
      setLock(false);
      optArr.map((opt) => {
        opt.current?.classList.remove("correct");
        opt.current?.classList.remove("wrong");
      });
    }
  };

  const clickReset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setResult(false);
    setLock(false);
  };

  return (
    <Container>
      <Typography
        align="center"
        variant="h2"
        fontSize={30}
        color="primary"
        mt={2}
      >
        Quiz App
      </Typography>
      <Paper
        className="shadow"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          padding: "20px",
          border: 1,
          mt: 2,
          alignItems: "center",
          borderColor: theme.palette.primary.main,
        }}
      >
        {!result && (
          <>
            <Typography variant="h5">
              {index + 1}. {question.question}
            </Typography>
            <Grid item xs={12} md={6}>
              <List>
                {questions.map((que, i) => {
                  let ir = i + 1;
                  return (
                    <ListItem
                      key={i}
                      sx={{
                        padding: "10px",
                        my: 1,
                        borderRadius: 2,
                        border: 1,
                        borderColor: theme.palette.primary.main,
                      }}
                      ref={optArr[i]}
                    >
                      <ListItemIcon>
                        <IconButton
                          color="primary"
                          onClick={(e) => checkAns(e, ir)}
                        >
                          <ArrowForwardIcon />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText primary={que} />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Button variant="contained" color="primary" onClick={clickNext}>
              Next
            </Button>
            <Typography component="p" color="primary">
              {index + 1} of {data.length} questions
            </Typography>
          </>
        )}

        {result && (
          <>
            <Button variant="contained" color="primary" onClick={clickReset}>
              Reset
            </Button>
            <Typography variant="h5" color="primary">
              You scored {score} out of {data.length}
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Quiz;
