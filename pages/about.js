import React from 'react';
import Image from 'next/image';

const about = () => {
	return (
		<div className='about'>
			<div className='about__wrapper'>
				<div className='grid__container'>
					<div className='grid__left'>
						<h2>My full name is Alexandru Folea</h2>
						<p>I am a front-end web developer located in Stamford, CT.</p>
						<p>
							I’ve been developing websites for the past 4 years with a focus on
							user experience. I am also developing skills in graphic design;
							and photo retouching / manipulation.
						</p>
						<p>
							I come from a customer relations background and work to combine
							those communication skills with technical knowledge to elevate the
							Web Development industry.
						</p>
						<p>
							I aspire to be a trusted team member that my colleagues enjoy
							working with and who produces functional, bug free code that meets
							or exceeds the expectations.
						</p>
						<p>
							You can get in touch by leaving a message{' '}
							<a href='/contact'>here</a>.
						</p>
						<p>
							Bellow you&apos;ll find some links to my limited social media
							options.
						</p>
					</div>
					<div className='grid__right'>
						<Image
							width='500'
							height='620'
							src='/Alex3.png'
							alt='Alex Folea Coding'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;