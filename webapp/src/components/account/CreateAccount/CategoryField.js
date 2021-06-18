import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const categories = [
  ["restaurants", "Restauracje"],
  ["groceries", "Artykuły spożywcze"],
  ["health", "Zdrowie"],
  ["sshopping", "Zakupy"],
  ["transport", "Transport"],
  ["general", "Ogólne"],
  ["services", "Usługi"],
];

export const CategoryField = () => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="category">Kategoria</InputLabel>
      <Select label="Kategoria" variant="outlined" name="category">
        {categories.map((c) => (
          <MenuItem key={c[0]} value={c[0]}>
            {c[1]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        Kategoria definiuje, do jakich transakcji będzie używane to konto.
      </FormHelperText>
    </FormControl>
  );
};
