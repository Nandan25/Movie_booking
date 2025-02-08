import express from "express";
import { newBooking } from "../controllers/bookingController";

const router = express();

router.post("/create", newBooking);


export default router;