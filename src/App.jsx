import React from 'react';
import './App.css';
import { GrettingOne } from './Components/GrettingOne';
import { GrettingTwo } from './Components/GrettingTwo';

function App() {
	return (
		<div className='container'>
			<div className='react-shell'>
				<div className='pulse'>
					<div className='rotate'></div>
				</div>
				<h1>Reactjs Shell</h1>
				<h2>A reactjs toolchain with minimal dependencies</h2>
				<GrettingOne />
				<GrettingTwo />
			</div>
		</div>
	);
}

export default App;
