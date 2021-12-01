import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavButton from './NavButton';

const Intro = () => {
	return (
		<div className='intro'>
			<div className='intro__wrapper'>
				<div className='grid__container'>
					<div className='grid__left'>
						<h1>Hi, I&apos;m Alex</h1>
						<p>a web developer with affinity to front-end</p>
						<NavButton href='/portfolio' name='portfolio' />
					</div>
					<div className='grid__right'>
						<Image
							width='600'
							height='600'
							src='/intro.svg'
							alt='Alex Folea Coding'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
