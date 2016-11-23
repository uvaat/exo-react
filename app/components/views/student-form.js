import React from 'react';

class StudentForm extends React.Component{

	componentDidUpdate() {

        if(this.props.student){
        	
        	this.refs.first.value = this.props.student.name.first;
        	this.refs.last.value = this.props.student.name.last;
        	
        }

    }

	submitStudent(event) {

		event.preventDefault();
		var user = {};
		
		if(this.refs.first.value && this.refs.last.value){

			user.name = {
				first : this.refs.first.value,
				last : this.refs.last.value
			};

			this.props.submit(user);

		}

		return;

	}

	render() {

		let bntCancel = '';
		if(this.props.cancel)
			bntCancel = <a className="button button-light" onClick={this.props.cancel}>Annuler</a>

		return (
			<form className="form" onSubmit={this.submitStudent.bind(this)}>
				<div className="item-form item-text">
					<input type="text" ref="first" placeholder="Nom"/>
				</div>
				<div className="item-form item-text">
					<input type="text" ref="last" placeholder="Prénom" />
				</div>
				<div className="item-form item-submit">
					<button className="button button-submit">{this.props.buttonTitle}</button>
					{bntCancel}
				</div>
			</form>
			);

	}

}

export default StudentForm;