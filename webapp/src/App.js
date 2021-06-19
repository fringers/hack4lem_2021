import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/header/Header";
import { Dashboard } from "./components/dashboard/Dashboard";
import { CreateAccount } from "./components/account/CreateAccount";
import { AccountDetails } from "./components/account/AccountDetails";
import { InteractiveCanvas } from "./components/InteractiveCanvas/InteractiveCanvas";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4e77cb",
      main: "rgb(0, 53, 116)",
      dark: "#00256b",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#cf4678",
      main: "#9A004C",
      dark: "#660025",
      contrastText: "#ffffff",
    },
    accent: {
      light: "#7fcb41",
      main: "#4C9A00",
      dark: "#0e6b00",
      contrastText: "#ffffff",
    },
  },
});

export const App = () => {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/interactivecanvas">
            <InteractiveCanvas />
          </Route>
          <Route path="/accounts/create">
            <Header />
            <CreateAccount />
          </Route>
          <Route path="/accounts/details/:id">
            <Header />
            <AccountDetails />
          </Route>
          <Route path="/">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};
