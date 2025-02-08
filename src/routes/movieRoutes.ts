import express from "express";
import { addMovie } from "../controllers/movieController";

const router = express();

router.post("/create", addMovie);


export default router;