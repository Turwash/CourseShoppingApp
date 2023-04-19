import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function authenticate(username, password) {
    if (username === 'Turwash' && password === 'Turwash@123') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) =>
            isLoggedIn ? (
              <ProductList history={history} />
            ) : (
              <Login authenticate={authenticate} setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
