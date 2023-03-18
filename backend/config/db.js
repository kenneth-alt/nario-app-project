import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGO_URL || "mongodb+srv://nario123:o73qZmbQ0CjEjlm0@nariocluster.lxsmcbb.mongodb.net/nario-app?retryWrites=true&w=majority"
        const conn = await mongoose.connect(connectionString);

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export { connectDB };