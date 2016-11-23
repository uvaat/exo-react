import React from 'react';
import Sidebar from '../views/sidebar';

// Using "Stateless Functional Components"
export default function(props) {
	return (
		<div>
			<Sidebar/>
			<main id="main">
				{props.children}
			</main>
		</div>
	);
}
