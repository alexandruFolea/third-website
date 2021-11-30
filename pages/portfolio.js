import Image from 'next/image';
const portfolio = () => {
	return (
		<div className='portfolio'>
			<div className='portfolio__wrapper'>
				<div className='portfolio__banner'>
					<div className='banner__info'>
						<h1>Portfolio</h1>
						<Image
							width='350'
							height='350'
							// src='/desktop.svg'
							src='/v-control.svg'
							alt='Alex Folea Coding'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default portfolio;
