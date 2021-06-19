import { Invoice } from "react-simple-invoice";
import { Dialog } from "@material-ui/core";
import { invoices } from "../../../../data/invoices";


export const InvoiceDialog = ({ open, setOpen }) => {
  return (
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Invoice {...invoices} />
    </Dialog>
  );
};
