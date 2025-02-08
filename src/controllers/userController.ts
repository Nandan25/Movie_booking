import { User } from "../models/UserModel";


export const register = async (req: any, res: any) => {
    try {

        const { name, email } = req.body;


        const saveUser = new User({
            name: name,
            email: email,
        });
        const savedUser = await saveUser.save();

        res.status(200).send({
            message: "User creation successfull..",
            user: savedUser,
        });
    } catch (error: any) { console.log(error.message); }
};


