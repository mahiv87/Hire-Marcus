import ProjectsComponent from './Projects';
import CssSnippet from '../images/CSS_992.png';
import ParkPass from '../images/parkpass.png';
import ProgressiveWebApp from '../images/PWA.png';
import PasswordGen from '../images/Super-Awesome-Password-Generator.png';
import TeamProfileGen from '../images/Team-Profile.png';
import TechBlog from '../images/Tech-Blog-dt.png';

const Portfolio = () => {
	const projects = [
		{
			name: 'Tech_Blog',
			image: { TechBlog },
			repoLink: 'https://github.com/mahiv87/Tech-Blog',
			deployedApp: 'https://calm-gorge-51353.herokuapp.com/'
		},
		{
			name: 'Park_Pass',
			image: { ParkPass },
			repoLink: 'https://github.com/gokublue007/Park-Pass',
			deployedApp: 'https://gokublue007.github.io/Park-Pass/'
		},
		{
			name: 'CSS_Cheatsheet',
			image: { CssSnippet },
			repoLink: 'https://github.com/mahiv87/CSS-Snippet-Cheatsheet',
			deployedApp: 'https://mahiv87.github.io/CSS-Snippet-Cheatsheet/'
		},
		{
			name: 'Password_Generator',
			image: { PasswordGen },
			repoLink:
				'https://github.com/mahiv87/Super-Awesome-Password-Generator',
			deployedApp:
				'https://mahiv87.github.io/Super-Awesome-Password-Generator/'
		},
		{
			name: 'J.A.T.E',
			image: { ProgressiveWebApp },
			repoLink: 'https://github.com/mahiv87/Progressive-Text-Editor',
			deployedApp: 'https://floating-mesa-79476.herokuapp.com/'
		},
		{
			name: 'Team_Profile_Generator',
			image: { TeamProfileGen },
			repoLink: 'https://github.com/mahiv87/Team-Profile-Generator',
			deployedApp: ''
		}
	];

	return (
		<div className="about container mx-auto mb-10 flex justify-evenly items-center">
			<div className="project-container md:w-5/6 w-full">
				{projects &&
					projects.map((project) => (
						<ProjectsComponent
							name={project.name}
							image={project.image}
							repoLink={project.repoLink}
							deployedApp={project.deployedApp}
						/>
					))}
			</div>
		</div>
	);
};

export default Portfolio;
