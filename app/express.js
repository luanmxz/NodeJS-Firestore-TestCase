const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

app.use(bodyParser.json());

const fakeDatabase = [
	{ id: 1, name: 'Camisa roxa' },
	{ id: 2, name: 'Item 2' },
	{ id: 3, name: 'Item 3' },
];

app.get('/api/items/:id', (req, res) => {
	const itemId = parseInt(req.params.id, 10);
	const item = fakeDatabase.find((item) => item.id === itemId);

	if (!item) {
		res.status(404).json({ error: 'Item não encontrado com este ID.' });
	} else {
		res.json(`O ID é ${item.id} e seu nome é ${item.name}.`);
	}
});

app.post('/api/items', (req, res) => {
	const newItemName = req.body.name;
	console.log(req.body);

	const newItemId = Math.max(...fakeDatabase.map((item) => item.id)) + 1;

	const newItem = { id: newItemId, name: newItemName };

	fakeDatabase.push({ newItemId, newItemName });

	res.status(201).json(newItem);
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}.`);
});
