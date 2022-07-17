import React, { useState } from 'react';
import './App.css';
import Particles from './components/Particles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
	const [currentPage, setCurrentPage] = useState('About');

	const renderPage = () => {
		if (currentPage === 'About') {
			return <About />;
		}
		if (currentPage === 'Portfolio') {
			return <Portfolio />;
		}
		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div className="App">
			<Particles id="tsparticles" />
			<div className="header">
				<NavBar
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
			</div>
			{renderPage()}
			<Footer />
		</div>
	);
}

export default App;
