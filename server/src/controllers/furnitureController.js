import { Router } from "express";

const furnitureController = Router();

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;

    console.log(furnitureData);

    res.end();
});

export default furnitureController;