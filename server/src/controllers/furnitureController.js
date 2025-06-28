import { Router } from "express";

import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const furnitures = await furnitureService.getAll();

    res.json(furnitures);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    
    try {
        const result = await furnitureService.create(furnitureData); 
    
        res.json(result);
        
    } catch (err) {
        res.status(400).json(err);
    }
});

export default furnitureController;