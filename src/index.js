import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import fetch from 'node-fetch';
//config env
dotenv.config();

//views
import routeIndex from './routes/index.js';
import routeFind from './routes/find.js';
import routeAbout from './routes/about.js';

const app = express();
const port = process.env.PORT;

//views
app.set('views',path.resolve('src','views'));
app.set('view engine','ejs');

app.engine('ejs',ejs.renderFile);

//midlewares
app.use(express.text());
app.use(express.json());

//routes
app.use(express.static(path.resolve('src','public')));
app.use(routeIndex);
app.use(routeFind);
app.use(routeAbout);

app.listen(port,()=>
{
    console.log('puerto',port,'abierto');
})