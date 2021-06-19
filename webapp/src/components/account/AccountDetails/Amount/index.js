import clsx from "clsx";
import { Paper, Typography, div, Button, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: spacing(2),
    padding: spacing(2, 4),
  },
  marginButton: {
    marginRight: spacing(1),
    marginTop: spacing(2),
    marginBottom: spacing(2),
    [breakpoints.up("sm")]: {
      marginTop: spacing(0),
      marginBottom: spacing(0),
      marginRight: spacing(2),
    },
  },
  marginTop: {
    marginTop: spacing(0),
    [breakpoints.up("sm")]: {
      marginTop: spacing(2),
    },
  },
  row: {
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "wrap",
  },
  avatarGroup: {
    alignItems: "center",
  },
}));

export const Amount = ({ name = "" }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.container}>
        <div className={classes.row}>
          <Typography variant="h4" color="primary">
            {name}
          </Typography>
          <div>
            <Typography variant="h5">Dostępne środki</Typography>
            <Typography component="span" variant="h4" color="secondary">
              140 PLN
            </Typography>
          </div>
        </div>
        <div className={classes.row}>
          <AvatarGroup className={classes.avatarGroup}>
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
          <div className={clsx(classes.right, classes.marginTop)}>
            <Button
              className={classes.marginButton}
              variant="contained"
              color="primary"
            >
              Przelew
            </Button>
            <Button variant="contained" color="primary">
              Blik
            </Button>
          </div>
        </div>
      </Paper>
    </>
  );
};
