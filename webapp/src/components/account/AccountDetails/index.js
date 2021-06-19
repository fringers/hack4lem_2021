import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { PaymentCard } from "./PaymentCard";
import { People } from "./People";
import { Amount } from "./Amount";
import { Transactions } from "./Transactions";
import { getAccountById } from "../../../data/accounts";

export const AccountDetails = () => {
  const { id } = useParams();
  const data = getAccountById(id);

  return (
    <Container>
      <Amount name={data.name} />
      <People users={data.users} />
      <PaymentCard account={getAccountById(1)} />
      <Transactions />
    </Container>
  );
};
