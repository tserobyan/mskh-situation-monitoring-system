const express = require('express')
const request = require('request')
const { MongoClient } = require('mongodb')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/check-status', (req, res) => {
  request.get({
    url: 'https://mskh.am/',
    time: true
  }, function (err, response) {
    if (!err) {
      res.send(`${response.elapsedTime}`)
    } else {
      res.send(err.code)
    }
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

async function main() {
  const uri = "mongodb://localhost:27017/";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}