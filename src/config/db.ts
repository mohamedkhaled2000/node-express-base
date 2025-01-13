import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log('MongoDB Connected: ' + conn.connection.host);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        console.error('Stack trace:', error.stack);
        process.exit(1);
    }
}

export default connectDB;