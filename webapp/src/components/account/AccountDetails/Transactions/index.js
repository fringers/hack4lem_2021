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
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles(({ spacing, palette }) => ({
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
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText primary="Karta płatnicza" secondary="Sty 9, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={<Typography variant="body1">-20.00 PLN</Typography>}
            />
            <ListItemText
              primary={
                <Typography variant="caption">Saldo po transakcji</Typography>
              }
              secondary={<Typography variant="body1">1480.00 PLN</Typography>}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
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
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText primary="Karta płatnicza" secondary="Sty 8, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={<Typography variant="body1">-300.80 PLN</Typography>}
            />
            <ListItemText
              primary={
                <Typography variant="caption">Saldo po transakcji</Typography>
              }
              secondary={<Typography variant="body1">1200.20 PLN</Typography>}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
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
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText primary="Karta płatnicza" secondary="Sty 3, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={<Typography variant="body1">-15.00 PLN</Typography>}
            />
            <ListItemText
              primary={
                <Typography variant="caption">Saldo po transakcji</Typography>
              }
              secondary={<Typography variant="body1">1185.20 PLN</Typography>}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
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
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText primary="Karta płatnicza" secondary="Sty 1, 2021" />
            <ListItemText
              primary={<Typography variant="caption">Kwota</Typography>}
              secondary={<Typography variant="body1">-10.80 PLN</Typography>}
            />
            <ListItemText
              primary={
                <Typography variant="caption">Saldo po transakcji</Typography>
              }
              secondary={<Typography variant="body1">1175.20 PLN</Typography>}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <ReceiptIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};
