const jwtUtil = require('../utils/jwt')

const verifyToken = (req, res, next) => {
    if (req.headers['access_token'] != null) {
        const decodedToken = jwtUtil.verifyToken(req.headers['access_token'])

        if (decodedToken) {
            req.body.userId = decodedToken.userId
            next()
        }
        else
            res.status(401).json({ error: 'Invalid token' })
    }
    else
        res.status(403).json({ error: 'No token provided' })
}

module.exports = verifyToken