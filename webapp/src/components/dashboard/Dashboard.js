import { AddAccountBtn } from "./AddAccountBtn";
import { CardPreviewItem } from "./CardPreviewItem";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { accounts } from "../../data/accounts";

export const Dashboard = () => {
  return (
    <Container>
      <Box pt={2}>
        <AddAccountBtn />
      </Box>
      <Box pt={2}>
        <Grid container spacing={2}>
          {accounts.map((acc) => (
            <Grid item key={acc.id} xs={12} md={6} lg={4}>
              <CardPreviewItem account={acc} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
