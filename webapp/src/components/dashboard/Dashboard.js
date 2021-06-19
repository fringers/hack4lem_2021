import { AddAccountBtn } from "./AddAccountBtn";
import { BudgetPreviewItem } from "./BudgetPreviewItem";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

export const Dashboard = () => {
  return (
    <Container>
      <Box pt={2}>
        <AddAccountBtn />
      </Box>
      <Box pt={2}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <BudgetPreviewItem
              id={0}
              name="Wyjścia do restauracji"
              budget={1000}
              available={280}
            />
          </Grid>
          <Grid item>
            <BudgetPreviewItem
              id={1}
              name="Opłata za mieszkanie"
              budget={800}
              available={680}
            />
          </Grid>
          <Grid item>
            <BudgetPreviewItem
              id={2}
              name="Wakacje"
              budget={6000}
              available={160}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
