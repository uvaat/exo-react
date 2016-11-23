import React from 'react';
import { Link } from 'react-router';

class Student extends React.Component {

	render(){

		let colorStyle = {
			background : this.props.datas.color
		}

		return (
			<Link to={'/' + this.props.datas.id}>
				<div className="student">
					<div className="detail">
						{this.props.datas.name.first} {this.props.datas.name.last}
					</div>
					<div className="action"></div>
				</div>
			</Link>
		)
	}

}

export default Student;