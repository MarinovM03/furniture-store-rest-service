import { Schema, model, Types } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: [true, 'Make is required'],
        minLength: [4, 'Make must be at least 4 characters long'],
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
        minLength: [4, 'Model must be at least 4 characters long'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1950, 'Year must be 1950 or later'],
        max: [2050, 'Year must be 2050 or earlier'],
    },    
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description must be at least 10 characters long'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price must be a positive number'],
    },
    img: {
        type: String,
        required: [true, 'Image is required'],
        validate: [/^https?:\/\//, 'Invalid image URL'],
    },
    material: {
        type: String,
    },
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    },
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;