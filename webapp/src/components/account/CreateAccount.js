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
import { CardView } from "../cards/CardView";
import { Link } from "react-router-dom";

export const CreateAccount = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [, setBudget] = useState("");
  const [renewal, setRenewal] = useState("");
  const [, setUsers] = useState([]);

  return (
    <Container>
      <Card variant="outlined">
        <CardContent>
          <Box pt={2} pb={2}>
            <Typography variant="h5">Dodaj nowe konto</Typography>
          </Box>

          <form noValidate autoComplete="off">
            <Grid container direction="column" spacing={2}>
              <Grid item container spacing={2}>
                <Grid
                  item
                  container
                  direction="column"
                  spacing={2}
                  xs={12}
                  sm={6}
                  md={7}
                  lg={8}
                >
                  <Grid item>
                    <CategoryField onChange={setCategory} />
                  </Grid>

                  <Grid item>
                    <NameField onChange={setName} />
                  </Grid>

                  <Grid item>
                    <RenewalField onChange={setRenewal} />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6} md={5} lg={4}>
                  <CardView
                    account={{ category, renewalPeriod: renewal, name }}
                  />
                </Grid>
              </Grid>

              <Grid item>
                <BudgetField onChange={setBudget} />
              </Grid>

              <Grid item>
                <UsersList onChange={setUsers} />
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/"
                >
                  Stw??rz konto
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};
