import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const UsersList = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="subtitle1"> Osoby z dostępem do konta</Typography>
      </Grid>

      <Grid item>
        <Button variant="outlined" color="secondary">
          Dodaj osobę
        </Button>
      </Grid>

      <Grid item>
        <List>
          <ListItem>
            <ListItemText primary="Ty" />
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRippl />
            </ListItemIcon>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRippl />
            </ListItemIcon>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
