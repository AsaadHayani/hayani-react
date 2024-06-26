import { Alert, Snackbar } from "@mui/material";

type Props = {
  success: boolean;
};

const Success = ({ success }: Props) => {
  return (
    <Snackbar open={success} autoHideDuration={3000}>
      <Alert variant="filled" severity="success">
        Successfully!
      </Alert>
    </Snackbar>
  );
};

export default Success;
