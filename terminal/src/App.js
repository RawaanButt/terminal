import React from "react";
import TopMenu from "./components/topmenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/landingpage";
import Products from "./components/products/products";

import NotFound from "./components/notfound";
import NewProduct from "./components/products/newproduct";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/products/new" component={NewProduct} />

            <Route path="/products/:page?" component={Products} />

            <Route path="/notfound" component={NotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="notfound" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
