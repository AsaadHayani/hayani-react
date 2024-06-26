import { Alert, Snackbar } from "@mui/material";

type Props = {
  error: any;
};

const Error = ({ error }: Props) => {
  return (
    <Snackbar open={error} autoHideDuration={3000}>
      <Alert variant="filled" severity="error">
        {error}
      </Alert>
    </Snackbar>
  );
};

export default Error;
