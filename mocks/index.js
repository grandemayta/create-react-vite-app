import express from 'express';
import cors from 'cors';

import user from './data/user.json';

const app = express();
const router = express.Router();
const port = 3002;

app.use(cors({ credentials: true, origin: true }));

router
  .use((req, res, next) => {
    setTimeout(next, 2000);
  })
  .get('/user/:id', (req, res) => res.json(user));

app.use('/v1/', router);

app.listen(port, () => console.log(`Server available on Port ${port}`));
