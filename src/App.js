import React from 'react';
import './App.css';
import Particles from './components/Particles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';

function App() {
	return (
		<div className="App">
			<Particles id="tsparticles" />
			<div className="header">
				<NavBar />
			</div>
			<About />
			{/* <div className="h-100"></div> */}
			<Footer />
		</div>
	);
}

export default App;
