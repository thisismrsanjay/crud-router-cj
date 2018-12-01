import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

//Functional COmponents
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

//ClassBased Components
import Products from './containers/Products';
import ViewProduct from './containers/ViewProduct';
import CreateProduct from './containers/CreateProduct';
import EditProduct from './containers/EditProduct';




class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <main className="container">

      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/products/create" component={CreateProduct}/>
        <Route exact path="/products/:id/edit" component={EditProduct}/>
        <Route exact path="/products/:id" component={ViewProduct}/>
        <Route  path="*" component={NotFound}/>
      </Switch>
       {/* <LandingPage/> */}
      </main>
      </div>
    );
  }
}

export default App;
