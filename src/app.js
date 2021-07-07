const express = require('express');
require('../src/db/conn');
const MensRanking = require('../src/models/mens');

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.post('/mens', async (req, res) => {
	try {
		const addinMensRecords = new MensRanking(req.body);
		console.log(req.body);
		const insertMens = await addinMensRecords.save();
		res.status(201).send(insertMens);
	} catch (e) {
		res.status(400).send(e);
	}
});
app.get('/mens/:id', async (req, res) => {
	try {
		const _id = req.params.id;
		const getMen = await MensRanking.findById(_id);
		res.status(200).send(getMen);
	} catch (e) {
		res.status(400).send(e);
	}
});
app.get('/mens', async (req, res) => {
	try {
		const getMens = await MensRanking.find({});
		res.status(200).send(getMens);
	} catch (e) {
		res.status(400).send(e);
	}
});
app.get('/', async (req, res) => {
	res.send('Hey there');
});

app.listen(port, () => {
	console.log(`your reques is send to the port ${port}`);
});
