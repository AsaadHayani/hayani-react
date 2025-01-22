import { Alert, Snackbar } from "@mui/material";

const Error = ({ error }: { error: any }) => (
  <Snackbar open={!!error} autoHideDuration={3000}>
    <Alert variant="filled" severity="error">
      {error}
    </Alert>
  </Snackbar>
);

export default Error;
