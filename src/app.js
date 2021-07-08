const express = require('express');
require('../src/db/conn');

const router = require('../src/routers/men')

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());


app.use(router)

app.listen(port, () => {
	console.log(`your reques is send to the port ${port}`);
});
