import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { CategoryField } from "./CreateAccount/CategoryField";
import { NameField } from "./CreateAccount/NameField";
import { BudgetField } from "./CreateAccount/BudgetField";
import { RenewalField } from "./CreateAccount/RenewalField";

export const CreateAccount = () => {
  return (
    <Container>
      <Box pt={2} pb={2}>
        <Typography variant="h5">Dodaj nowe konto</Typography>
      </Box>

      <form noValidate autoComplete="off">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <CategoryField />
          </Grid>

          <Grid item>
            <NameField />
          </Grid>

          <Grid item>
            <BudgetField />
          </Grid>

          <Grid item>
            <RenewalField />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
