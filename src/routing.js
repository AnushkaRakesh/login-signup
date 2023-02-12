import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './App';
import Login from './Login';
import Register from './Register';


const Router = ({location}) => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            {/* using params in /listing (see :id) */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    )
}

export default Router;