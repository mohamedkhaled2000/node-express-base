import express, { Application } from 'express';
// import cors from 'cors';
// import morgan from 'morgan';
import routes from './routes/index';

const app: Application = express();

// Middleware
// app.use(cors());
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

export default app;
