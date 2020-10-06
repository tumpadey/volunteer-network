import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import EventRegistration from './components/EventRegistration/EventRegistration';
import Login from './components/Login/Login';
import SelectedEvent from './components/SelectedEvent/SelectedEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return(
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    
  <Router>
  
    <Switch>
      <Route path="/home">
       <Home></Home>

      </Route>

      <PrivateRoute path="/eventRegistration/:id">
        <EventRegistration />
      </PrivateRoute>

      <Route path="/login">
        <Login></Login>
      </Route>

      <Route path="/selectedEvent">
          <SelectedEvent></SelectedEvent>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>
    </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
