import Link from 'next/link';

const NavButton = ({ href, name }) => {
	return (
		<div className='cta'>
			<span>
				<Link href={href}>
					<a>{name}</a>
				</Link>
			</span>
		</div>
	);
};

export default NavButton;
