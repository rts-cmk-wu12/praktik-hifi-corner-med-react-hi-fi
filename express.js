import express from 'express';
import { MongoClient } from 'mongodb';
import ViteExpress from 'vite-express' ;

const CONNECTION_STRING = 'mongodb+srv://emma489:zZHJNzo89KrDL3y9@hificluster0.nsw2s.mongodb.net/?retryWrites=true&w=majority&appName=HiFiCluster0';
const client = new MongoClient(CONNECTION_STRING);
const database = client.db('HiFiCorner');
const products = database.collection('HiFiCornerProducts');

const server = express();

server.get('/message', (_, res) => res.send('Hello from express!'));

ViteExpress.listen(server, 3000, () => console.log('Server is listening...'));