import mongoose from 'mongoose';

export const ConnectToMongoose = async()=>{

    try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDb");
    } catch (error) {
        console.log("Mongodb connection fail",error.message );
    }
}