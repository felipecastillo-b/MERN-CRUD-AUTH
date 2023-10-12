import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://castillodk:SQOs6LzWw6Z4FK6b@users.jwfjxwp.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB Connected!")
    } catch (error) {
        console.log(error)
    }
};