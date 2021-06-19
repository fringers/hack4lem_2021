import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/header/Header";
import { Dashboard } from "./components/dashboard/Dashboard";
import { CreateAccount } from "./components/account/CreateAccount";
import { AccountDetails } from "./components/account/AccountDetails";
import { InteractiveCanvas } from "./components/InteractiveCanvas/InteractiveCanvas";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import font from "./font.woff";

const newFont = {
  fontFamily: "NewFont",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('NewFont'),
    local('NewFont-Regular'),
    url(${font}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ["NewFont"],
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [newFont],
      },
    },
  },
  palette: {
    primary: {
      light: "#4e77cb",
      main: "rgb(0, 53, 116)",
      dark: "#00256b",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#cf4678",
      main: "rgb(228, 32, 44)",
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
    <main>
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
    </main>
  );
};
