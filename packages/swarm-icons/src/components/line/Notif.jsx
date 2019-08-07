import React from 'react';

const Notif = props => (
	<svg data-swarm-icon height="24" width="24" viewBox="0 0 24 24" {...props}>
		<g fill="none" fillRule="evenodd">
			<path
				stroke="#585858"
				d="M10 4.29V4a2 2 0 114 0v.29c2.891.86 5 3.539 5 6.71v4c0 .667.333 1 1 1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1c.667 0 1-.333 1-1v-4a7.003 7.003 0 015-6.71z"
			/>
			<rect width="6" height="1" x="9" y="20.5" fillRule="nonzero" rx=".5" />
		</g>
	</svg>
);

export default Notif;