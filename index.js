const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3300;

// const uri = "mongodb+srv://akmmiya:R2ynGvudUjymrqNV@cluster0.bqxtqvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

   
app.use(cors())
app.use(express.json())

// yasinmunn
// cPLYROecljPgdh2T


//MongoDB 
const uri ="mongodb+srv://akmmiya:R2ynGvudUjymrqNV@cluster0.bqxtqvh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    app.post('/users', (req, res) =>{
        const user = req.body;
        console.log(user, 'new user');

    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//MongoDB End



app.get('/', (req, res)=> {
    res.send('Simple Crud Is Running')
})

app.listen(port, () => {
    console.log(`Simple curd is running ${port}`)
})
