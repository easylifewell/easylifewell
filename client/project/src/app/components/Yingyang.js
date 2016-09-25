const React = require('react');
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { browserHistory, Link } from 'react-router';
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';

const Yingyang = React.createClass({
	  back(e) {
      browserHistory.push('/');
    },
  	render() {
  		return <div>
  		<AppBar
  			iconElementLeft={<IconButton onClick={this.back}><NavigationLeft /></IconButton>}
          title="中国18-49岁成年居民膳食营养素参考摄入量"
        />
  			<img src="image/yingyang.png" width="100%" />
    		</div>;
  	}
});

export default Yingyang;