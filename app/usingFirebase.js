const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

const serviceAccount = require('--useYourServiceAccount');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: '--useYourServiceAccountLink',
});

app.use(bodyParser.json());

app.get('/api/getUsuarios', async (req, res) => {
	try {
		const collectionRef = getCollectionRef('usuarios');

		const snapshot = await collectionRef.get();

		const data = [];

		snapshot.forEach((doc) => {
			data.push(doc.data());
		});

		res.json(data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Tratamento de erro' });
	}
});

function getCollectionRef(collectionName) {
	const db = admin.firestore();

	const collectionRef = db.collection(collectionName);

	return collectionRef;
}

app.post('/api/newUser', async (req, res) => {
	try {
		const userData = req.body;

		const collectionRef = getCollectionRef('usuarios');

		const newUserRef = await collectionRef.add(userData);

		res
			.status(201)
			.json({ message: 'Usuário adicionado com sucesso!', id: newUserRef.id });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Não foi possível criar o usuário.' });
	}
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}.`);
});
