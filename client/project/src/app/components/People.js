const React = require('react');
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/content/remove';
import { Link, browserHistory } from 'react-router';
import {green500} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
const People = React.createClass({
  	getInitialState() {
		return {
			eatTime: 1,
			addBtnDisplay: true,
			addUserAge: '',
			addUserSex: '',
			addUserNumber: 1,
			userData: [{
				id: 15,
				age: '12-18岁',
				sex: '男',
				userNumber: 5
			}, {
				id: 22,
				age: '19-28岁',
				sex: '男',
				userNumber: 4
			}, {
				id: 33,
				age: '6岁以下',
				sex: '男',
				userNumber: 1
			}, {
				id: 24,
				age: '30-45岁',
				sex: '男',
				userNumber: 3
			}, {
				id: 5,
				age: '60岁以上',
				sex: '女',
				userNumber: 2
			}]
		}
	},
	// 早中晚餐选择
	changeEatTime(value) {
		this.setState({
			eatTime: value
		});
	},
	getSelectTime() {
		let eatTime = this.state.eatTime;
		return (
			<div style={{margin: '15px 0', textAlign: 'center'}}>
				<FlatButton label="早餐" primary={eatTime === 1 ? true : false} onClick={this.changeEatTime.bind(this, 1)} />
				<FlatButton label="午餐" primary={eatTime === 2 ? true : false} onClick={this.changeEatTime.bind(this, 2)} />
				<FlatButton label="晚餐" primary={eatTime === 3 ? true : false} onClick={this.changeEatTime.bind(this, 3)} />
			</div>
		);
	},
	handleChangeAddUser(field, e, number, selectValue) {
		if (field === 'number') {
			this.setState({
				addUserNumber: number
			});
		}
		if (field === 'age') {
			this.setState({
				addUserAge: selectValue
			});
		}
		if (field === 'sex') {
			this.setState({
				addUserSex: selectValue
			});
		}
	},
	// 吃饭人员
	getUserTable() {
		let me = this;
		const listItem = me.state.userData.map(function (item, index) {
			return <tr key={index}>
					<td>{item.age}</td>
					<td>{item.sex}</td>
					<td>{item.userNumber}</td>
					<td><IconButton iconStyle={{color: green500}} onClick={me.deleteUser.bind(me, index)}><NavigationClose /></IconButton></td>					
				</tr>;
		});

		return <div>
			<div style={{padding: 10}}>
				<table style={{textAlign: 'center', width: '100%', color: '#666', fontWeight: 'normal'}}>
					<thead>
						<tr style={{color: green500}}>
							<th>年龄段</th>
							<th>性别</th>
							<th>数量</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						{listItem}
					</tbody>
		      	</table>
		    </div>
			<div style={{ background: '#f4f4f4', padding: 10, display: this.state.addBtnDisplay ? 'none' : 'block' }}>
	          	<SelectField style={{width: '100%'}} value={this.state.addUserAge} hintText="请选择年龄段" onChange={this.handleChangeAddUser.bind(this, 'age')}>
		          <MenuItem value="6岁以下" primaryText="6岁以下" />
		          <MenuItem value="10-18岁" primaryText="10-18岁" />
		          <MenuItem value="18到30岁" primaryText="18到30岁" />
		          <MenuItem value="30到50岁" primaryText="30到50岁" />
		          <MenuItem value="50岁以上" primaryText="50岁以上" />
		        </SelectField>
		        <SelectField style={{width: '100%'}} value={this.state.addUserSex} hintText="请选择性别" onChange={this.handleChangeAddUser.bind(this, 'sex')}>
		          <MenuItem value="男" primaryText="男" />
		          <MenuItem value="女" primaryText="女" />
		        </SelectField>
		        人数：{this.state.addUserNumber}
		        <Slider defaultValue={1} step={1} max={20} min={1} onChange={this.handleChangeAddUser.bind(this, 'number')} />
		        <div style={{margin: '0 0 20px', textAlign: 'center'}}>
		        	<RaisedButton label="添加" primary={true} onClick={this.addUser} style={{marginRight: '4%', width: '48%'}} />
		        	<RaisedButton label="取消" onClick={this.hideAddForm} style={{width: '48%'}} />
		        </div>
	        </div>
			<div style={{ margin: '25px 0', display: this.state.addBtnDisplay ? 'block' : 'none' }}>
				<RaisedButton label="添加用餐成员" fullWidth={true} onClick={this.displayAddForm} />
	        </div>
		</div>;
	},
	// 提交按钮
	getButtons() {
		return <div style={{margin: '15px 0', textAlign: 'center'}}>
			<RaisedButton label="智能推荐" primary={true} onClick={this.submitData} style={{marginRight: '4%', width: '48%'}} />
    		<RaisedButton label="取消" style={{width: '48%'}} />
		</div>;
	},
	getLinks() {
		return <div>
			<FlatButton label="基于中医养生钟" primary={true} href="#/yangshengclock" />
    		<FlatButton label="基于中华营养协会DIRs摄入推荐" primary={true} href="#/yingyang" />
    		<FlatButton label="基于食物指教相生相克" primary={true} href="#/xsxk" />
		</div>;
	},
	submitData() {
		browserHistory.push('/recipe');
	},

	displayAddForm() {
		this.setState({
			addBtnDisplay: false
		});
	},
	hideAddForm() {
		this.setState({
			addBtnDisplay: true
		});
	},
	deleteUser(item, e) {
		this.state.userData.splice(item, 1);
		this.setState({
			userData: this.state.userData
		});
	},
	addUser(e) {
		let {addUserAge, addUserSex, addUserNumber, userData} = this.state;
		userData.push({
			id: userData.length + 1,
			age: addUserAge,
			sex: addUserSex,
			userNumber: addUserNumber
		});
		this.setState({
			userData: userData
		});
	},
	render() {
		return <div>
    		<AppBar
    			className="appbar"
			    title="就餐选择" showMenuIconButton={false} titleStyle={{fontSize: '1.4em'}}
			  />
			<Card>
		    <CardText>
		      {this.getSelectTime()}
		      <Divider />
        		{this.getUserTable()}
        		<Divider />
        		{this.getButtons()}
        		<Divider />
        		{this.getLinks()}
		    </CardText>
		  </Card>
      		<div>
        		
      		</div>
		</div>;
	}
});
export default People;
