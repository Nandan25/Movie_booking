import { Booking } from "../models/BookingsModel";
import { User } from "../models/UserModel";
import { Movie } from "../models/MovieModel";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";



export const newBooking = async (req: any, res: any, next: any) => {
    const { movie, date, seatNumber, user } = req.body;

    let existingMovie: any, existingUser: any, existingBooking: any, totalBookings: any;
    try {
        existingMovie = await Movie.findById(movie);
        existingUser = await User.findById(user);
        existingBooking = await Booking.find({ movie, date, seatNumber });
        totalBookings = await Booking.aggregate([
            {
                $match: {
                    "movie": new ObjectId(movie), // Match the specific movie
                    "date": new Date(date) // Match the specific date
                }
            },
            {
                $count: "total_documents" // Count the documents
            }
        ])

    } catch (err) {
        return console.log(err);
    }

    if (!existingMovie) {
        return res.status(404).json({ message: "Movie Not Found With Given ID" });
    }
    if (!user) {
        return res.status(404).json({ message: "User not found with given ID " });
    }
    if (existingBooking.length > 0) {
        return res.status(409).json({ message: "Booking not allowed for this selection" });
    }
    if (totalBookings.length > 0 && totalBookings[0].total_documents === existingMovie.seats) {
        return res.status(409).json({ message: "Movie completely booked for this selection" });
    }
    let booking;

    try {
        booking = new Booking({
            movie,
            date: new Date(`${date}`),
            seatNumber,
            user,
        });

        const session = await mongoose.startSession();
        session.startTransaction();
        existingUser.bookings.push(
            booking
        );
        existingMovie.bookings.push(
            booking
        );
        await existingUser.save({ session });
        await existingMovie.save({ session });
        await booking.save({ session });
        session.commitTransaction();
    } catch (err) {
        return console.log(err);
    }

    if (!booking) {
        return res.status(500).json({ message: "Unable to create a booking" });
    }

    return res.status(201).json({ booking });
};
