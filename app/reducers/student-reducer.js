import * as types from '../actions/action-types';

const initialState = {
    student: false,
    confirmation : false,
    students: [],
    studentProfile: {}
};

const userReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.CREATE_STUDENT_SUCCESS:
        return Object.assign({}, state, { student : action.student, confirmation : true});

        case types.GET_STUDENTS_SUCCESS:
        return Object.assign({}, state, {students : action.students, confirmation : false});

        case types.GET_STUDENT_SUCCESS:
        return Object.assign({}, state, {student : action.student, confirmation : false});

        case types.EDIT_STUDENT_SUCCESS:
        return Object.assign({}, state, {student : action.student, confirmation : true});

    }

    return state;

}

export default userReducer;
