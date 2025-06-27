import User from "../models/User.js"

export default {
    async register(userData) {
        const createdUser = await User.create(userData);
        
        // sessionStorage.setItem('authToken', result.accessToken);

        return {
            _id: createdUser.id,
            email: createdUser.email,
            accessToken: '' 
        };
    }
}