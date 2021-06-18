import { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const renewalPeriods = [
  ["none", "Jednorazowy"],
  ["week", "Co tydzień"],
  ["month", "Co miesiąc"],
  ["quarter", "Co kwartał"],
  ["year", "Co rok"],
];

export const RenewalField = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="renewal-label">Odnawianie</InputLabel>
      <Select
        labelId="renewal-label"
        id="renewal"
        variant="outlined"
        value={value}
        onChange={handleChange}
      >
        {renewalPeriods.map((c) => (
          <MenuItem value={c[0]} key={c[0]}>
            {c[1]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Częstotliwość odnawiania budżetu.</FormHelperText>
    </FormControl>
  );
};
