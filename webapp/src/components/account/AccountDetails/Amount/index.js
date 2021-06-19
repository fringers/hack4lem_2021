import { useState } from "react";
import clsx from "clsx";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { Blik } from "./Blik";
import { NotImplemented } from "../../../NotImplemented";

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

  const [blikOpen, setBlikOpen] = useState(false);
  const [transactionNotImplementedOpen, setTransactionNotImplementedOpen] =
    useState(false);

  const handleBlikOpen = () => {
    setBlikOpen(true);
  };

  const handleBlikClose = () => {
    setBlikOpen(false);
  };

  const handleTransactionNotImplementedOpenOpen = () => {
    setTransactionNotImplementedOpen(true);
  };

  const handleTransactionNotImplementedOpenClose = () => {
    setTransactionNotImplementedOpen(false);
  };

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
              onClick={handleTransactionNotImplementedOpenOpen}
            >
              Przelew
            </Button>
            <NotImplemented
              open={transactionNotImplementedOpen}
              onClose={handleTransactionNotImplementedOpenClose}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleBlikOpen}
            >
              Blik
            </Button>
            <Blik open={blikOpen} onClose={handleBlikClose} />
          </div>
        </div>
      </Paper>
    </>
  );
};
