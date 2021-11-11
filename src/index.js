import express from 'express';
import logger from 'morgan';
import { router } from './router'
import { successResponse, errorResponse } from './utils/response';
import { statusCodes } from './utils/statuscode';
import { messages } from './utils/message';
import { fetchPeople } from './utils/fetch';



const app = express();
app.use(express.json());


const port = process.env.PORT || 1342;

//morgan for logging
app.use(logger('dev'));


app.use(router);
//fetchPeople();


app.get('/api/v1', (req, res) => successResponse(res, statusCodes.success, messages.welcome));
app.get('*', (req, res) => errorResponse(res, statusCodes.notFound, messages.notFound));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

export default app;