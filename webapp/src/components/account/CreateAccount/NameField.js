import { useState } from "react";
import TextField from "@material-ui/core/TextField";

export const NameField = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <TextField
      id="name"
      label="Nazwa"
      variant="outlined"
      placeholder="np. 'Opłata za wynajem mieszkania'"
      helperText="Dzięki nazwie łatwiej rozpoznasz, jakie środki znadjują się na tym koncie."
      fullWidth
      value={value}
      onChange={handleChange}
    />
  );
};
