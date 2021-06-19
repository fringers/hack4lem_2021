import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { CategoryField } from "./CreateAccount/CategoryField";
import { NameField } from "./CreateAccount/NameField";
import { BudgetField } from "./CreateAccount/BudgetField";
import { RenewalField } from "./CreateAccount/RenewalField";
import { UsersList } from "./CreateAccount/UsersList";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const CreateAccount = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [renewal, setRenewal] = useState("");
  const [users, setUsers] = useState([]);

  const onSubmit = () => {
    const request = {
      category,
      name,
      budget,
      renewal,
      users,
    };
    console.log(request);
  };

  return (
    <Container>
      <Card variant="outlined">
        <CardContent>
          <Box pt={2} pb={2}>
            <Typography variant="h5">Dodaj nowe konto</Typography>
          </Box>

          <form noValidate autoComplete="off">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <CategoryField onChange={setCategory} />
              </Grid>

              <Grid item>
                <NameField onChange={setName} />
              </Grid>

              <Grid item>
                <BudgetField onChange={setBudget} />
              </Grid>

              <Grid item>
                <RenewalField onChange={setRenewal} />
              </Grid>

              <Grid item>
                <UsersList onChange={setUsers} />
              </Grid>

              <Grid item>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                  Stwórz konto
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};
