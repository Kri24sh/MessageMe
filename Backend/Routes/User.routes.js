import express from "express";
import protectRoute from "../Middleware/Protectroute.js";
import { getUsersForSidebar } from "../Controllers/User.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;