import { useContext } from 'react';
import { OurContext } from './OurContext';

function Footer () {
	const context = useContext(OurContext)
	return (
		<footer>
			<small>This is the footer {context.title}</small>
		</footer>
	);
}

export default Footer;