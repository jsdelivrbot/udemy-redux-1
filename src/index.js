import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBZmfc1n_ygm1miyDAoYErriAV4Z_TLCec';

// Create new component. Produce html.
const App = () 	=>{
	return (
		<div>
			<SearchBar />
		</div>
	);
	
} 
// Add JSX to DOM.
ReactDOM.render(
	<App />,
	document.querySelector('.container')
);

