import React from 'react';
import ReactShellLogo from '../public/assets/images/logo.jpg';
import './App.css';

function App() {
	return (
		<div className='container'>
			<figure>
				<div className='pulse'>
					<img className='rotate' src={ReactShellLogo} alt='react shell logo' />
				</div>
				<figcaption>React Shell</figcaption>
			</figure>
		</div>
	);
}

export default App;
