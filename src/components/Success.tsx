import { Alert, Snackbar } from "@mui/material";

const Success = ({ success }: { success: boolean }) => {
  return (
    <Snackbar open={success} autoHideDuration={3000}>
      <Alert variant="filled" severity="success">
        Successfully!
      </Alert>
    </Snackbar>
  );
};

export default Success;
