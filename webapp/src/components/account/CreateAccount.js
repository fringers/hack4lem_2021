import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const categories = [
  ["Restaurants", "Restauracje"],
  ["Groceries", "Artykuły spożywcze"],
  ["Health", "Zdrowie"],
  ["Shopping", "Zakupy"],
  ["Transport", "Transport"],
  ["General", "Ogólne"],
  ["Services", "Usługi"],
];

export const CreateAccount = () => {
  return (
    <Container>
      <Box pt={2} pb={2}>
        <Typography variant="h5">Dodaj nowe konto</Typography>
      </Box>

      <form noValidate autoComplete="off">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <FormControl autoWidth>
              <InputLabel id="category-label">Kategoria</InputLabel>
              <Select labelId="category-label" id="category" variant="outlined">
                {categories.map((c) => (
                  <MenuItem value={c[0]}>{c[1]}</MenuItem>
                ))}
              </Select>
              <FormHelperText>
                Kategoria definiuje, do jakich transakcji będzie używane to
                konto.
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item>
            <TextField
              id="name"
              label="Nazwa"
              variant="outlined"
              placeholder="np. 'Opłata za wynajem mieszkania'"
              helperText="Dzięki nazwie łatwiej rozpoznasz, jakie środki znadjują się na tym koncie."
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
