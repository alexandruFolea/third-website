import Contact from './Contact';
import { BiDialpad } from 'react-icons/bi';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__center'>
				<div className='footer__center__top'>
					<BiDialpad />
					<h4>Site Navigation</h4>
				</div>
				<ul className='footer__center__list'>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href='/portfolio'>
							<a>Portfolio</a>
						</Link>
					</li>
					<li>
						<Link href='/design-and-development'>
							<a>Design & Dev</a>
						</Link>
					</li>

					<li>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__left'>
				<p>developedAF 2021</p>
				<span>Copyright &copy; 2021 Alex Folea Development</span>
			</div>
		</footer>
	);
};

export default Footer;
