import express from 'express';
import { infectados2m } from './controllers/infectados2m.js';

const app = express();

app.get('/api/infectados2m', infectados2m);

export default app; 