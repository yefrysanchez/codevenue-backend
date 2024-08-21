// middleware/apiKeyMiddleware.js
const API_KEY = process.env.API_KEY

function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers['apikey'];

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
}

module.exports = apiKeyMiddleware;
