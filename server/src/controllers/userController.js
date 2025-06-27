import { Router } from "express";

const userController = Router();

userController.post('/register', (req, res) => {
    console.log(req.body);
    
    res.end();
});

export default userController;