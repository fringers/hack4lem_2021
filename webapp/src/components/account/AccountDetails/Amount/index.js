import clsx from "clsx";
import { Paper, Typography, Grid, Button, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: spacing(2),
    padding: spacing(2, 4),
  },
  right: {
    float: "right",
    textAlign: "right",
  },
  marginRight: {
    marginRight: spacing(2),
  },
  marginTop: {
    marginTop: spacing(2),
  },
}));

export const Amount = ({ name = "" }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.container}>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h4" component="span" color="primary">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.right}>
            <Typography variant="h5">Dostępne środki</Typography>
            <Typography component="span" variant="h4" color="secondary">
              140 PLN
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <AvatarGroup max={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </AvatarGroup>
          </Grid>
          <Grid item xs={6} className={clsx(classes.right, classes.marginTop)}>
            <Button
              className={classes.marginRight}
              variant="contained"
              color="primary"
            >
              Przelew
            </Button>
            <Button variant="contained" color="primary">
              Blik
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
