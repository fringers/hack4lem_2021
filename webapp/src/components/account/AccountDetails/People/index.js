import {
  Paper,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { Chart } from "../Chart";
import { getUserById } from "../../../../data/users";

const useStyles = makeStyles(({ spacing }) => ({
  container: { marginTop: spacing(2) },
  listRoot: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: spacing(-2),
  },
  bankAvatar: {
    width: 40,
    height: 40,
    zIndex: "10 !important",
    display: "flex",
    alignSelf: "flex-end",
    marginBottom: spacing(-2),
  },
}));

export const People = ({ users = [] }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">Osoby</Typography>
      <Paper>
        <Grid container>
          <Grid item xs={12} md={8} sm={8}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={4} sm={4}>
            <List classes={{ root: classes.listRoot }}>
              {users.map(({ id }) => {
                const { fullName, avatar, bankAvatar } = getUserById(id);
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <AvatarGroup>
                        <Avatar
                          classes={{ root: classes.avatar }}
                          alt={fullName}
                          src={avatar}
                        />
                        <Avatar
                          classes={{ root: classes.bankAvatar }}
                          alt={`bank${fullName}`}
                          src={bankAvatar}
                        />
                      </AvatarGroup>
                    </ListItemAvatar>
                    <ListItemText
                      component="div"
                      primary={
                        <Typography component="p" variant="body1">
                          {fullName}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
