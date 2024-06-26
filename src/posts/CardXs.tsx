import { Delete, Info, ModeEdit } from "@mui/icons-material";
import {
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  mutate: any;
  posts: [];
};
type Post = {
  id: number;
  title: string;
  body: string;
};

const CardXs = ({ mutate, posts }: Props) => {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      {posts?.length !== 0 ? (
        posts?.map((post: Post, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Box
                    p={2}
                    border={1}
                    borderColor={theme.palette.primary.main}
                    borderRadius={2}
                    textAlign="center"
                  >
                    <Typography variant="h6" color="primary">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.body}
                    </Typography>
                    <Box display="flex" justifyContent="space-evenly" mt={1}>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        color="error"
                        className="shadow"
                        onClick={() => mutate(post.id)}
                      >
                        <Delete fontSize="inherit" />
                      </IconButton>
                      <Link to={`${post.id}`}>
                        <IconButton
                          size="large"
                          color="success"
                          className="shadow"
                        >
                          <Info fontSize="inherit" />
                        </IconButton>
                      </Link>
                      <Link to={`edit/${post.id}`}>
                        <IconButton
                          size="large"
                          color="primary"
                          className="shadow"
                        >
                          <ModeEdit fontSize="inherit" />
                        </IconButton>
                      </Link>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })
      ) : (
        <Grid item xs={12}>
          <Typography variant="h5" color="error" align="center">
            Items Not Found
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CardXs;
