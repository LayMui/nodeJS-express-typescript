import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(json()); // register the json package, parse the body of all incoming request and extract json
// and populare the object req.body 

app.use('/todos', todoRoutes);

// error handling middleware function (express)
// express.Request -> Request
// express.Response -> Response
// express.NextFunction -> NextFunction
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
