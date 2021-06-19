import { useState } from "react";
import PaymentCardLib from "react-payment-card-component";
import {
  Button,
  Paper,
  CircularProgress,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: spacing(2),
  },
  grid: {
    minHeight: 256,
    padding: spacing(2, 4),
  },
  loadingContainer: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    display: "block",
  },
  right: {
    marginTop: spacing(2),
    display: "flex",
    textAlign: "right",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  marginTop: {
    marginTop: spacing(2),
  },
}));

export const PaymentCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">Karty wirtualne</Typography>
      <Paper>
        <Grid container className={classes.grid}>
          <Grid item xs={5}>
            {loading && (
              <div className={classes.loadingContainer}>
                <CircularProgress className={classes.loading} />
              </div>
            )}
            {!loading && (
              <PaymentCardLib
                bank="default"
                brand="mastercard"
                number="4111111111111111"
                cvv="202"
                holderName="Owen Lars"
                expiration="12/20"
                flipped={flipped}
              />
            )}
          </Grid>
          <Grid item xs={7} className={classes.right}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setFlipped(!flipped)}
            >
              Pokaż CVV
            </Button>
            <Button
              className={classes.marginTop}
              variant="contained"
              color="primary"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 2500);
              }}
            >
              Generuj nową
            </Button>
            <Button
              className={classes.marginTop}
              variant="contained"
              color="secondary"
            >
              Dezaktywuj
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
