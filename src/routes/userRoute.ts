import express from "express";
import { register } from "../controllers/userController";

const router = express();

router.post("/register", register);


export default router;