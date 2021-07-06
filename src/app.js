const express = require('express');
require('../src/db/conn');
const MensRanking = require('../src/models/mens');

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json())

app.post('/mens', async (req, res) => {
	try {
		const addinMensRecords = new MensRanking(req.body);
        console.log(req.body)
	    const insertMens =	await addinMensRecords.save();
        res.send(insertMens)
	} catch (e) {
		res.send(e);
	}
});
app.get('/', async (req, res) => {
	res.send('Hey there');
});

app.listen(port, () => {
	console.log(`your reques is send to the port ${port}`);
});
