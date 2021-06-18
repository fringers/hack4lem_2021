import { Pie } from "react-chartjs-2";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const Chart = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Pie
        data={data}
        height={400}
        width={400}
        options={{ maintainAspectRatio: false }}
      />
    </Container>
  );
};
