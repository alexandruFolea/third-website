import Head from 'next/head';
import Contact from '../components/Contact';
import Image from 'next/image';

const contact = () => {
	return (
		<div className='contact'>
			<Head>
				<title>Alex Folea - Contact Page</title>
				<meta name='description' content='Alex Folea Contact Page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
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
