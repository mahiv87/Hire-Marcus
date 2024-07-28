import ProjectsComponent from './Projects';
import ParkPass from '../images/parkpass.png';
import MortgageApp from '../images/mortgage-calculator.png';
import TechBlog from '../images/Tech-Blog-dt.png';
import ProjectTracker from '../images/ptss3.png';
import MoovySpace from '../images/MoovySpace.png';
import ReactSpringLibrary from '../images/rsl-d.png';

const Portfolio = () => {
	const projects = [
		{
			name: 'Project_Tracker',
			image: ProjectTracker,
			repoLink: 'https://github.com/mahiv87/Project-Tracker',
			deployedApp: 'https://project-tracker-303.herokuapp.com/',
			description: 'React PWA to keep track of your projects'
		},
		{
			name: 'React_Spring_Library',
			image: ReactSpringLibrary,
			repoLink: 'https://github.com/mahiv87/react-spring-books',
			deployedApp: 'https://reactspringlibrary.netlify.app/',
			description:
				'Online Library app built with React front end and Spring Boot back end'
		},
		{
			name: 'Park_Pass',
			image: ParkPass,
			repoLink: 'https://github.com/gokublue007/Park-Pass',
			deployedApp: 'https://gokublue007.github.io/Park-Pass/',
			description: 'Search for your favorite National Parks'
		},
		{
			name: 'MoovySpace',
			image: MoovySpace,
			repoLink: 'https://github.com/mahiv87/MoovySpace2.0',
			deployedApp: 'https://moovyspace2.herokuapp.com/',
			description:
				"MoovySpace is a platform for cinephiles to log movies they've watched, star movies that they particularly liked, and see what movies other users have liked in a live feed"
		},
		{
			name: 'Tech_Blog',
			image: TechBlog,
			repoLink: 'https://github.com/mahiv87/Tech-Blog',
			deployedApp: 'https://calm-gorge-51353.herokuapp.com/',
			description: 'Full stack CMS blog site'
		},
		{
			name: 'Mortgage_Calculator',
			image: MortgageApp,
			repoLink: 'https://github.com/mahiv87/mortgage-calculator',
			deployedApp: false,
			description:
				'Command line interface app to calculate mortgage and display the payment schedule built with TypeScript'
		}
	];

	return (
		<div className="about container mx-auto mb-10 flex justify-evenly items-center animate-fadeIn">
			<div className="project-container md:w-5/6 w-full">
				{projects &&
					projects.map((project) => (
						<ProjectsComponent
							name={project.name}
							image={project.image}
							repoLink={project.repoLink}
							deployedApp={project.deployedApp}
							description={project.description}
						/>
					))}
			</div>
		</div>
	);
};

export default Portfolio;
