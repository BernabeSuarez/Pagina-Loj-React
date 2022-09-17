import React, { forwardRef } from "react";
//import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

//import MuiAlert from "@mui/material/Alert";

//const Alert = React.forwardRef(function Alert(props, ref) {
//  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//});

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ open, message, anchorOrigin, onClose }) => {
  return (
    <Snackbar
      //message={message}
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      sx={{
        color: "black",
      }}
    >
      <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
