import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { UserAvatar } from "../avatar/UserAvatar";

const useStyles = makeStyles((theme) => ({
  textSeparator: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  progressBoxWrapper: {
    height: 25,
  },
  progressBar: {
    height: 25,
    borderRadius: 6,
  },
  progressText: {
    color: "white",
    fontWeight: "medium",
  },
}));

export const BudgetPreviewItem = ({ id, name, budget, available }) => {
  const classes = useStyles();

  const percent = (available * 100) / budget;

  return (
    <Card>
      <CardActionArea component={Link} to={`/accounts/details/${id}`}>
        <CardContent>
          <Box>
            <Typography display="inline" variant="body2">
              Restauracje
            </Typography>
            <Typography
              display="inline"
              variant="body2"
              className={classes.textSeparator}
            >
              |
            </Typography>
            <Typography display="inline" variant="body2">
              Odnawiane co miesiąc
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6">{name}</Typography>
          </Box>

          <Box py={1}>
            <Box position="relative" className={classes.progressBoxWrapper}>
              <Box position="absolute" left="0" right="0" top="0" bottom="0">
                <LinearProgress
                  variant="determinate"
                  value={percent}
                  className={classes.progressBar}
                />
              </Box>

              <Box position="absolute" pl={1}>
                <Typography variant="body1" className={classes.progressText}>
                  {available}/{budget} PLN
                </Typography>
              </Box>

              <Box position="absolute" right="0" top="0" bottom="0">
                <Box pr={1}>
                  <UserAvatar />
                  <UserAvatar />
                  <UserAvatar />
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
