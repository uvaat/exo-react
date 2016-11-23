import React from 'react';

class Alert extends React.Component {

	render(){
		return (
			<div className={"alert " + this.props.status }>
				{ this.props.msg }
			</div>
		)
	}

}

export default Alert;