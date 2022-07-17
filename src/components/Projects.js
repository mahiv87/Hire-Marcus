import React from 'react';

const ProjectsComponent = (props) => {
	return (
		<div className="project-card">
			<img alt="Project mockup" src={props.image}></img>
			<h1 className="py-2 text-2xl">{props.name}</h1>
			<a
				className="project-link"
				href={props.repoLink}
				target="_blank"
				rel="noreferrer noopener"
			>
				/GitHub_Repository
			</a>
			<a
				className="project-link"
				href={props.deployedApp}
				target="_blank"
				rel="noreferrer noopener"
			>
				/Deployed_App
			</a>
		</div>
	);
};

export default ProjectsComponent;

{
	/* <div className="about container mx-auto mb-10 flex justify-evenly items-center">
<div className="project-container md:w-5/6 w-full">

<div className="project-card">
					<img alt="Park Pass" src={ParkPass}></img>
					<h1 className="py-2 text-2xl">Park_Pass</h1>
					<a
						className="project-link"
						href="https://github.com/gokublue007/Park-Pass"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="project-link"
						href="https://gokublue007.github.io/Park-Pass/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="project-card">
					<img alt="CSS Snippet" src={CssSnippet}></img>
					<h1 className="py-2 text-2xl">CSS_Cheatsheet</h1>
					<a
						className="project-link"
						href="https://github.com/mahiv87/CSS-Snippet-Cheatsheet"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="project-link"
						href="https://mahiv87.github.io/CSS-Snippet-Cheatsheet/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="project-card">
					<img alt="Password Generator" src={PasswordGen}></img>
					<h1 className="py-2 text-2xl">Password_Generator</h1>
					<a
						className="project-link"
						href="https://github.com/mahiv87/Super-Awesome-Password-Generator"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="project-link"
						href="https://mahiv87.github.io/Super-Awesome-Password-Generator/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="project-card">
					<img
						alt="Progressiv Text Editor"
						src={ProgressiveWebApp}
					></img>
					<h1 className="py-2 text-2xl">J.A.T.E</h1>
					<a
						className="project-link"
						href="https://github.com/mahiv87/Progressive-Text-Editor"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
					<a
						className="project-link"
						href="https://floating-mesa-79476.herokuapp.com/"
						target="_blank"
						rel="noreferrer noopener"
					>
						/Deployed_App
					</a>
				</div>
				<div className="project-card">
					<img
						alt="Team Profile Generator"
						src={TeamProfileGen}
					></img>
					<h1 className="py-2 text-2xl">Team_Profile_Generator</h1>
					<a
						className="project-link"
						href="https://github.com/mahiv87/Team-Profile-Generator"
						target="_blank"
						rel="noreferrer noopener"
					>
						/GitHub_Repository
					</a>
				</div>
			</div>
		</div> */
}
