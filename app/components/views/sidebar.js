import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Sidebar extends React.Component {

	render(){
		return (
			<div className="sidebar">
				<div className="title">
					<i className="logo fa fa-user-circle-o" aria-hidden="true"></i>
				</div>
				<div className="buttons">
					<Link className="item-sidebar button button-block" to={'/ajouter'}>
						<i className="icon fa fa-user-plus" aria-hidden="true"></i>
						Ajouter
					</Link>
					<Link className="item-sidebar button button-block" to={'/'}>
						<i className="icon fa fa-list-ul" aria-hidden="true"></i>
						Liste
					</Link>
				</div>
			</div>
		)
	}

}

export default Sidebar;