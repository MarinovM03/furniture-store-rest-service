import { generateAuthToken } from "../utils/authUtils.js";
import User from "../models/User.js"

export default {
    async register(userData) {
        const createdUser = await User.create(userData);
        
        const token = generateAuthToken(createdUser);
        
        return {
            _id: createdUser.id,
            email: createdUser.email,
            accessToken: token
        };
    }
}