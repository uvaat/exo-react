import React from 'react';

class StudentProfil extends React.Component {

	render(){
		return (
			<div className="student-profil">
				<h2 className="Name">
					{this.props.datas.name.first} - {this.props.datas.name.last}
				</h2>
			</div>
		)
	}

}

export default StudentProfil;