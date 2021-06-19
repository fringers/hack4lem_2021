import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Avatar from "@material-ui/core/Avatar";
import { getCategoryText } from "../../data/categories";
import { getRenewalPeriodText } from "../../data/renewalPeriods";
import { getUserById } from "../../data/users";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  textSeparator: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  progressBoxWrapper: {
    height: 40,
  },
  progressBar: {
    height: 40,
    borderRadius: 8,
  },
  progressText: {
    color: "white",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export const BudgetPreviewItem = ({ account }) => {
  const classes = useStyles();

  const percent = (account.available * 100) / account.budget;

  return (
    <Card>
      <CardActionArea component={Link} to={`/accounts/details/${account.id}`}>
        <CardContent>
          <Box>
            <Typography display="inline" variant="body2">
              {getCategoryText(account.category)}
            </Typography>
            <Typography
              display="inline"
              variant="body2"
              className={classes.textSeparator}
            >
              |
            </Typography>
            <Typography display="inline" variant="body2">
              {getRenewalPeriodText(account.renewalPeriod)}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6">{account.name}</Typography>
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

              <Box position="absolute" pl={1} pt={0.5}>
                <Typography variant="h6" className={classes.progressText}>
                  {account.available}/{account.budget} PLN
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
