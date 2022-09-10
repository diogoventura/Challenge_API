const app = require('./app');
const db = require('./db');

(async () => {
	try {
		console.clear();
		const port = parseInt(`${process.env.APP_PORT}`);

		await app.listen(port);
		console.log(`Servidor rodando na porta ${port}`);
	}
	catch (error) {
		console.log(`${error}`);
	}
})();

