import jsonwebtoken from 'jsonwebtoken';

import { JWT_AUTH_SECRET } from '../config/index.js';

export const generateAuthToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
    }

    const token = jsonwebtoken.sign(payload, JWT_AUTH_SECRET, { expiresIn: '2h' });

    return token;
}