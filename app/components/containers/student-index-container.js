import React from 'react';
import { connect } from 'react-redux';
import StudentList from '../views/student-list';
import * as studentApi from '../../api/student-api';
import store from '../../store';
import { Link } from 'react-router';

class StudentIndexContainer extends React.Component {

    componentDidMount(){
        studentApi.getStudents();
    }

    render(){
        return (
            <div>
                <h1 className="title-page">{this.props.route.title}</h1>
                <div className="wrapper list">
                    <StudentList students={this.props.students} deleteStudent={studentApi.deleteUser} />
                </div>
            </div>
            )

    }

}

const mapStateToProps = function(store) {
    return {
        students: store.studentState.students
    };
};

export default connect(mapStateToProps)(StudentIndexContainer);
