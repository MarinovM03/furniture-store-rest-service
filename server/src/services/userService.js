import bcrypt from 'bcrypt';

import User from "../models/User.js"
import { generateAuthToken } from "../utils/authUtils.js";

export default {
    async register(userData) {
        const createdUser = await User.create(userData);
        
        const token = generateAuthToken(createdUser);
        
        return {
            _id: createdUser.id,
            email: createdUser.email,
            accessToken: token
        };
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Invalid email or password');
        }

        const token = generateAuthToken(user);
        
        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        };
    }
}