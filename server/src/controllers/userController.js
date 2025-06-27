import { Router } from "express";

import userService from "../services/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;

    const result = await userService.register(userData);
    
    res.json(result);
});

export default userController;