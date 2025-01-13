import { Request, Response } from "express";
import Game from "../models/gameModel";

export const getAllGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find();
    res.status(200).json({
      message: "List of games",
      games,
    });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
}

// export const getGame = (req: Request, res: Response) => {
//   // res.status(200).json({
//   //   message: "List of game",
//   //   user: games.find((game) => game.id === req.params.id),
//   // });
// }
