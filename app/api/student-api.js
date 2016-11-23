import axios from 'axios';
import store from '../store';
import {
	editStudentSuccess,
	getStudentSuccess,
	getStudentsSuccess,
	createStudentSuccess} from '../actions/student-actions';


export function createStudent(student){

	function guid() {

		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
		}

		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
			s4() + '-' + s4() + s4() + s4();

	}

	student.id = guid();

	return axios.post('http://localhost:3001/students', student)
		.then(response => {
			store.dispatch(createStudentSuccess(student));
			return response;
		}, error => {});

}

export function getStudents() {

	return axios.get('http://localhost:3001/students')
		.then(response => {
			store.dispatch(getStudentsSuccess(response.data));
			return response;
		}, error => {
			console.log(error);
		});

}

export function getStudent(studentId) {

	return axios.get('http://localhost:3001/students?id=' + studentId)
		.then(response => {
			store.dispatch(getStudentSuccess(response.data[0]));
			return response;
		}, error => {
			console.log(error);
		});

}

export function editStudent(studentId, student){

	return axios.put('http://localhost:3001/students/' + studentId, student)
		.then(response => {
			store.dispatch(editStudentSuccess(student));
			return response;
		}, error => {
			console.log(error);
		});

}

export function deleteStudent(studentId){
	return axios.delete('http://localhost:3001/students/' + studentId);
}




