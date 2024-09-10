const express = require('express');
const bodyParser = require('body-parser');
const cassandraClient = 
require('./cassandra-config');

const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota GET para obter todas as divas
app.get('/womans', async (req, res) => {
  try {
    const result = await cassandraClient.
    execute('SELECT * FROM womans');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Rota POST para adicionar uma nova diva
app.post('/womans', async (req, res) => {
  const { name, birth, country, area, contribuition } = req.body;

  if (!name || !birth || !country || !area || !contribuition) {
    return res.status(400).send('Name, birth, country, area and contribuition are required');
  }

  const id = uuidv4();
  
  try {
    await cassandraClient.execute(
      'INSERT INTO professionals_woman (id, name, birth, country, area, contribuition) VALUES (?, ?, ?, ?, ?, ?)',
      [id, name, birth, country, area, contribuition],
      { prepare: true }
    );
    res.status(201).send(`Diva ${name} 
    added with ID ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on 
  http://localhost:${port}`);
});