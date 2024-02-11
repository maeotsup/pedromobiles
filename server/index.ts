const express = require('express') as typeof import('express');
import { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.SERVER_PORT || 8081;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Pedromobiles!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
