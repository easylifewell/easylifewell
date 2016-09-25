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

import { createStore, combineReducers } from 'redux'
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

const store = createStore(
  reducer,
  DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
  <MuiThemeProvider>
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
