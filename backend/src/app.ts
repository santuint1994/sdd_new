import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import healthRouter from './modules/health/health.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/health', healthRouter);

export default app;
