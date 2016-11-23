import React from 'react';
import { connect } from 'react-redux';
import * as studentApi from '../../api/student-api';
import store from '../../store';
import StudentProfil from '../views/student-profil';
import { Link } from 'react-router';
import Router from 'react-router';
import {deleteStudentSuccess} from '../../actions/student-actions';

class StudentshowContainer extends React.Component{

	componentDidMount() {
        studentApi.getStudent(this.props.params.studentId);
    }

    delete (){

        studentApi.deleteStudent(this.props.params.studentId)
        .then(response => {
            store.dispatch(deleteStudentSuccess(this.props.params.studentId));
            //Router.browserHistory.push('/');
        }, error => {
            console.log(error);
        });

    }

	render() {

        let profil = '';
        if(this.props.student){
            profil = (<span>{this.props.student.name.first} {this.props.student.name.last}</span>);
        }

        return (
            <div>
                <h1 className="title-page">
                    {profil}
                </h1>
                <div className="wrapper">
                    <Link className="button" to={'/' + this.props.params.studentId + '/edit'} >Éditer</Link>
                    <button className="button button-alert" onClick={this.delete.bind(this)}>Supprimer</button>
                </div>

            </div>
            )

	}

}

const mapStateToProps = function(store) {
    return {
        student : store.studentState.student
    };
};

export default connect(mapStateToProps)(StudentshowContainer);

