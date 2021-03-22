import React, { createContext, useState } from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import EnrolledEvents from './components/EnrolledEvents/EnrolledEvents';
import RegisterList from './components/Admin/RegisterList';
import AddEvent from './components/Admin/AddEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';




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
        <Route path="/events">
            <EnrolledEvents></EnrolledEvents>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/admin/registerdList">
            <RegisterList></RegisterList>
          </Route>
          <Route path="/admin/addEvent">
           <AddEvent></AddEvent>
          </Route>
          <PrivateRoute   path="/register/:id">
            <Register></Register>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
  
  </UserContext.Provider>
  );
}

export default App;
