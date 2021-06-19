// import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { PaymentCard } from "./PaymentCard";
import { People } from "./People";
// import { Chart } from "./Chart";
import { Amount } from "./Amount";
import { Transactions } from "./Transactions";
import { getAccountById } from "../../../data/accounts";

export const AccountDetails = () => {
  // const { id } = useParams();

  //   useEffect(async () => {
  //     const result = await axios(
  //       'https://hn.algolia.com/api/v1/search?query=redux',
  //     );

  //     setData(result.data);
  //   });

  return (
    <Container>
      {/* <Box pt={2}>
        <Typography variant="h5">Szczegóły konta {id}</Typography>
      </Box> */}

      <Amount name={"Restauracje"} />
      <People />
      <PaymentCard account={getAccountById(1)} />
      <Transactions />
    </Container>
  );
};
