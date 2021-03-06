import Head from 'next/head';
import Intro from '../components/Intro';

export default function Home() {
	return (
		<div className='homepage'>
			<Head>
				<title>Alex Folea - Portfolio Website</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Intro />
		</div>
	);
}
