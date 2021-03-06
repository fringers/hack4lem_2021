import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";

export const NotImplemented = ({ open, onClose, text }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Ta funkcjonalność niestey nie została jeszcze zaimplementowana</DialogTitle>
      <Box px={3}>
        <p>
          {text}
        </p>
        <p>
          Czas był ograniczony i nie byliśmy w stanie zaimplmentować wszystkich
          przepływów w aplikacji. Dlatego możesz trafiać na komunikaty jak ten.
          Koniecznie zajrzyj do naszej prezentacji - znajdziesz tam opisy każdej
          z funkcjonalności, której nie zdążyliśmy tu pokazać!
        </p>
      </Box>
    </Dialog>
  );
};
