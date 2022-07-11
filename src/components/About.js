import React from 'react';
import myPhoto from '../images/me.png';

const About = () => {
	return (
		<div className="about flex justify-center items-center">
			<div
				className="glass-container flex flex-wrap justify-center items-center"
				id="glass"
			>
				<figure className="glass-container-profile " id="profile">
					<img alt="Marcus" src={myPhoto} />
				</figure>
				<div className="glass-container-text w-2/3" id="text">
					<h2
						id="glass_title"
						className="font-bold text-2xl pb-2 uppercase"
					>
						About Me
					</h2>
					<p id="lorem_text" className="">
						Hello! I'm a Full Stack Developer based in Denver, CO.
						My developer journey began in February of 2022, after 12
						years in the machining industry.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
