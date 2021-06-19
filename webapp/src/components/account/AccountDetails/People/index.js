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
import { users as usersData } from "../../../../data/users";

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

  console.log({ users });

  return (
    <div className={classes.container}>
      <Typography variant="h5">Osoby</Typography>
      <Paper>
        <Grid container>
          <Grid item xs={8}>
            <Chart />
          </Grid>
          <Grid item xs={4}>
            <List classes={{ root: classes.listRoot }}>
              {users.map(({ id }) => {
                const { fullName, avatar, bankAvatar } = usersData.find(
                  (u) => u.id === id
                );
                console.log({ fullName });
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

// </ListItem>
// <ListItem>
//   <ListItemAvatar>
//     <Avatar
//       alt="Travis Howard"
//       src="https://material-ui.com/static/images/avatar/2.jpg"
//     />
//   </ListItemAvatar>
//   <ListItemText
//     primary={
//       <>
//         <Typography component="span" variant="body1">
//           Travis Howard
//         </Typography>
//       </>
//     }
//   />
// </ListItem>
// <ListItem>
//   <ListItemAvatar>
//     <Avatar
//       alt="Cindy Baker"
//       src="https://material-ui.com/static/images/avatar/3.jpg"
//     />
//   </ListItemAvatar>
//   <ListItemText primary="Sandra Adams" secondary={null} />
// </ListItem>
