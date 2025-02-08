import { Movie } from "../models/MovieModel";


export const addMovie = async (req: any, res: any) => {
    try {

        const { title, seats } = req.body;


        const saveMovie = new Movie({
            title, seats
        });
        const savedMovie = await saveMovie.save();

        res.status(200).send({
            message: "Movie added successfully",
            movie: savedMovie,
        });
    } catch (error: any) { console.log(error.message); }
};


