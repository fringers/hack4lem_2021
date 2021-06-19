import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { PaymentCard } from "./PaymentCard";
import { People } from "./People";
import { Chart } from "./Chart";
import { Amount } from "./Amount";

export const AccountDetails = () => {
  const { id } = useParams();

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
      <Chart />

      <PaymentCard />
    </Container>
  );
};
