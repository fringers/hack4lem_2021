import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

export const ContributionField = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="ccontribution"
      label="Wkład"
      type="number"
      min="0"
      max="100"
      variant="outlined"
      placeholder="np. 30"
      InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>,
      }}
      value={value}
      onChange={handleChange}
    />
  );
};
