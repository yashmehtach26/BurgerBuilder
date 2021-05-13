import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Orders from './components/Orders/Orders';
import Auth from './containers/Auth/Auth';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/orders" component={Orders}/>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/" exact component={BurgerBuilder}/>

            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
