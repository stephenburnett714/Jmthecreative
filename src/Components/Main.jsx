import React from 'react';
import Home from './Home'
import About from './About'
import Work from './Work'
import Process from './Process'
import '../styles/styles.scss'
import { Route } from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/work">
                <Work />
            </Route>

            <Route exact path="/process">
                <Process />
            </Route>
        </div>
    );
}

export default Main;