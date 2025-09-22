import 'dotenv/config'; // importa il contenuto del file .env
import express from "express";
import cors from 'cors'; //permette di gestire il CORS (chiamate da frontend su indirizzi diversi da quello del backend)
import { connectDB } from './db.js';
import authorsRouter from './routers/authors.js';
import postsRouter from './routers/posts.js';
import errorHandler from './middlewares/errorHandler.js';

const port = process.env.PORT;

const server = express(); //creiamo il server base

server.use(cors()); // accetta richieste da qualsiasi indirizzo
server.use(express.json());
server.use(errorHandler)

server.use('/authors', authorsRouter) //rotte per gli autori
server.use('/posts', postsRouter) //rotte per i post

connectDB();
// mettiamo il server in ascolto di richieste alla porta stabilita
server.listen(port, () => console.log(`Server avviato sulla porta: ${port}`)); 