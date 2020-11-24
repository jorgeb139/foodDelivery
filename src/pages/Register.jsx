import React from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../redux/ducks/snackbar";
import { Button } from "@material-ui/core";

const Register = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>Apply to be an Marketer!</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          dispatch(
            setSnackbar(
              true,
              "error",
              "Sorry, we're not hiring marketers at this time!"
            )
          )
        }
      >
        Apply to be an marketer
      </Button>
    </>
  );
};
export default Register;