import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    seats: {
        type: Number, required: true
    },
    bookings: [{ type: String }]

}, { timestamps: true });

export const Movie = mongoose.model("Movies", movieSchema);