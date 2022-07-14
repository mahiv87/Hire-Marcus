import React from 'react';
import GitHub from '../images/github.png';
import Twitter from '../images/twitter.png';
import LinkedIn from '../images/linkedin.png';

const FooterComponent = () => {
	return (
		<div className="relative">
			<footer className="md:fixed md:bottom-0 md:left-0 md:right-0 flex flex-wrap items-center justify-center px-2 py-3 bg-neutral-800">
				<a
					href="https://github.com/mahiv87"
					target="_blank"
					rel="noreferrer noopener"
					className="hover:opacity-75"
				>
					<img className="h-10 px-2" alt="GitHub logo" src={GitHub} />
				</a>
				<a
					href="https://twitter.com/mahiv87"
					target="_blank"
					rel="noreferrer noopener"
					className="hover:opacity-75"
				>
					<img
						className="h-10 px-2"
						alt="Twitter logo"
						src={Twitter}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/marcus-herrera-74453b227/"
					target="_blank"
					rel="noreferrer noopener"
					className="hover:opacity-75"
				>
					<img
						className="h-10 px-2"
						alt="LinkedIn logo"
						src={LinkedIn}
					/>
				</a>
			</footer>
		</div>
	);
};

export default FooterComponent;
