import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

import { chartData } from "../../../../data/chartData";

const useStyles = makeStyles(() => ({
  container: {},
}));

export const Chart = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Bar
        data={chartData}
        height={400}
        options={{ maintainAspectRatio: false }}
      />
    </Container>
  );
};
