const React = require('react');
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { select } from '../actions/app';

const recentsIcon = <FontIcon className="muidocs-icon-action-favorite" />;
const favoritesIcon = <FontIcon className="muidocs-icon-action-add-shopping-cart" />;
const nearbyIcon = <FontIcon className="muidocs-icon-action-face" />;

function App({ children, selectedIndex, select }) {

  	return (
    	<div>
      		<div style={{marginBottom: 50}}>{children}</div>
      		<Paper zDepth={1} style={{position: 'fixed', width: '100%', height: 50, bottom: 0}}>
	        <BottomNavigation selectedIndex={selectedIndex}>
	          <BottomNavigationItem
	            label="菜谱"
	            icon={recentsIcon}
	            onTouchTap={() => select(0)}
	          />
	          <BottomNavigationItem
	            label="购物车"
	            icon={favoritesIcon}
	            onTouchTap={() => select(1)}
	          />
	          <BottomNavigationItem
	            label="关于"
	            icon={nearbyIcon}
	            onTouchTap={() => select(2)}
	          />
	        </BottomNavigation>
	      </Paper>
    	</div>
  	)
}

export default connect(
	state => ({ selectedIndex: state.app.selectedIndex }),
	{select}
)(App)