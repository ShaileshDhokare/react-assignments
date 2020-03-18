import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import UserListing from "./components/user/UserListing";
import Table from "./components/tic-tac/Table";
import Navbar from "./components/layout/Navbar";
import Register from "./components/form-validations/Register";
import Todos from "./components/todos/Todos";

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <div className="app">
                  <Navbar />
                  <Switch>
                     <Route exact path="/tic-tac-toe" component={Table} />
                     <Route exact path="/user-listing-app" component={UserListing} />
                     <Route exact path="/todos" component={Todos} />
                     <Route exact path="/form-validation" component={Register} />
                  </Switch>
               </div>
            </Router>
         </Provider>
      );
   }
}

export default App;
