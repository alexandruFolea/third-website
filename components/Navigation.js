import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	const closeMobileMenu = () => setOpen(false);

	return (
		<nav className='navbar'>
			<div
				className={open ? 'navbar__logo active' : 'navbar__logo'}
				onClick={closeMobileMenu}
			>
				<Link href='/'>
					<a>Logo</a>
				</Link>
				{/* <h1>Logo</h1> */}
			</div>

			<ul className={open ? 'navbar__list active' : 'navbar__list'}>
				<li onClick={closeMobileMenu}>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					<Link href='/'>
						<a>Brand</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					<Link href='/'>
						<a>Design</a>
					</Link>
				</li>
				<li onClick={closeMobileMenu}>
					<Link href='/'>
						<a>Development</a>
					</Link>
				</li>
			</ul>

			<div
				className={open ? 'navbar__burger active' : 'navbar__burger'}
				onClick={handleClick}
			>
				<FaBars />
			</div>
		</nav>
	);
};

export default Navigation;
