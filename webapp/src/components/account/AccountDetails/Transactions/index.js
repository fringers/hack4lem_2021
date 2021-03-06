import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ReceiptIcon from "@material-ui/icons/Receipt";

import { InvoiceDialog } from "./InvoiceDialog";
import { users } from "../../../../data/users";

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: spacing(2),
  },
  table: {
    minWidth: 650,
  },
  floatRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export const Transactions = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Typography variant="h5">Historia transakcji</Typography>
        </Grid>
        <Grid item xs={6} className={classes.floatRight}>
          <Button>Pokaż więcej</Button>
        </Grid>
      </Grid>
      <Paper>
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                src={users[0].avatar}
                alt={`zdjęcia użytkownia ${users[0].fullName}`}
              />
            </ListItemAvatar>
            <ListItemText primary="Karta" secondary="Sty 9, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={
                <Typography color="secondary" variant="body1">
                  -20.00 PLN
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => setOpen(true)}
                edge="end"
                aria-label="delete"
              >
                <ReceiptIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                src={users[0].avatar}
                alt={`zdjęcia użytkownia ${users[0].fullName}`}
              />
            </ListItemAvatar>
            <ListItemText primary="Blik" secondary="Sty 8, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={
                <Typography color="secondary" variant="body1">
                  -300.80 PLN
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => setOpen(true)}
                edge="end"
                aria-label="delete"
              >
                <ReceiptIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                src={users[2].avatar}
                alt={`zdjęcia użytkownia ${users[2].fullName}`}
              />
            </ListItemAvatar>
            <ListItemText primary="Karta" secondary="Sty 3, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={
                <Typography color="secondary" variant="body1">
                  -15.00 PLN
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => setOpen(true)}
                edge="end"
                aria-label="delete"
              >
                <ReceiptIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                src={users[1].avatar}
                alt={`zdjęcia użytkownia ${users[1].fullName}`}
              />
            </ListItemAvatar>
            <ListItemText primary="Przelew" secondary="Sty 1, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={
                <Typography color="secondary" variant="body1">
                  -10.80 PLN
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => setOpen(true)}
                edge="end"
                aria-label="delete"
              >
                <ReceiptIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
      <InvoiceDialog open={open} setOpen={setOpen} />
    </div>
  );
};
