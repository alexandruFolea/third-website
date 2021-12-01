import React from 'react';
import Contact from '../components/Contact';
import Image from 'next/image';

const contact = () => {
	return (
		<div className='contact'>
			<div className='contact__wrapper'>
				<Contact />
				<div className='contact__image'>
					<Image
						width='500'
						height='500'
						src='/contact.svg'
						alt='Alex Folea Coding'
					/>
				</div>
			</div>
		</div>
	);
};

export default contact;
