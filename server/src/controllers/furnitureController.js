import { Router } from "express";

import furnitureService from "../services/furnitureService.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const furnitures = await furnitureService.getAll();

    res.json(furnitures);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;

    const ownerId = req.user.id;
    
    try {
        const result = await furnitureService.create(furnitureData, ownerId); 
    
        res.json(result);
        
    } catch (err) {
        res.status(400).json(err);
    }
});

furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getOne(furnitureId);

    res.json(furniture);
});

export default furnitureController;