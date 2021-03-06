import React, { Component } from 'react';
import { Icon } from 'antd';
import './leftMenu.less';

export default class HeadNav extends Component {

	mapList = (list, selectId) => {
		return (
			<ul className="ul-list-name">
				{
					list.map((item) => {
						if (item.id === selectId) {
							return (
								<div className="menu-line active" key={item.type} onClick={this.props.selectNode} value={item.id}>
									<Icon type={item.type} className="menu-icon" />
									<li key={item.id} value={item.id} className="menu-li" >{item.name}</li>
								</div>
							)
						} else {
							return (
								<div className="menu-line" key={item.type} onClick={this.props.selectNode} value={item.id}>
									<Icon type={item.type} className="menu-icon" />
									<li key={item.id} value={item.id} className="menu-li" >{item.name}</li>
								</div>
							)
						}
					})
				}
			</ul>
		)
	}

	render() {
		return (
			<div id="menu">
				{this.mapList(this.props.data, this.props.selectId)}
			</div>
		)
	}
}
