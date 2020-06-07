import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignupScreen from "./screens/SignupScreen";
import PreviewScreen from "./screens/PreviewScreen";
import AdminDashboard from "./screens/AdminDashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParentLayout from "./Layouts/ParentLayout";
import EditScreen from "./screens/EditScreen";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div className="App">
      {/* <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}> */}
        <Router>
          <ParentLayout>
            <Switch>
              <Route path="/" exact component={SignupScreen} />
              <Route path="/Preview" component={PreviewScreen} />
              <Route path="/Dashboard" component={AdminDashboard} />
              <Route path="/Edit" component={EditScreen} />
            </Switch>
          </ParentLayout>
        </Router>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;