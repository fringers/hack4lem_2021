import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Avatar from "@material-ui/core/Avatar";
import { getUserById } from "../../data/users";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { CardView } from "../cards/CardView";

const useStyles = makeStyles((theme) => ({
  progressBoxWrapper: {
    height: 40,
  },
  progressBar: {
    height: 40,
    borderRadius: 8,
  },
  progressText: {
    color: "white",
    fontSize: 20,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export const CardPreviewItem = ({ account }) => {
  const classes = useStyles();

  const percent = (account.available * 100) / account.budget;

  const ProgressBar = () => (
    <Box py={1}>
      <Box position="relative" className={classes.progressBoxWrapper}>
        <Box position="absolute" left="0" right="0" top="0" bottom="0">
          <LinearProgress
            variant="determinate"
            value={percent}
            className={classes.progressBar}
          />
        </Box>
        <Box position="absolute" pl={1} pt={0.5}>
          <Typography variant="body1" className={classes.progressText}>
            {account.available.toFixed(2)}/{account.budget.toFixed(2)} PLN
          </Typography>
        </Box>
        <Box position="absolute" right="0" top="0" bottom="0">
          <Box pr={1} pt={0.5}>
            <AvatarGroup max={4}>
              {account.users.map((userInfo) => {
                const user = getUserById(userInfo.id);
                return (
                  <Avatar
                    key={user.id}
                    alt={user.fullName}
                    src={user.avatar}
                    className={classes.avatar}
                  />
                );
              })}
            </AvatarGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Link to={`/accounts/details/${account.id}`}>
      <CardView account={account} bottomSlot={<ProgressBar />} />
    </Link>
  );
};
