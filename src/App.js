import React from 'react';
import './App.css';
import Particles from './components/Particles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Projects';

function App() {
	return (
		<div className="App">
			<Particles id="tsparticles" />
			<div className="header">
				<NavBar />
			</div>
			{/* <About /> */}
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
