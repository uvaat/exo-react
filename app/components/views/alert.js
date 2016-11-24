import React from 'react';

class Alert extends React.Component {

	getButton(className, content, callBack) {
		return (<button 
				className={"button " + className}
				onClick={callBack}>
				{content}
				</button>);
	}

	render(){

		let buttonConfim = '';
		if(this.props.buttonConfim){
			buttonConfim = this.getButton(
				'button-confirm', 
				this.props.buttonConfim,
				this.props.callbackConfirm
				);
		}

		let buttonCancel = '';
		if(this.props.buttonCancel){
			buttonCancel = this.getButton(
				'button-cancel', 
				this.props.buttonCancel,
				this.props.callbackCancel
				);
		}
		
		return (
			<div className={"alert " + this.props.status }>
				{ this.props.msg } { buttonConfim } { buttonCancel }
			</div>
		)
	}

}

export default Alert;