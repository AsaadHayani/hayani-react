import { useEffect, useState } from "react";
import XIcon from "@mui/icons-material/X";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const Qoute = () => {
  const [qoutes, setQoutes] = useState<{ text: string; author: string }[]>([]);
  const [qoute, setQoute] = useState<{ text: string; author: string }>({
    text: "Loading...",
    author: "Loading...",
  });

  useEffect(() => {
    const loadLocalQuotes = async () => {
      const response = await fetch("./random_quotes.json");
      const data = await response.json();
      setQoutes(data);
      if (data.length > 0) {
        setQoute(data[0]);
      }
    };

    loadLocalQuotes();
  }, []);

  const random = () => {
    if (qoutes.length > 0) {
      const select = qoutes[Math.floor(Math.random() * qoutes.length)];
      setQoute(select);
    }
  };

  const openTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${
        qoute.text + " - " + qoute.author
      }`
    );
  };

  const theme = useTheme();

  return (
    <Container>
      <Typography align="center" fontSize={30} color="primary" mt={2}>
        Random Qoute Generator
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
        <Typography align="center" fontSize={30}>
          {qoute.text}
        </Typography>
        <Box>
          <Box
            color="primary"
            sx={{
              width: "680px",
              height: "1.5px",
              backgroundColor: theme.palette.primary.main,
            }}
          ></Box>
          <Box
            m="30px 0"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={20} fontWeight={500}>
              - {qoute.author.split(",")[0]}
            </Typography>
            <Box display="flex" gap={10}>
              <IconButton onClick={random}>
                <ReplayIcon fontSize="large" color="primary" />
              </IconButton>
              <IconButton onClick={openTwitter}>
                <XIcon fontSize="large" color="primary" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Qoute;
