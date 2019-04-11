import Hapi from 'hapi';
import Path from 'path';
import inert from 'inert';

import ReactDOMServer from 'react-dom/server';

export const init = async ({ port }) => {
	const server = Hapi.server({
		port,
	});

	await server.register(inert);

	// serving static files
	server.route({
		method: 'GET',
		path: '/static/{param*}',
		handler: {
			directory: {
				path: Path.join(__dirname, '../../swarm-styles/dist'),
			},
		},
	});

	await server.start();
	console.log('Server running on %s', server.info.uri);

	return server;
};

export const createRoute = (slug, element) => {
	return {
		method: 'GET',
		path: `/${slug}`,
		handler: () => `<html>
							<head>
								<link
									rel="stylesheet"
									type="text/css"
									href="/static/global.css"
								/>
								<link
									rel="stylesheet"
									type="text/css"
									href="/static/main.css"
								/>
							</head>
							<body style="padding: 1em">
							${ReactDOMServer.renderToStaticMarkup(element)}
							</body>
						</html>`,
	};
};
