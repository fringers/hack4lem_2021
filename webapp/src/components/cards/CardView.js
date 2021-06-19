import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { getCategoryText } from "../../data/categories";
import { getRenewalPeriodText } from "../../data/renewalPeriods";
import { getCategoryCard } from "../../data/cards";

const useStyles = makeStyles((theme) => ({
  textBg: {
    backgroundColor: "rgb(158, 178, 202, 0.85)",
    padding: "2px 8px",
    margin: "4px 0",
    color: "white",
    borderRadius: "4px",
    maxWidth: "100%",
  },
  textSeparator: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  wrapper: {
    width: "100%",
    paddingTop: "62%",
    position: "relative",
    color: "black",
  },
  content: {
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  contentGrid: {
    padding: "8px 16px",
    height: "100%",
  },
}));

export const CardView = ({ account, bottomSlot }) => {
  const classes = useStyles();

  const cardImg = getCategoryCard(account.category);

  return (
    <Box className={classes.wrapper}>
      <Box
        className={classes.content}
        style={{ backgroundImage: `url('${cardImg}')` }}
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          className={classes.contentGrid}
        >
          <Grid
            item
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Box className={classes.textBg}>
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

            <Box
              className={classes.textBg}
              display={{ xs: "block", sm: "none" }}
            >
              <Typography variant="body2">{account.name}</Typography>
            </Box>
            <Box
              className={classes.textBg}
              display={{ xs: "none", sm: "block" }}
            >
              <Typography variant="h6">{account.name}</Typography>
            </Box>
          </Grid>
          <Grid item>{bottomSlot}</Grid>
        </Grid>
      </Box>
    </Box>
  );
};
