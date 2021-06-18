import {
  Paper,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  Box,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Chart } from "../Chart";

const useStyles = makeStyles(({ spacing }) => ({
  container: { marginTop: spacing(2) },
}));

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

export const People = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1">Osoby</Typography>
      <Paper>
        <Grid container>
          <Grid item xs={6}>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  component="div"
                  primary={
                    <>
                      <Typography component="p" variant="body1">
                        Ali Connors
                      </Typography>
                      <Typography component="div" variant="body1">
                        Wkład
                      </Typography>
                      <LinearProgressWithLabel
                        variant="determinate"
                        value={20}
                      />
                      <Typography component="span" variant="body1">
                        Wydatki
                      </Typography>
                      <LinearProgressWithLabel
                        color="secondary"
                        variant="determinate"
                        value={40}
                      />
                    </>
                  }
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="body1">
                        Travis Howard
                      </Typography>
                      <Typography component="div" variant="body1">
                        Wkład
                      </Typography>
                      <LinearProgressWithLabel
                        variant="determinate"
                        value={80}
                      />
                      <Typography component="span" variant="body1">
                        Wydatki
                      </Typography>
                      <LinearProgressWithLabel
                        color="secondary"
                        variant="determinate"
                        value={5}
                      />
                    </>
                  }
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography component="span" variant="body1">
                        Sandra Adams
                      </Typography>
                      <Typography component="div" variant="body1">
                        Wkład
                      </Typography>
                      <LinearProgressWithLabel
                        variant="determinate"
                        value={0}
                      />
                      <Typography component="span" variant="body1">
                        Wydatki
                      </Typography>
                      <LinearProgressWithLabel
                        color="secondary"
                        variant="determinate"
                        value={55}
                      />
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Chart />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
