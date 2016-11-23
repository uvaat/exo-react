import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import StudentForm from '../views/student-form';
import Alert from '../views/Alert';
import * as studentApi from '../../api/student-api';

class StudentCreateContainer extends React.Component {

	create(student){
		studentApi.createStudent(student);
	}

	cancel(){
		browserHistory.goBack();
	}

	render() {

		let msg;
		if(this.props.confirmation){
			msg = <Alert msg={ "L'étudiant " + this.props.student.name.first  + " " + this.props.student.name.last + " à bien été ajouté" } status="success" />;
		}

		return (
			<div>
				<h1 className="title-page">Ajouter un élève</h1>
				<div className="wrapper">
					{msg}
					<StudentForm 
						submit={this.create} 
						cancel={this.cancel}
						buttonTitle="Ajouter"/>
				</div>
			</div>
			)

	}

}

const mapStateToProps = function(store) {
    return {
        student: store.studentState.student,
        confirmation : store.studentState.confirmation
    };
};

export default connect(mapStateToProps)(StudentCreateContainer);