import { Backdrop, CircularProgress } from "@mui/material";

interface Props {
  open: boolean;
  setOpen: any;
}

const Loading = ({ open, setOpen }: Props) => (
  <div>
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(open)}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  </div>
);

export default Loading;
