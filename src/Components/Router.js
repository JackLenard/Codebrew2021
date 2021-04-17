import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import English from "English";
import Maths from "./Maths";
import history from './history';
import { Router, Switch, Route } from "react-router-dom";
function Router(){
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Maths" component={Math} />
                    <Route path="/English" component={English} />
                    <Route path="/Arts" component={Arts} />
                    <Route path="/Science" component={Science} />
                </Switch>
            </Router>
        )
    }
}
