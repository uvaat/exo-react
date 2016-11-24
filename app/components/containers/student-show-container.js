import React from 'react';
import { connect } from 'react-redux';
import * as studentApi from '../../api/student-api';
import store from '../../store';
import Alert from '../views/alert';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import {deleteStudentSuccess} from '../../actions/student-actions';

class StudentshowContainer extends React.Component{

    componentDidMount() {
        studentApi.getStudent(this.props.params.studentId);
    }

    delete() {

        studentApi.deleteStudent(this.props.params.studentId)
        .then(response => {
            store.dispatch(deleteStudentSuccess(this.props.params.studentId));
            browserHistory.push('/');
        }, error => {
            console.log(error);
        });

    }

    cancel() {
        this.setState({confirm : false});
    }

    confirmDelete() {
        this.setState({confirm : true});
    }

	render() {

        let profil = '';
        if(this.props.student){
            profil = (<span>{this.props.student.name.first} {this.props.student.name.last}</span>);
        }
    
        let confirm = '';
        if(this.state && this.state.confirm){
            confirm = (<Alert 
                msg={ "Êtes vous sur de vouloir supprimer cet étudiant ?" }
                status="confirm"
                callbackConfirm={this.delete.bind(this)}
                callbackCancel={this.cancel.bind(this)}
                buttonConfim={'Oui'}
                buttonCancel={'Non'}
                />);
        }

        return (
            <div>
                <h1 className="title-page">
                    {profil}
                </h1>
                <div className="wrapper">
                    <Link className="button" to={'/' + this.props.params.studentId + '/edit'} >Éditer</Link>
                    <button className="button button-alert" onClick={this.confirmDelete.bind(this)}>Supprimer</button>
                </div>
                {confirm}
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

