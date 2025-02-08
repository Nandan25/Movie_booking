import mongoose from "mongoose";

/*Connect to mongo db */

export const connect = async () => {
    try {
        await mongoose
            .connect(`${process.env.MONGO_URL}`, {})
            .then(() => console.log(`Mongoose Connected on ${process.env.MONGO_URL}`));
    } catch (error) {

        console.log(error);
    }
};
