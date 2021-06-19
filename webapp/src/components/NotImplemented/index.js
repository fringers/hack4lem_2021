import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Box from "@material-ui/core/Box";

export const NotImplemented = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Ta funkcjonalność niestey nie została jeszcze zaimplementowan</DialogTitle>
      <Box px={3}>
        <p>
          Czas był ograniczony i nie byliśmy w stanie zaimplmentować wszystkich
          przepływów w aplikaccji. Dlatego możesz trafiać na komunikaty jak ten.
          Koniecznie zajrzyj do nasze prezentacji - znajdziesz tam opisy każdej
          z funkcjonalności, której nie zdążyliśmy tu pokazać!
        </p>
      </Box>
    </Dialog>
  );
};
