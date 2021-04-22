import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "0.50",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.image}>
        <Container
          style={{
            width: "85vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: "1 1 auto",
            zIndex: "1000",
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            align="center"
            justify="center"
            color="textPrimary"
            gutterBottom
          >
            You’re going to make a difference. A lot of times it won’t be huge,
            it won’t be visible even. But it will matter just the same.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}
