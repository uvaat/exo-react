import React from 'react';
import { Link } from 'react-router';
import Student from '../views/student';

class StudentList extends React.Component {

    render(){

        return (
            <div className="data-list">
                {this.props.students.map(student => {
                    return (<Student key={student.id} datas={student} />);
                })}
            </div>
            )

    }

}

export default StudentList;
