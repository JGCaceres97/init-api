import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.routes';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`API at port ${app.get('port')}`);
});

app.use(authRoutes);

export default app;
