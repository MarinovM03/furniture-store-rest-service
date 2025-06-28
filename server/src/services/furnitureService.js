import Furniture from "../models/Furniture.js"

export default {
    getAll(filter = {}) {
        return Furniture.find(filter);
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId);
    },
    create(furnitureData, ownerId) {
        return Furniture.create({ ...furnitureData, _ownerId: ownerId });
    },
    delete(furnitureId) {
        return Furniture.findByIdAndDelete(furnitureId);
    },
    update(furnitureId, furnitureData) {
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData);
    }
}