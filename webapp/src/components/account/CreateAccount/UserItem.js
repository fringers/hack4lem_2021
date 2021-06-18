import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export const UserItem = ({ own }) => {
  return (
    <Paper variant="outlined">
      <Box px={3} py={2}>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>Jan Kowalski {own ? "(Ty)" : null}</Grid>

              <Grid item>
                <IconButton size="small">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
            >
              <Grid item>
                <FormControlLabel
                  control={<Checkbox name="test" />}
                  label="Zezwalaj na wypłaty"
                />
              </Grid>

              <Grid item>
                <TextField
                  id="budget"
                  label="Wkład"
                  type="number"
                  min="0"
                  max="100"
                  variant="outlined"
                  placeholder="np. 30"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
