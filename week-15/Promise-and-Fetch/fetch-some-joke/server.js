const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => { console.log(`Connection established: ${PORT}`) });

app.use(express.static('static'));