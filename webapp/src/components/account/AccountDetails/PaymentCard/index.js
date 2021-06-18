import { useState } from "react";
import PaymentCardLib from "react-payment-card-component";
import { Button, Paper, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginTop: spacing(2),
  },
  loading: {
    display: "block",
  },
}));

export const PaymentCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1">Wirtualne Karty</Typography>
      <Paper>
        <Button onClick={() => setLoading(!loading)}>loading</Button>
        <Button onClick={() => setFlipped(!flipped)}>flip</Button>
        {loading && <CircularProgress className={classes.loading} />}
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
      </Paper>
    </div>
  );
};
