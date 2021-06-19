import TextField from "@material-ui/core/TextField";

export const EmailField = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      id="email"
      label="Email użytkownika"
      variant="outlined"
      type="email"
      value={value}
      onChange={handleChange}
    />
  );
};
