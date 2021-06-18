import TextField from "@material-ui/core/TextField";

export const NameField = () => {
  return (
    <TextField
      id="name"
      label="Nazwa"
      variant="outlined"
      placeholder="np. 'Opłata za wynajem mieszkania'"
      helperText="Dzięki nazwie łatwiej rozpoznasz, jakie środki znadjują się na tym koncie."
      fullWidth
    />
  );
};
