import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import { createStore, applyMiddleware, combineReducers } from 'redux'


import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import { Layout, Count, People, Recipe, RecDetails, Xsxk, Yangshengclock, Yingyang } from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  reducer,
  // DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

const muiTheme = getMuiTheme({
  palette: {
    textColor: green500,
    primary1Color: green500,
    primary2Color: green500,
  },
  appBar: {
    height: 50,
  },
});

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={Layout}>
            <IndexRoute component={People}/>
            <Route path="people" component={People} />
            <Route path="recipe" component={Recipe} />
            <Route path="recDetails" component={RecDetails} />
            <Route path="yangshengclock" component={Yangshengclock} />
            <Route path="yingyang" component={Yingyang} />
            <Route path="xsxk" component={Xsxk} />
          </Route>
        </Router>
      </div>
    </Provider>
  </MuiThemeProvider>, document.getElementById('app')
);
