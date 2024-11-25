import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Slide } from "@mui/material";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
const DialogCustom = ({
  open,
  toggle,
  title,
  des,
  body,
  disableScrollLock,
}) => {
  const renderBody = () => {
    if (React.isValidElement(body)) {
      return body;
    }
    const Body = body;
    return <Body />;
  };

  return (
    <Dialog
      disableScrollLock={disableScrollLock}
      open={open}
    //   TransitionComponent={Transition}
      keepMounted
      onClose={toggle}
      aria-describedby="alert-dialog-slide-description"
      sx={{ "& .MuiDialog-paper": { width: "auto", maxWidth: "none" } }} // Set width to auto
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {des && (
          <DialogContentText id="alert-dialog-slide-description">
            {des}
          </DialogContentText>
        )}
        {renderBody()}
      </DialogContent>
    </Dialog>
  );
};
export default DialogCustom;
