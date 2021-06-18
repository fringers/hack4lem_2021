import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { UserAvatar } from "../avatar/UserAvatar";

const useStyles = makeStyles((theme) => ({
  name: {
    fontWeight: "bold",
  },
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
}));

export const BudgetPreviewItem = ({ id, name, budget, available }) => {
  const classes = useStyles();

  const percent = (available * 100) / budget;

  const ProgressText = ({ className }) => (
    <span className={`text-sm font-semibold pl-2 ${className}`}>
      {available}/{budget} PLN
    </span>
  );

  return (
    <Card>
      <CardContent>
        <div>
          <Typography
            component={Link}
            display="inline"
            variant="subtitle1"
            className={classes.name}
            to={`/accounts/details/${id}`}
          >
            {name}
          </Typography>
          <Typography display="inline" className={classes.textSeparator}>
            |
          </Typography>
          <Typography display="inline">Odnawiane co miesiąc</Typography>
        </div>

        <Box position="relative" className={classes.progressBoxWrapper}>
          <Box position="absolute" left="0" right="0" top="0" bottom="0">
            <LinearProgress
              variant="determinate"
              value={percent}
              className={classes.progressBar}
            />
          </Box>
          <Box position="absolute">text</Box>
        </Box>

        <div className="relative border rounded bg-blue-200 h-8 mt-2">
          <div className="absolute h-full">
            <ProgressText className="text-black" />
          </div>

          <div
            className="absolute h-full rounded bg-primary-light overflow-clip overflow-hidden"
            style={{ width: `${percent}%` }}
          >
            <ProgressText className="text-white" />
          </div>

          <div className="absolute right-1 top-1 flex flex-row -space-x-1">
            <UserAvatar
              small
              src="https://randomuser.me/api/portraits/women/13.jpg"
            />
            <UserAvatar
              small
              src="https://randomuser.me/api/portraits/men/90.jpg"
            />
            <UserAvatar
              small
              src="https://randomuser.me/api/portraits/lego/1.jpg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
