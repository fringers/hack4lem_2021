import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

export const BudgetField = () => {
  return (
    <TextField
      id="budget"
      label="Budżet"
      type="number"
      variant="outlined"
      placeholder="np. 1000"
      helperText="Przewidziany budżet, jaki będzie dostępny z tego konta."
      InputProps={{
        endAdornment: <InputAdornment position="end">PLN</InputAdornment>,
      }}
    />
  );
};
