import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    }, 
    genre: {
        type: String,
        required: [true, "Please provide a genre"],
    },
    platform: {
        type: String,
        required: [true, "Please provide a platform"],
    },
    rating: {
        type: Number,
        required: [true, "Please provide a rating"],
    },
});

const Game = mongoose.model("Game", gameSchema);

export default Game;