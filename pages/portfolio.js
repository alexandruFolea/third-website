import Image from 'next/image';
import Head from 'next/head';
import Button from '../components/Button';
import { projects } from '../info/data';

const portfolio = () => {
	return (
		<div className='portfolio'>
			<Head>
				<title>Alex Folea - Portfolio Page</title>
				<meta name='description' content='Alex Folea portfolio projects page' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
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

				<div className='portfolio__container'>
					{projects.map(({ id, title, url, img, desc, stacks }) => (
						<div className='container__item' key={id}>
							<div className='container__item__left'>
								<div className='item__title'>
									<h3>{title}</h3>
								</div>
								<div className='item__desc'>
									<p>{desc}</p>
								</div>
								<ul className='item__stacks'>
									<span>built with:</span>
									{stacks.map((stack, index) => (
										<li key={index}>{stack}</li>
									))}
								</ul>
								{/* <div className='item__url btn-7'>
									<span>
										<a href={url} target='_blank' rel='noreferrer'>
											visit site
										</a>
									</span>
								</div> */}
								<Button src={url} />
							</div>
							<div className='container__item__right'>
								<Image
									width='400'
									height='355'
									// src='/desktop.svg'
									src={img}
									alt='Alex Folea Coding'
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default portfolio;
