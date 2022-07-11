import GitHub from '../github.png';
import Twitter from '../twitter.png';
import LinkedIn from '../linkedin.png';

const FooterComponent = () => {
	return (
		<div className="relative">
			<footer className="fixed bottom-0 left-0 right-0 flex flex-wrap items-center justify-center px-2 py-3 bg-neutral-800 opacity-90">
				<img className="h-10 px-2" alt="GitHub logo" src={GitHub} />
				<img className="h-10 px-2" alt="Twitter logo" src={Twitter} />
				<img className="h-10 px-2" alt="LinkedIn logo" src={LinkedIn} />
			</footer>
		</div>
	);
};

export default FooterComponent;
