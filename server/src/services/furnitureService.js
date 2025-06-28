import Furniture from "../models/Furniture.js"

export default {
    getAll() {
        return Furniture.find();
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId);
    },
    create(furnitureData) {
        return Furniture.create(furnitureData);
    },
}