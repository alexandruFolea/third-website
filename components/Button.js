import Link from 'next/link';
import React from 'react';

const Button = ({ src }) => {
	return (
		<div className='cta'>
			<span>
				<a href={src} target='_blank' rel='noreferrer'>
					visit site
				</a>
			</span>
		</div>
	);
};

export default Button;
