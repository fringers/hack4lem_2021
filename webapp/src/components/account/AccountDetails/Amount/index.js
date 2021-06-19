import clsx from "clsx";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

import { users } from "../../../../data/users";

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

export const Amount = ({ available, name = "" }) => {
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
              {available.toFixed(2)} PLN
            </Typography>
          </div>
        </div>
        <div className={classes.row}>
          <AvatarGroup className={classes.avatarGroup}>
            <Avatar alt={users[0].fullName} src={users[0].avatar} />
            <Avatar alt={users[1].fullName} src={users[1].avatar} />
            <Avatar alt={users[2].fullName} src={users[2].avatar} />
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
