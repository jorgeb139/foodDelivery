import React from "react";
import "./styles.css";
import RenderCard from "./RenderCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "20px"
  }
});

export default function Cards() {

  const classes = useStyles();
  return (
    // <Grid
    //   container
    //   spacing={4}
    //   className={classes.gridContainer}
    //   justify="center"
    // >
      // <Grid item xs={12} sm={6} md={4}>
        <RenderCard />
      // </Grid>
    // </Grid>
  );
}
