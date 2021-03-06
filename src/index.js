import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom'
import Projects from './components/projects';
import Introduction from './components/introduction';
import Articles from './components/articles';
import IrunaStall from './components/projects/irunastall';
import DiscordBot from './components/projects/discordbot';

const routing = (
    <BrowserRouter basename={window.location.pathname || ''}>
        <div>
            <Route  path="/projects" component={Projects}/>
            <Route exact path="/" component={Introduction}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/irunastall" component={IrunaStall}/>
            <Route path="/discordbot" component={DiscordBot}/>
            
        </div>

    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
