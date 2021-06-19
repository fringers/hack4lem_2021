import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { UserAvatar } from "../avatar/UserAvatar";

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    flexGrow: 1,
  },
  title: {
    color: "white",
    textDecoration: "none",
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className={classes.titleWrapper}>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
          >
            PayMate
          </Typography>
        </div>

        <div>
          <UserAvatar />
        </div>
      </Toolbar>
    </AppBar>
  );
};
