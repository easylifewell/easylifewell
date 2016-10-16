const React = require('react');
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import {green500} from 'material-ui/styles/colors';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/app';
import TextField from 'material-ui/TextField';

const favIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const chartIcon = <FontIcon className="material-icons">add_shopping_cart</FontIcon>;
const faceIcon = <FontIcon className="material-icons">face</FontIcon>;

class About extends Component {
  render() {
  	let { dispatch, userInfo } = this.props;
  	return (
    	<div dispatch={dispatch}>
    		{userInfo.phone}
    		{userInfo.realname}
    		{userInfo.username}
    		{userInfo.phone}
    	</div>
  	 )
	}
}

export default connect(
  state => ({
		userInfo: state.app.userInfo
  	})
)(About);
