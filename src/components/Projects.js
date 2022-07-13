import React from 'react';
import CssSnippet from '../images/CSS_992.png';
import ParkPass from '../images/parkpass.png';
import ProgressiveWebApp from '../images/PWA.png';
import PasswordGen from '../images/Super-Awesome-Password-Generator.png';
import TeamProfileGen from '../images/Team-Profile.png';
import TechBlog from '../images/Tech-Blog-dt.png';

const ProjectsComponent = () => {
	return (
		<div className="about container mx-auto mb-10 flex justify-evenly items-center">
			<div className="project-container md:w-5/6 w-full">
				<div className="glass-container mx-auto md:grayscale hover:grayscale-0">
					<img alt="Tech Blog" src={TechBlog}></img>
					<h1 className="py-2 text-2xl">Tech_Blog</h1>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://github.com/mahiv87/Tech-Blog"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://calm-gorge-51353.herokuapp.com/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="glass-container mx-auto md:grayscale hover:grayscale-0">
					<img alt="Park Pass" src={ParkPass}></img>
					<h1 className="py-2 text-2xl">Park_Pass</h1>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://github.com/gokublue007/Park-Pass"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://gokublue007.github.io/Park-Pass/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="glass-container mx-auto md:grayscale hover:grayscale-0">
					<img alt="CSS Snippet" src={CssSnippet}></img>
					<h1 className="py-2 text-2xl">CSS_Cheatsheet</h1>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://github.com/mahiv87/CSS-Snippet-Cheatsheet"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://mahiv87.github.io/CSS-Snippet-Cheatsheet/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="glass-container mx-auto md:grayscale hover:grayscale-0">
					<img alt="Password Generator" src={PasswordGen}></img>
					<h1 className="py-2 text-2xl">Password_Generator</h1>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://github.com/mahiv87/Super-Awesome-Password-Generator"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://mahiv87.github.io/Super-Awesome-Password-Generator/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="glass-container mx-auto md:grayscale hover:grayscale-0">
					<img
						alt="Progressiv Text Editor"
						src={ProgressiveWebApp}
					></img>
					<h1 className="py-2 text-2xl">J.A.T.E</h1>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://github.com/mahiv87/Progressive-Text-Editor"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://floating-mesa-79476.herokuapp.com/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="glass-container mx-auto md:grayscale hover:grayscale-0">
					<img
						alt="Team Profile Generator"
						src={TeamProfileGen}
					></img>
					<h1 className="py-2 text-2xl">Team_Profile_Generator</h1>
					<a
						className="px-3 py-1 flex items-center text-sm uppercase leading-snug text-white hover:opacity-75 underline-animation"
						href="https://github.com/mahiv87/Team-Profile-Generator"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectsComponent;
