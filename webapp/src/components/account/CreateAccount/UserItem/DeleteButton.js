import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const DeleteButton = ({ onClick }) => {
  return (
    <IconButton size="small" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};
