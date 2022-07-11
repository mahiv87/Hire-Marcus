import React from 'react';
import './App.css';
import Particles from './components/Particles';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="App">
			<Particles id="tsparticles" />
			<div className="header">
				<NavBar />
			</div>
			{/* <div className="container"></div> */}
		</div>
	);
}

export default App;
