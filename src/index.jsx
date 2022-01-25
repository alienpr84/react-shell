import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';
import './polyfills';
import App from './App';

ReactDom.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('app-root')
)
