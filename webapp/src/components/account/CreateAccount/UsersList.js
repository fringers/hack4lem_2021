import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { UserItem } from "./UserItem";

export const UsersList = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="subtitle1">Osoby z dostępem do konta</Typography>
      </Grid>

      <Grid item>
        <Button variant="outlined" color="secondary">
          Dodaj osobę
        </Button>
      </Grid>

      <Grid item>
        <UserItem />
      </Grid>
    </Grid>
  );
};
