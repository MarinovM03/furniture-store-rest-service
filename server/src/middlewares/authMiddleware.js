import jsonwebtoken from 'jsonwebtoken';

import { JWT_AUTH_SECRET } from '../config/index.js';

export const auth = (req, res, next) => {
    const token = req.header('X-Authorization');

    if (!token) {
        return next();
    }

    try {
        const user = jsonwebtoken.verify(token, JWT_AUTH_SECRET);

        req.user = user;

        next();
    } catch (err) {
        res.status(401).end();
    }
    
    next();
};