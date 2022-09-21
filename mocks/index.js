import express from 'express';
import cors from 'cors';

import user from './data/user.json';
import followers from './data/followers.json';
import following from './data/following.json';
import repos from './data/repositories.json';

const app = express();
const router = express.Router();
const port = 3002;

app.use(cors({ credentials: true, origin: true }));

router
  .use((req, res, next) => {
    setTimeout(next, 2000);
  })
  .get('/user/:id', (req, res) => res.json(user))
  .get('/user/:id/followers', (req, res) => res.json(followers))
  .get('/user/:id/following', (req, res) => res.json(following))
  .get('/user/:id/repos', (req, res) => res.json(repos));

app.use('/v1/', router);

app.listen(port, () => console.log(`Server available on Port ${port}`));
