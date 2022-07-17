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
