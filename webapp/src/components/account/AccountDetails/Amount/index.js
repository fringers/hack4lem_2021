import { useState } from "react";
import clsx from "clsx";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { Blik } from "./Blik";
import { NotImplemented } from "../../../NotImplemented";
import { getUserById } from "../../../../data/users";

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

export const Amount = ({ available, name = "", usersInfo }) => {
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

  const users = usersInfo.map((u) => getUserById(u.id));

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
            {users.map((u) => (
              <Avatar alt={u.fullName} src={u.avatar} />
            ))}
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
              text="W tym miejscu użytkownik będzie mógł wykonać dowolny przelew używając dostępnych, wspólnych środków. Z punktu widzenia użytkownika, będzie to wyglądało jak zwykły przelew bankowy, natomiast użyte środki mogą pochodzić z kont wszystkich użytkowników."
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
