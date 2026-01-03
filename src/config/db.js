import mongoose from "mongoose";


export const connectDB = async () => {
    try {

    } catch(err) {
        console.error("Error Connecting to MONGODB", error);
        process.exit(1);  //exit with failure   0 is sucess
    }

};