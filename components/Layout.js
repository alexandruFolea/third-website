import Particles from 'react-tsparticles';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
	const particlesInit = (main) => {
		console.log(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<div className='layout'>
			<Navigation />
			<main>
				<Particles
					className='tsparticles'
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						background: {
							color: {
								value: '',
							},
						},
						fpsLimit: 60,
						interactivity: {
							events: {
								onClick: {
									enable: false,
									mode: 'push',
								},
								onHover: {
									enable: true,
									mode: 'repulse',
								},
								resize: true,
							},
							modes: {
								bubble: {
									distance: 400,
									duration: 2,
									opacity: 0.8,
									size: 40,
								},
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 100,
									duration: 1,
								},
							},
						},
						particles: {
							color: {
								value: '#61f7ff',
							},
							links: {
								color: '#6d767e',
								distance: 120,
								enable: true,
								opacity: 0.99,
								width: 1,
							},
							collisions: {
								enable: false,
							},
							move: {
								direction: 'none',
								enable: true,
								outMode: 'bounce',
								random: false,
								speed: 0.4,
								straight: true,
							},
							number: {
								density: {
									enable: true,
									value_area: 1000,
								},
								value: 150,
							},
							opacity: {
								value: 0.96,
							},
							shape: {
								type: 'circle',
							},
							size: {
								random: true,
								value: 4,
							},
						},
						detectRetina: true,
					}}
				/>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
