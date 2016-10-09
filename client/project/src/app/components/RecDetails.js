const React = require('react');
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import NavigationLeft from 'material-ui/svg-icons/navigation/chevron-left';
import { Link, browserHistory } from 'react-router'

const data = [
  {
    id: 0,
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '推荐一',
    des: '牛肉（热）＋土豆（平）＋胡萝卜（平）＋木瓜（平）',
    details: [
      {
        mateName: '圆白菜',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '土豆',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '牛乳',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '锅盔',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }
    ]
  },
  {
    id: 1,
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '推荐二',
    des: '牛肉（热）＋毛豆（平）＋猕猴桃（寒）',
    details: [
      {
        mateName: '圆白菜',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '土豆',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '牛乳',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '锅盔',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }
    ]
  },
  {
    id: 2,
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '推荐三',
    des: '西红柿（凉）＋鸡蛋（平）＋橙子（凉）',
    details: [
      {
        mateName: '圆白菜',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '土豆',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '牛乳',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '益生源',
          price: '45',
          sales: '209',
          certify: '认证商家, 有机认证, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }, {
        mateName: '锅盔',
        mateAttri: '热',
        mateImg: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        
        shopList: [{
          shopName: 'A菜市场',
          price: '34',
          sales: '333',
          certify: '认证商家, 有机认证',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }, {
          shopName: '清真',
          price: '25',
          sales: '663',
          certify: '认证商家, 第三方销售',
          mateRegionUrl: 'http://baidu.com',
          buyUrl: 'http://baidu.com',
        }]
      }
    ]
  },
];


const RecDetails = React.createClass({
  getInitialState() {
    const recid = window.location.hash.split('?')[1].split('&')[0].split('=')[1];
    const currentRec = data[recid];
    return {
      currentRec: currentRec
    };
  },
  getShopInfo(mateItem) {
    const shopCon = mateItem.shopList.map(function (item) {
      return <div key={item.shopName}>
        <div>
          <div><strong>{item.shopName}</strong> <span style={{float: 'right'}}>{item.price}/斤，月销量{item.sales}单</span></div>
          <div style={{fontStyle: 'italic', color: '#ccc', paddingBottom: '15px', margin: '15px 0'}}>{item.certify}</div>

          <div style={{borderBottom: '1px dashed #eee', paddingBottom: 15, marginBottom: 15}}>
            <RaisedButton label="查看产地" primary={true} href={item.mateRegionUrl} style={{marginRight: '10px'}} />
            <RaisedButton label="购买" secondary={true} href={item.buyUrl} />
          </div>
          
        </div>
      </div>;
    });
    return shopCon;
  },
  getTableContent() {
    const me = this;

    const tableCon = me.state.currentRec.details.map(function (item) {
      return <Card key={item.mateName}>
        <CardText>
          <div style={{height: '150px', overflow: 'hidden', position: 'relative'}}>
            <img src={item.mateImg} width="100%" />
            <strong
              style={{display: 'block',
                position: 'absolute',
                bottom: '0',
                left: '0',
                background: 'rgba(0, 0, 0, .4)',
                color: '#fff',
                width: '100%',
                padding: '10px'}}>
              {item.mateName} /（{item.mateAttri}）</strong>
          </div>
        </CardText>
        <CardText>
          {me.getShopInfo(item)}
        </CardText>
      </Card>;
    });
    return tableCon;
  },
  back(e) {
    browserHistory.push('/recipe');
  },
  render() {
      const currentRec = this.state.currentRec;
  		return <div>
      <AppBar
      className="appbar"
      iconElementLeft={<IconButton onClick={this.back}><NavigationLeft /></IconButton>}
          title="食材采购"
        />
      <Card>
        <CardText>
          {currentRec.title}<br />
          {currentRec.des}
          <div style={{textAlign: 'right', marginTop: 10}}>
            <RaisedButton type="default" href="" label="点击查看该食谱相关制作" />
          </div>
        </CardText>
        </Card>
          <div className="table">
            {this.getTableContent()}
          </div>
    </div>;
  	}
});

export default RecDetails;