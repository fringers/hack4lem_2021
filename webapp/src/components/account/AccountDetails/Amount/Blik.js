import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const Blik = ({ open, onClose }) => {
  const [timer, setTimer] = useState(0);
  const [codeA, setCodeA] = useState(100);
  const [codeB, setCodeB] = useState(100);

  const randomNumber = () => {
    return Math.floor(Math.random() * (999 - 100) + 100);
  };

  useEffect(() => {
    if (!open) return;

    setTimer(2 * 60);
    setCodeA(randomNumber);
    setCodeB(randomNumber);
  }, [open]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => (timer > 0 ? timer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const copyCode = () => {
    navigator.clipboard.writeText(`${codeA}${codeB}`);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Płatność kodem Blik</DialogTitle>
        <Box p={2}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              {minutes}:{seconds < 10 ? "0" : ""}
              {seconds}
            </Grid>
            <Grid item>
              <Box py={2}>
                <Typography variant="h4" color="primary">
                  {codeA} {codeB}
                </Typography>
              </Box>
            </Grid>

            <Grid item>
              <Button color="secondary" onClick={copyCode}>
                Kopiuj kod
              </Button>
            </Grid>

            <Grid item>
              <Box py={2}>
                <img src="/blik.png" alt="Logo blik" width={80} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
};
