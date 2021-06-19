import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { EmailField } from "./EmailField";
import { ContributionField } from "./ContributionField";
import { BlockPaymentField } from "./BlockPaymentField";
import { DeleteButton } from "./DeleteButton";

export const UserItem = ({ own, value, onChange, onDelete }) => {
  const [email, setEmail] = useState(value.email);
  const [contribution, setContribution] = useState(value.contribution);
  const [blockPayment, setBlockPayment] = useState(value.blockPayment);

  useEffect(() => {
    const user = {
      email,
      contribution,
      blockPayment,
    };
    onChange(user);
  }, [email, contribution, blockPayment]);

  return (
    <Paper variant="outlined">
      <Box px={3} py={2}>
        <Grid container direction="column" spacing={1}>
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              {own ? (
                "Jan Kowalski (Ty)"
              ) : (
                <EmailField value={email} onChange={setEmail} />
              )}
            </Grid>

            {!own ? (
              <Grid item>
                <DeleteButton onClick={onDelete} />
              </Grid>
            ) : null}
          </Grid>

          <Grid item container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <ContributionField
                value={contribution}
                onChange={setContribution}
              />
            </Grid>

            <Grid item>
              <BlockPaymentField
                value={blockPayment}
                onChange={setBlockPayment}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
