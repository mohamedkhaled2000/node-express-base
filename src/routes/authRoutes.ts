import { Router } from "express";
import { getUserToken } from "./../controllers/authController";

const router = Router();

router.post('/login', async (req, res, next) => {
    try {
        await getUserToken(req, res); // Make sure the controller handles the response fully
    } catch (error) {
        next(error); // Pass errors to the global error handler
    }
});

export default router