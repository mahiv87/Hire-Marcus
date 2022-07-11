import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesComponent = (props) => {
	const options = useMemo(() => {
		return {
			fullScreen: {
				enable: true,
				zIndex: -1
			},
			particles: {
				links: {
					enable: true,
					distance: 150
				},
				move: {
					enable: true
				},
				// collisions: {
				// 	enable: true,
				// 	mode: 'absorb'
				// },
				number: {
					density: {
						enable: true,
						area: 1000
					},
					max: 500
				},
				opacity: {
					animation: {
						enable: true
					},
					value: { min: 0.3, max: 1 },
					speed: { min: 0.1, max: 1 }
				},
				size: {
					value: { min: 0.2, max: 5 }
				}
			}
		};
	}, []);

	const particlesInit = useCallback((engine) => {
		loadSlim(engine);
	}, []);

	return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
