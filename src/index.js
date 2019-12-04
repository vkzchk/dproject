import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './assets/index.css';
import App from './scenes/home/components/app/App';
import Homepage from './scenes/home/components/homepage/homepage';
import Contactform from './scenes/form/components/contactform/contactform';
import Portfoliopage from './scenes/portfolio/components/portfoliopage/portfoliopage';
import MouseTracker from './scenes/portfolio/components/renderprops/components/mouseTracker'

import Fetchapi from './scenes/portfolio/components/fetchapi/fetchapi';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/portfolio' component={Portfoliopage} />
        <Route exact path='/contact' component={Contactform} />
        <Portfoliopage>
          <Route exact path='/portfolio/fetchapi' component={Fetchapi} />
          <Route exact path='/portfolio/renderprops' component={MouseTracker} />
        </Portfoliopage>
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
