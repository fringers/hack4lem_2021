import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const DeleteButton = ({ onClick, disabled }) => {
  return (
    <IconButton size="small" onClick={onClick} disabled={disabled}>
      <DeleteIcon />
    </IconButton>
  );
};
