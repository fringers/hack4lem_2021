import { Dialog } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

export const InvoiceDialog = ({ open, setOpen }) => {
  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <Box px={2} py={4} m={2}>
        <Grid container direction="column" spacing={4}>
          <Grid
            item
            container
            direction="row"
            alignItems="flex-start"
            justify="space-between"
            spacing={4}
          >
            <Grid item>
              <Box pt={3}>
                <div>Bush Burger</div>
                <div>Kalwaryjska 20/1</div>
                <div>30-320, Kraków</div>
                <div>info@bushburger.com</div>
              </Box>
            </Grid>
            <Grid item>
              <img
                src="https://static.takeaway.com/images/restaurants/pl/O35177R/logo_465x320.png"
                alt="Bush Burger"
                width="200"
              />
            </Grid>
          </Grid>

          <Grid item>
            <div>Numer transakcji: ABCD-1234</div>
            <div>Metoda transakcji: Karta</div>
          </Grid>

          <Grid item>
            <List dense>
              <ListItem>
                <ListItemText primary="Burger" />
                <ListItemSecondaryAction>15.28 PLN</ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="Duże frytki" />
                <ListItemSecondaryAction>6.00 PLN</ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>

          <Grid item>
            <Typography align="right">21.28 PLN</Typography>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};
