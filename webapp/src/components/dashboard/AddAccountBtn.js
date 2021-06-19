import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";

export const AddAccountBtn = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/accounts/create"
    >
      <Add /> Dodaj konto
    </Button>
  );
};
