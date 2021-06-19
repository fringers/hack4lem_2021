import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const BlockPaymentField = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox name="block-payment" />}
      label="Blokuj wypłaty"
      value={value}
      onChange={handleChange}
    />
  );
};
