const React = require('react');
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory, Link } from 'react-router';
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';

const data = [
  {
  	id: 0,
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '推荐一',
    des: '牛肉（热）＋土豆（平）＋胡萝卜（平）＋木瓜（平）',
  },
  {
  	id: 1,
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '推荐二',
    des: '牛肉（热）＋毛豆（平）＋猕猴桃（寒）',
  },
  {
  	id: 2,
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '推荐三',
    des: '西红柿（凉）＋鸡蛋（平）＋橙子（凉）',
  },
];

const Recipe = React.createClass({
  	getDetails(item, e) {
  		browserHistory.push('/recDetails?recid=' + item.id);
  	},
  	back(e) {
      browserHistory.push('/');
  	},
  	render() {
  		let me = this;
  		let listItem = data.map(function (item) {
  			return <ListItem
		        primaryText={item.title}
        		secondaryText={item.des}
		        key={item.id}
		        onClick={me.getDetails.bind(me, item)}
		        leftAvatar={<Avatar src={item.img} />}
		      />;
  		});
  		return <div>
  		<AppBar
  			iconElementLeft={<IconButton onClick={me.back}><NavigationLeft /></IconButton>}
          title="菜谱推荐"
        />
        <div style={{textAlign: 'center'}}>
          <FlatButton label="换一换" primary={true} />
        </div>
  			<List>
      			{listItem}
    		</List>
    		</div>;
  	}
});

export default Recipe;