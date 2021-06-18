import { Paper, Typography } from "@material-ui/core";
// TODO: @robi24 zakomentowałem te fragmenty, bo build się wywalał, bo nie były używane
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   container: {},
// }));

export const Amount = () => {
  // const classes = useStyles();

  return (
    <>
      <Typography variant="subtitle1">Statystyki (to będzie ładniej!!)</Typography>
      <Paper>
        <Typography variant="h3">
          Wydałeś{" "}
          <Typography component="span" variant="h2" color="secondary">
            40 PLN
          </Typography>
        </Typography>
        <Typography variant="h3">
          Wole środki{" "}
          <Typography component="span" variant="h2" color="secondary">
            140 PLN
          </Typography>
        </Typography>
      </Paper>
    </>
  );
};
