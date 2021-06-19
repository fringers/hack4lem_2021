const labels = [...Array(29).keys()];
delete labels[0];

export const chartData = {
  labels: labels,
  datasets: [
    {
      type: "line",
      label: "Limit",
      borderColor: "rgb(0, 53, 116)",
      backgroundColor: "rgba(0, 53, 116, 0.1)",
      fill: true,
      borderWidth: 2,
      data: labels.map(() => 100),
    },
    {
      type: "line",
      label: "Suma",
      borderColor: "rgb(228, 32, 44)",
      backgroundColor: "rgba(228, 32, 44, 0.1)",
      borderWidth: 2,
      data: [
        5, 8, 10, 20, 22, 25, 25, 25, 25, 28, 33, 33, 34, 40, 45, 45, 45, 45,
        65, 66, 68, 70,
      ],
    },
    {
      type: "line",
      label: "Prognoza",
      borderColor: "rgba(191, 191, 191, 0.81)",
      backgroundColor: "rgba(191, 191, 191, 0.2)",
      borderWidth: 2,
      borderDash: [10, 5],
      data: [
        ...Array(21).map(() => null),
        70,
        76,
        82,
        88,
        94,
        100,
        106,
        112,
        118,
      ],
    },
  ],
};
