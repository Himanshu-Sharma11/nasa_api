import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import Cors from 'cors';

dotenv.config();
const app = express();

/*using middlewares */
app.use(Cors());
app.use(router);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Connected To Backend on port ${PORT}`);
});
