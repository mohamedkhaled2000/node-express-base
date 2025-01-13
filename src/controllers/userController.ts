import { Request, Response } from "express";
import User from "../models/userModel";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string) || 10; // Default to 10 items per page
    
    // Calculate skip value for MongoDB
    const skip = (page - 1) * limit
    const users = await User.find()
      .skip(skip)
      .limit(limit);

    const totalUsers = await User.countDocuments();

    const metadata = {
      totalUsers,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      hasNextPage: (page * limit) < totalUsers,
      hasPreviousPage: page > 1,
    }
    res.status(200).json({
      message: "List of users",
      metadata,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  console.log('req.body', req.body);
  
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    console.log("🚀 ~ getUser ~ req.params.id:", req.params.id)
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "User details",
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) res.status(404).json({ message: "User not found" });
    res.status(200).json({
      message: "User updated",
      status: true,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "User deleted",
      status: true,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}