import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from 'jsonwebtoken';

export const getUserToken = async (req: Request, res: Response): Promise<Response<any> | undefined> => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email' });
        }

        const token = jwt.sign({ email: user?.email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        return res.status(200).json({ token });
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        console.error('Stack trace:', error.stack);
        return res.status(500).json({ message: 'Server Error' });
    }
}