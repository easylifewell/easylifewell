const React = require('react');
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {green500} from 'material-ui/styles/colors';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/app';

const favIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const chartIcon = <FontIcon className="material-icons">add_shopping_cart</FontIcon>;
const faceIcon = <FontIcon className="material-icons">face</FontIcon>;

class App extends Component {
  componentWillMount() {
    // 由 react-redux 注入：
    let { dispatch } = this.props;
    dispatch(actionCreators.getUserInfo());
  }

  render() {
  	let { dispatch, selectedIndex, userInfo, children } = this.props;
    console.log(userInfo)
    if(userInfo.code && userInfo.code !== 200) {
    	browserHistory.push('/login');
    };
  	return (
    	<div dispatch={dispatch}>
    		<div className="appHeader" style={{background: green500}}>
    			<FontIcon className="material-icons" style={{color: '#fff'}}>dashboard</FontIcon> Yishengyuan
    		</div>
      		<div {...this.props} style={{marginBottom: 50, marginTop: 50}}>{children}</div>
      		<Paper zDepth={1} style={{position: 'fixed', width: '100%', height: 50, bottom: 0}}>
	        <BottomNavigation selectedIndex={selectedIndex}>
	          <BottomNavigationItem
	            label="菜谱"
	            icon={favIcon}
	            onTouchTap={() => dispatch(actionCreators.select(0))}
	          />
	          <BottomNavigationItem
	            label="购物车"
	            icon={chartIcon}
	            onTouchTap={() => dispatch(actionCreators.select(1))}
	          />
	          <BottomNavigationItem
	            label="关于"
	            icon={faceIcon}
	            onTouchTap={() => dispatch(actionCreators.select(2))}
	          />
	        </BottomNavigation>
	      </Paper>
    	</div>
  	 )
	}
}

App.defaultProps = {
  name: 'Mary'
};

export default connect(
  state => ({
  	selectedIndex: state.app.selectedIndex,
		userInfo: state.app.userInfo
  	})
)(App);
