require('../../sass/fansGroup.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";

import Vars from '../temp/vars.js';
import autoFont from '../temp/autoFont.js';
import addScript from '../temp/addScript.js';
import Head from '../temp/head.js';

import UserMsg from '../common/userMsg.jsx';
import Tab from "../common/tab.jsx";
import Member from "../common/member.jsx";
import Tag from "../common/tag.jsx";
import Related from "../common/related.jsx";
import Activity from "../common/activity.jsx";
import Photo from "../common/photo.jsx";
import ScrollLoad from '../common/ScrollLoad.jsx';


import Nav from "../common/nav.jsx";
import Newest from "../common/newest.jsx";
import Hot from "../common/hot.jsx";
import Details from "../common/details.jsx";

autoFont.init();
InjectTapEventPlugin();

class FansGroup extends React.Component {
    constructor() {
        super();
        var cf = new _config;
        this.state = {
            vars : cf.vars(),
            tab: [
                {
                    name: '最新',
                    codeName: 'fansGroup-newest',
                    active: 'active'
                },
                {
                    name: '热门',
                    codeName: 'fansGroup-hot',
                    active: ''
                },
                {
                    name: '详情',
                    codeName: 'fansGroup-details',
                    active: ''
                }
            ],
            nodeList: []
        };
        // console.log(this.state.vars);
    }

    initializeTouchEvents() {
        return true;
    }

    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            const loadNode = ReactDOM.findDOMNode(this.refs.load);
            var 
                viewT = window.pageYOffset,
                viewH = window.innerHeight,
                clientT = loadNode.offsetTop;
        });
    }

    tapMemu(e) {
        const node = ReactDOM.findDOMNode(e.target);
        if(node.className.indexOf('userMsg-Menu') !== -1 || node.parentNode.className.indexOf('userMsg-Menu') !== -1) {
            document.querySelector('#nav').classList.add('active');
            document.querySelector('.base-body').classList.add('active');
        }
    }

    tapTab(e) {
        const node = ReactDOM.findDOMNode(e.target);
        const tab = this.state.tab;
        const ix = Number(node.getAttribute('data-ix'));
        for(var i = 0, l = tab.length; i < l; i++) {
            if(i === ix) {
                tab[i].active = 'active';
            } else {
                tab[i].active = '';
            }
        }
        this.setState({tab: tab});
    }

    render() {
        return (
            <div>
                <div className="base-nav">
                    <Nav vars={this.state.vars}></Nav>
                </div>
                <div className="base-body">
                    <section id='fansGroup-head' onTouchTap={ e => {this.tapMemu(e)} }>
                        <UserMsg vars={this.state.vars}></UserMsg>
                    </section>
                    <section id="fansGroup-tab" onTouchTap={ e => {this.tapTab(e)} }>
                        <Tab data={this.state.tab}></Tab>
                    </section>
                    <section id="fansGroup-newest" className={'fansGroup-md ' + this.state.tab[0].active}>
                        <Newest vars={this.state.vars}></Newest>
                    </section>
                    <section id="fansGroup-hot" className={'fansGroup-md ' + this.state.tab[1].active}>
                        <Newest vars={this.state.vars}></Newest>
                    </section>
                    <section id="fansGroup-details" className={'fansGroup-md ' + this.state.tab[2].active}>
                        <Details></Details>
                    </section>
                </div>
                <ScrollLoad ref='load'></ScrollLoad>
            </div>
        )
    }
}

ReactDOM.render(<FansGroup name="Nate" />, document.getElementById('fansGroup-content'));
