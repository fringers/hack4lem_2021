import { AddAccountBtn } from "./AddAccountBtn";
import { BudgetPreviewItem } from "./BudgetPreviewItem";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export const Dashboard = () => {
  return (
    <Container>
      <Box pt={2}>
        <AddAccountBtn />
      </Box>
      <Box pt={2}>
        <BudgetPreviewItem
          id={0}
          name="Wyjścia do restauracji"
          budget={1000}
          available={280}
        />
        <BudgetPreviewItem
          id={1}
          name="Opłata za mieszkanie"
          budget={800}
          available={680}
        />
        <BudgetPreviewItem
          id={2}
          name="Wakacje"
          budget={6000}
          available={160}
        />
      </Box>
    </Container>
  );
};
