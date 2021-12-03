import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbart from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedPageExample from "./pages/ProtectedPageExample";
import SignUp from "./pages/SignUp";
import "./App.css";
import { AuthProvider } from "./util/auth";

function App() {
  return (

      <Router>
        <AuthProvider>
          <Navbart />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            {/* Use PrivateRoute for pages that should only be accessible to a
            user that has logged in.*/}
            <PrivateRoute path="/protected">
              <ProtectedPageExample />
            </PrivateRoute>
          </Switch>
        </AuthProvider>
      </Router>

  );
}

export default App;
