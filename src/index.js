import React from 'react';
import ReactDOM from 'react-dom';
// Create new component. Produce html.
const App = () 	=>{
	return <div>Sanity Check</div>;
} 
// Add JSX to DOM.
ReactDOM.render(
	<App />,
	document.querySelector('.container')
)