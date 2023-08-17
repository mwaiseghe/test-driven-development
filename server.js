import express from 'express';
import todoRouter from './Routes/todoRoutes';

const app = express();

app.use(express.json());

const port = 8002;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

app.use('/', todoRouter);

export default app;