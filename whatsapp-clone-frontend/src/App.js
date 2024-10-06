import React, { useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponents";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const isLoggedInContext = React.createContext({
  isLoggedIn: false,
  setStatus: () => {},
});

export const LoggedInUserNameContext = React.createContext({
  LoggedInUserName: "",
  setLoggedInUserName: () => {},
});

export const LoggedInUserIdContext = React.createContext({
  LoggedInUserId: "",
  setLoggedInUserId: () => {},
});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;
function App() {
  const [isLoggedIn, setStatus] = useState(false);
  const value = { isLoggedIn, setStatus };

  const [LoggedInUserName, setLoggedInUserName] = useState(null);
  const value2 = { LoggedInUserName, setLoggedInUserName };

  const [LoggedInUserId, setLoggedInUserId] = useState(null);
  const value3 = { LoggedInUserId, setLoggedInUserId };

  return (
    <Router>
      <LoggedInUserIdContext.Provider value={value3}>
      <LoggedInUserNameContext.Provider value={value2}>
        <isLoggedInContext.Provider value={value}>
          <Container>
            <Switch>
              {!isLoggedIn && (
                <Route path="/login">
                  <LoginPage />
                </Route>
              )}

              {isLoggedIn && (
                <Route path="/welcome">
                  <ContactListComponent LoggedInUserName={LoggedInUserName}/>
                </Route>
              )}
            </Switch>
          </Container>
        </isLoggedInContext.Provider>
      </LoggedInUserNameContext.Provider>
      </LoggedInUserIdContext.Provider>
    </Router>
  );
}

export default App;
