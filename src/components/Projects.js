import React from 'react';

const ProjectsComponent = (props) => {
	return (
		<div className="project-card">
			<img alt="Project mockup" src={props.image}></img>
			<h1 className="py-2 text-2xl">{props.name}</h1>
			<p className="my-2">
				<span className="px-3 text-sm uppercase font-bold">/Description</span>{' '}
				<p className="pl-8">{props.description}</p>
			</p>
			<a
				className="project-link"
				href={props.repoLink}
				target="_blank"
				rel="noreferrer noopener"
			>
				/GitHub_Repository
			</a>
			{props.deployedApp ? (
				<a
					className="project-link"
					href={props.deployedApp}
					target="_blank"
					rel="noreferrer noopener"
				>
					/Deployed_App
				</a>
			) : (
				''
			)}
		</div>
	);
};

export default ProjectsComponent;
