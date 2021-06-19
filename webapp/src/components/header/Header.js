import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import { users } from "../../data/users";

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
            Paymate
          </Typography>
        </div>
        <Avatar src={users[0].avatar} alt={users[0].fullName} />
      </Toolbar>
    </AppBar>
  );
};
