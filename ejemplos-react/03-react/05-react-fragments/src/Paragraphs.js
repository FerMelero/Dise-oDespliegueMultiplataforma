import React from 'react';

function Paragraphs (props) {
	return (
		<React.Fragment>
			{props.phrases.map (phrase =>
				<p>{phrase}</p>
			)}
		</React.Fragment>
	)
}

export default Paragraphs;