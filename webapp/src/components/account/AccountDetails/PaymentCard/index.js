import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { CardView } from "../../../cards/CardView";
import { NotImplemented } from "../../../NotImplemented";
import { useState } from "react";

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: spacing(2),
  },
  textBg: {
    backgroundColor: "rgb(0, 53, 116, 0.8)",
    textShadow: "1px 1px #000000",
    padding: "0 4px",
    margin: "4px 0",
    color: "white",
    borderRadius: "4px",
    width: "fit-content",
  },
}));

export const PaymentCard = ({ account }) => {
  const classes = useStyles();

  const [generateNotImplementedOpen, setGenerateNotImplementedOpen] =
    useState(false);

  const [deactivateNotImplementedOpen, setDeactivateNotImplementedOpen] =
    useState(false);

  const handleGenerateNotImplementedOpenOpen = () => {
    setGenerateNotImplementedOpen(true);
  };

  const handleGenerateNotImplementedOpenClose = () => {
    setGenerateNotImplementedOpen(false);
  };

  const handleDeactivateNotImplementedOpenOpen = () => {
    setDeactivateNotImplementedOpen(true);
  };

  const handleDeactivateNotImplementedOpenClose = () => {
    setDeactivateNotImplementedOpen(false);
  };

  const CardNumbers = () => (
    <Box py={0.5}>
      <Grid container direction="column">
        <Grid item>
          <Box className={classes.textBg} display={{ xs: "block", sm: "none" }}>
            <Typography variant="body1" align="center">
              1111 1111 1111 1111
            </Typography>
          </Box>
          <Box className={classes.textBg} display={{ xs: "none", sm: "block" }}>
            <Typography variant="h4" align="center">
              1111 1111 1111 1111
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Box
                className={classes.textBg}
                display={{ xs: "block", sm: "none" }}
              >
                <Typography variant="body2">08/24</Typography>
              </Box>
              <Box
                className={classes.textBg}
                display={{ xs: "none", sm: "block" }}
              >
                <Typography variant="body1">08/24</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box
                className={classes.textBg}
                display={{ xs: "block", sm: "none" }}
              >
                <Typography variant="body2">CVV: 123</Typography>
              </Box>
              <Box
                className={classes.textBg}
                display={{ xs: "none", sm: "block" }}
              >
                <Typography variant="body1">CVV: 123</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div className={classes.container}>
      <Typography variant="h5">Wirtualna karta</Typography>
      <Paper>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={5}>
              <CardView account={account} bottomSlot={<CardNumbers />} />
            </Grid>

            <Grid item xs={12} md={6} lg={7}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGenerateNotImplementedOpenOpen}
                  >
                    Generuj nową
                  </Button>
                  <NotImplemented
                    open={generateNotImplementedOpen}
                    onClose={handleGenerateNotImplementedOpenClose}
                    text="Użytkownik może w dowolnym momencie wygenerować nową wirtualną kartę, aby płacić nią w Internecie lub podpiąć do elektronicznego portfela, typu Google Pay."
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDeactivateNotImplementedOpenOpen}
                  >
                    Dezaktywuj
                  </Button>
                  <NotImplemented
                    open={deactivateNotImplementedOpen}
                    onClose={handleDeactivateNotImplementedOpenClose}
                    text="Użytkownik może w każdym momencie dezaktywować swoją wirtualną kartę, jeśli na przykład została wykradziona ze sklepu Internetowego, w którym jej użył."
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};
