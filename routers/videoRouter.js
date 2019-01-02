import express from 'express';
import routes from '../routes';
import { search } from '../controllers/videoController';

const videoRouter = express.Router();

export default videoRouter;
