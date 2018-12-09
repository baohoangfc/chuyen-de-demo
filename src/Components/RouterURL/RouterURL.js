import React, { Component } from 'react';
import {  Route,  Switch } from "react-router-dom";
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import About from '../About/About';
import Payment from '../Payment/Payment';
import Contact from '../Contact/Contact';
import Checkout from '../Checkout/Checkout';
import Error from '../404Fail/404Fail';
import Single from '../Single/Single';
import Login from '../Login/Login';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/payment" component={Payment} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/error" component={Error} />
                    <Route exact path="/single" component={Single} />
                    <Route exact path="/login" component={Login} />
                    <Route component={Home} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;
