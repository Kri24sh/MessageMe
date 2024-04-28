import express from 'express';
import {Messagecontroller, toGetMessage,} from '../Controllers/Message.controller.js'
import protectRoute  from '../Middleware/Protectroute.js';

const Router = express.Router();

Router.get("/:id",protectRoute,toGetMessage);
Router.post("/send/:id", protectRoute , Messagecontroller);

export default Router;