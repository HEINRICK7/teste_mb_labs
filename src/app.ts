import * as express from 'express';

import * as cors from 'cors';

import * as morgan from 'morgan';

import { connectSeverDB } from './config/db';


export const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

connectSeverDB();