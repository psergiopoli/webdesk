import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { App } from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AboutComponent } from './about/about.component';
import { ConfigComponent } from './config/config.component';
import { MenuComponent } from './menu.component';
//TODO Adicionar lint
//TODO AJustar Imports

ReactDOM.render(
<BrowserRouter>
    <MenuComponent></MenuComponent>
    <Switch>
        <Route path='/' exact={true} component={App}/>
        <Route path='/config' exact={true} component={ConfigComponent}/>
        <Route path='/about' exact={true} component={AboutComponent}/>
    </Switch>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
