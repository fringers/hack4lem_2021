import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { ContributionField } from "./ContributionField";
import { BlockPaymentField } from "./BlockPaymentField";
import { DeleteButton } from "./DeleteButton";
import Typography from "@material-ui/core/Typography";

export const UserItem = ({ own, value, onChange, onDelete }) => {
  const [contribution, setContribution] = useState(value.contribution);
  const [blockPayment, setBlockPayment] = useState(value.blockPayment);

  useEffect(() => {
    const user = {
      email: value.email,
      contribution,
      blockPayment,
    };
    onChange(user);
  }, [contribution, blockPayment]);

  return (
    <Paper variant="outlined">
      <Box px={3} py={2}>
        <Grid container spacing={1} justify="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            {!own ? <DeleteButton onClick={onDelete} disabled={own} /> : null}
            <Typography variant="body1" display="inline">
              {value.email} {own ? "(Ty)" : ""}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ContributionField
              value={contribution}
              onChange={setContribution}
            />
          </Grid>

          <Grid item={12} sm={6} md={4}>
            <BlockPaymentField
              value={blockPayment}
              onChange={setBlockPayment}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
