import ProjectsComponent from './Projects';
import CssSnippet from '../images/CSS_992.png';
import ParkPass from '../images/parkpass.png';
import ProgressiveWebApp from '../images/PWA.png';
import MortgageApp from '../images/mortgage-calculator.png';
import TechBlog from '../images/Tech-Blog-dt.png';
import ProjectTracker from '../images/ptss3.png';
import FindABook from '../images/find-a-book.png';
import MoovySpace from '../images/MoovySpace.png';

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
			name: 'CSS_Cheatsheet',
			image: CssSnippet,
			repoLink: 'https://github.com/mahiv87/CSS-Snippet-Cheatsheet',
			deployedApp: 'https://mahiv87.github.io/CSS-Snippet-Cheatsheet/',
			description: 'CSS snippets displayed as cards using grid'
		},
		{
			name: 'Mortgage_Calculator',
			image: MortgageApp,
			repoLink: 'https://github.com/mahiv87/mortgage-calculator',
			deployedApp: false,
			description:
				'Command line interface app to calculate mortgage and display the payment schedule built with TypeScript'
		},
		{
			name: 'J.A.T.E',
			image: ProgressiveWebApp,
			repoLink: 'https://github.com/mahiv87/Progressive-Text-Editor',
			deployedApp: 'https://floating-mesa-79476.herokuapp.com/',
			description: 'PWA text editor'
		},
		{
			name: 'Find_A_Book',
			image: FindABook,
			repoLink: 'https://github.com/mahiv87/find-a-book',
			deployedApp: 'https://evening-temple-29103.herokuapp.com/',
			description: 'Book search engine refactored from RESTful API to GraphQl'
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
