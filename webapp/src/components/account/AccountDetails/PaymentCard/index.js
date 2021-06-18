import { useState } from "react";
import PaymentCardLib from "react-payment-card-component";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loading: {
    display: "block",
  },
}));

export const PaymentCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  return (
    <>
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
    </>
  );
};
