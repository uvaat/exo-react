import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import StudentForm from '../views/student-form';
import Alert from '../views/Alert';
import * as studentApi from '../../api/student-api';

class StudentEditContainer extends React.Component {

	componentDidMount() {

		this.studentId = this.props.params.studentId;
        studentApi.getStudent(this.props.params.studentId);

    }

	edit(student){
		studentApi.editStudent(this.studentId, student);
	}

	cancel(){
		browserHistory.goBack();
	}

	render() {

		let title = '';
		if(this.props.student){
			title = 'Éditer - ' + this.props.student.name.first + ' ' + this.props.student.name.last;
		}

		let msg;
		if(this.props.confirmation){
			msg = <Alert msg={ "L'étudiant " + this.props.student.name.first  + " " + this.props.student.name.last + " a bien été mis à jour" } status="success" />;
			title = 'Éditer - ' + this.props.student.name.first + ' ' + this.props.student.name.last;
		}

		return (
			<div>
				<h1 className="title-page">
                    { title }
                </h1>
				<div className="wrapper">
					{msg}
					<StudentForm student={this.props.student} 
						submit={this.edit.bind(this)}
						cancel={this.cancel}
						buttonTitle="Éditer"/>
				</div>
			</div>
			)

	}

}

const mapStateToProps = function(store) {

	console.log(store);

    return {
        student : store.studentState.student,
        confirmation : store.studentState.confirmation
    };
};

export default connect(mapStateToProps)(StudentEditContainer);