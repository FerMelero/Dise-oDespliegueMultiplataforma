import { useContext } from 'react';
import { OurContext } from './OurContext';

function Header () {
	const context = useContext(OurContext)
	return (
		<header style={{color: context.color}}>
			<h1>This is header</h1>
			<h2>{context.title}</h2>
		</header>
	)
}

export default Header;