import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const AccountDetails = () => {
  return (
    <Container>
      <Box pt={2}>
        <Typography variant="h5">Szczegóły konta</Typography>
      </Box>

      <div className="flex flex-col"></div>
    </Container>
  );
};
