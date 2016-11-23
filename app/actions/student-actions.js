import * as types from '../actions/action-types';

export function createStudentSuccess(student){

    return {
        type: types.CREATE_STUDENT_SUCCESS,
        student
    };

}

export function getStudentsSuccess(students) {

    return {
        type: types.GET_STUDENTS_SUCCESS,
        students
    };

}

export function getStudentSuccess(student) {
    return {
        type: types.GET_STUDENT_SUCCESS,
        student
    };
}

export function editStudentSuccess(student) {
    return {
        type: types.EDIT_STUDENT_SUCCESS,
        student
    };
}

export function deleteStudentSuccess(studentId) {
    return {
        type: types.DELETE_STUDENT_SUCCESS,
        studentId
    };
}
