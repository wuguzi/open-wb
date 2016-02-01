require('../../sass/login.scss');
// import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";
import Superagent from 'superagent';

import AutoFont from '../temp/autoFont.js';
import Md5 from '../temp/md5.js';
import Format from '../temp/format.js';
import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';

// import Ibootstrap from '../temp/lib/ibootstrap.all.min.js';
AutoFont.init();
InjectTapEventPlugin();

class Tab extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="login-tab">
				<div className="login-tab-unit active">注册</div>
				<div className="login-tab-unit">登录</div>
			</div>
		)
	}
}

class Input extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.initAv();
	}

	// 初始化第三方数据
	initAv() {
		window.onload = () => {
			const appid = 'zz7nf1fzbas63s5o0t3rudu4zij1f3n80jfjtfk4j5ks57b6';
			const appkey ='9x0nlvt0cno3dm000phoddmiw8ok18vwplaoybf3nuxegxzk';
			window.AV.initialize(appid, appkey);
			var TestObject = AV.Object.extend('TestObject');
			var testObject = new TestObject();
			testObject.save({
				foo: 'bar'
			}, {
			  	success: function(object) {
			   	 	// alert('LeanCloud works!');
			   	 	// console.log(object);
			  	}
			});
		}
	}

	// 获取手机验证码
	getCode() {
		const mobile = this.refs.mobile.value.trim();
	}

	// 提交注册
	btConfirm() {
		var 
			mobile = this.refs.mobile.value.trim();
		const 
			vars = this.props.vars,
			sharekey = vars.sharekey;
		if(Format.mobile(mobile)) {
			let timestamp = (new Date()).getTime(),
				url;
			timestamp += Md5.init(timestamp + sharekey);
			mobile += Md5.init(mobile + sharekey);
			url = FormatAjax.get(vars.apiPath + 'users/register.json', {
				timestamp: timestamp,
				mobile: mobile
			});
			Superagent.get(url).end(function(err, res) {
				if(res.status === 200) {
					var data = JSON.parse(Unicode.toHex(res.text));
					if(data.status.code === '0') {
						console.log(data);
					} else {
						alert(data.status.msg);
					}
				}
			});
		} else {
			alert('手机号格式不正确！');
		}
	}

	render() {
		return (
			<div id="login-input">
				<div className="login-input-unit">
					<input type="tel" placeholder="输入手机号" maxLength="11" ref="mobile" />
				</div>
				<div className="login-input-unit">
					<input type="text" placeholder="输入验证码" />
					<button className="login-code-bt" onTouchTap={ e => { this.getCode(e) } }>获取验证码</button>
				</div>
				<div id="login-confirm">
					<button className="login-confirm-bt" onTouchTap={ e => { this.btConfirm(e) } }>注册</button>
				</div>
				<div id="login-state">
				</div>
			</div>
		)
	}
}

class Other extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: [
				{
					imgUrl: this.props.vars.path + 'img/login/wechat@3x.png'
				},
				{
					imgUrl: this.props.vars.path + 'img/login/sina@3x.png'
				}
			]
		}
	}
	render() {
		return (
			<div id="login-other">
				<div id="login-tx">
					<div className="login-cf"></div>
					<div className="login-content">选择其它登录方式</div>
					<div className="login-cf"></div>
				</div>
				<div id="login-pro">
					<div className="login-pro-unit">
						<img src={this.state.img[0].imgUrl} />
					</div>
					<div className="login-pro-unit">
						<img src={this.state.img[1].imgUrl} />
					</div>
				</div>
			</div>
		)
	}
}

class Main extends React.Component {
	constructor() {
		super();
		const cf = new _config;
		this.state = {
			vars: cf.vars()
		}
	}

	render() {
		return (
			<div id="login-main">
				<Tab vars={this.state.vars}/>
				<Input vars={this.state.vars}/>
				<Other vars={this.state.vars}/>
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.querySelector('#login-content'));





