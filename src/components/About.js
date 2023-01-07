import React from 'react';
import MyPhoto from '../images/me.png';

const About = () => {
	return (
		<div className="about flex justify-center items-center animate-fadeIn">
			<div
				className="glass-container flex flex-wrap justify-center items-center"
				id="glass"
			>
				<figure className="glass-container-profile " id="profile">
					<img alt="Marcus" src={MyPhoto} />
				</figure>
				<div className="glass-container-text w-2/3" id="text">
					<h2 id="glass_title" className="text-2xl pb-2 uppercase">
						About_Me
					</h2>
					<p id="lorem_text" className=" indent-8">
						Hello! As a full stack developer, I am a highly motivated and
						adaptable problem-solver with a passion for creating intuitive,
						functional websites and applications. I am skilled in both front-end
						and back-end development, with a strong foundation in languages such
						as HTML, CSS, and JavaScript/TypeScript. I am always eager to learn
						and stay up-to-date with the latest technologies and best practices
						in the field. I pride myself on my ability to work collaboratively
						in a team environment and take pride in delivering high-quality code
						that meets the needs of users.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
