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

class Login extends Component {
  componentWillMount() {
    // 由 react-redux 注入：
    let { dispatch } = this.props;
    dispatch(actionCreators.getUserInfo());
  }

  render() {
  	let { dispatch, userInfo, verCode, loginInfo } = this.props;
    if (!userInfo.code || loginInfo.code && loginInfo.code === 200) {
    	//browserHistory.push('/people');
      window.location.href = '/people';
    };
    let [phoneErrorMsg, loginErrorMsg] = ['', ''];
    if (verCode.code !== 200) {
    	phoneErrorMsg = verCode.msg
    };
    if (loginInfo.code !== 200) {
    	loginErrorMsg = loginInfo.msg
    }
  	return (
    	<div dispatch={dispatch}>
    		<div className="appHeader" style={{background: green500}}>
    			<FontIcon className="material-icons" style={{color: '#fff'}}>dashboard</FontIcon> Yishengyuan－请您登录
    		</div>
    		<Paper style={{marginTop: 50, padding: '20px 40px'}}>
    			<div>
	    			<TextField
				      hintText="请输入手机号"
				      onChange={(e) => dispatch(actionCreators.changePhoneNumber(e.target.value))}
				    />
				    <p style={{color: 'orange'}}>{phoneErrorMsg}</p>
				    <RaisedButton
				    	label="获取验证码"
				    	secondary={true}
				    	onTouchTap={() => dispatch(actionCreators.getVerCode(this.props.phoneNumber))}
				    />
				    <TextField
				      hintText="请输入验证码"
				      onChange={(e) => dispatch(actionCreators.setVerCode(e.target.value))}
				    />
				    <RaisedButton
				    	label="登录"
				    	primary={true}
				    	fullWidth={true}
				    	onTouchTap={() => dispatch(actionCreators.checkVerCode(this.props.verCode, this.props.phoneNumber))}
				    />
				    <p style={{color: 'orange'}}>{loginErrorMsg}</p>
				</div>
    		</Paper>
    	</div>
  	 )
	}
}

export default connect(
  state => ({
		userInfo: state.app.userInfo,
		phoneNumber: state.app.phoneNumber,
		verCode: state.app.verCode,
		loginInfo: state.app.loginInfo
  	})
)(Login);
