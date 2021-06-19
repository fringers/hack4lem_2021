import { AddAccountBtn } from "./AddAccountBtn";
import { CardPreviewItem } from "./CardPreviewItem";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { accounts } from "../../data/accounts";

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      justifyContent: "end",
    },
  },
}));

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box pt={2}>
        <AddAccountBtn />
      </Box>
      <Box pt={2}>
        <Grid container spacing={2} classes={{ root: classes.container }}>
          {accounts.map((acc) => (
            <Grid item key={acc.id} xs={12} sm={8} md={5} lg={4}>
              <CardPreviewItem account={acc} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
