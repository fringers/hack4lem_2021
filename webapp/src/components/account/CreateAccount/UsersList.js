import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { UserItem } from "./UserItem/UserItem";
import { EmailField } from "./UserItem/EmailField";

const ID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const defaultUser = () => ({
  id: ID(),
  email: "jan.kowalski@gmail.com",
  contribution: "100",
  blockPayment: false,
});

const emptyUser = (email) => ({
  id: ID(),
  email: email,
  contribution: "",
  blockPayment: false,
});

export const UsersList = ({ onChange }) => {
  const [mainUser, setMainUser] = useState(defaultUser());
  const [users, setUsers] = useState([]);
  const [addEmail, setAddEmail] = useState([]);

  useEffect(() => {
    onChange([mainUser, ...users]);
  }, [onChange, mainUser, users]);

  const addUser = () => {
    if (!addEmail || !addEmail.length) return;
    setUsers([...users, emptyUser(addEmail)]);
    setAddEmail("");
  };

  const onMainUserUpdate = (data) => {
    setMainUser(data);
  };

  const onUserUpdate = (data, id) => {
    const result = users.map((item) => {
      if (item.id === id) return { id, ...data };
      else return item;
    });
    setUsers(result);
  };

  const onUserDelete = (id) => {
    const result = users.filter((item) => item.id !== id);
    setUsers(result);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="subtitle1">Osoby z dostępem do konta</Typography>
      </Grid>

      <Grid item container spacing={2} alignItems="center">
        <Grid item>
          <EmailField value={addEmail} onChange={setAddEmail} />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="secondary" onClick={addUser}>
            Dodaj osobę
          </Button>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <UserItem value={mainUser} onChange={onMainUserUpdate} own />
          </Grid>

          {users.map((item) => (
            <Grid item key={item.id}>
              <UserItem
                value={item}
                onChange={(data) => onUserUpdate(data, item.id)}
                onDelete={() => onUserDelete(item.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
