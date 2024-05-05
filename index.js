const MongoClient = require('mongodb').MongoClient;

// This line imports the MongoClient object from the mongodb package
const MongoClient = require('mongodb').MongoClient;

// This line creates a new MongoClient object, using the connection URI as an argument.
const uri = "mongodb+srv://davidM:CMmsZm0EK5odsOzb@Locker.mongodb.net/test?retryWrites=true&w=majority";

// This line creates a new MongoClient object with the specified options
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// This line attempts to connect to the MongoDB server using the specified MongoClient object.
client.connect(err => {
  // This line checks for an error during the connection attempt.
  if (err) {
    // If there is an error, this line logs the error message to the console.
    console.error(err);
    // This line exits the program with an exit code of 1, indicating an error.
    return;
  }

  // This line gets a reference to the "test" database in the connected MongoDB server.
  const collection = client.db("test").collection("devices");

  // This line performs actions on the collection object, such as inserting, updating, or querying documents.
  // You would replace this comment with your specific database operations.

  // This line closes the connection to the MongoDB server.
  client.close();
});

const uri = "mongodb+srv://yourusername:yourpassword@yourcluster.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
