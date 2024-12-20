```javascript
const MongoClient = require('mongodb').MongoClient;

async function run() {
  try {
    const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Insert a document with a nested array containing an object with a property that has a dot in its name
    const doc = { a: [{ 'nested.property': 1 }] };
    await collection.insertOne(doc);

    // Query for the document using the $elemMatch operator to correctly access the nested property
    const foundDoc = await collection.findOne({ a: { $elemMatch: { 'nested.property': 1 } } });
    console.log(foundDoc);

  } finally {
    // Ensures that the client will close when you finish/
    // with it
    await client.close();
  }
}
run().catch(console.dir);
```