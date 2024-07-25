  import express from 'express';
  import jwt from 'jsonwebtoken';
  import dotenv from 'dotenv';

  dotenv.config();

  const router = express.Router();

  const JWT_SECRET = process.env.JWT_SECRET || 'svj_kiosk';

  export const verifyEmployee = (req, res, next) => {
    const token = req.token;
    console.log("Token --- " + token);
    if (!token) {
      return res.status(401).json({ message: 'Token is not there....' });
    }
    jwt.verify(token, JWT_SECRET, (err, decodedEmployee) => {
      if (err) {
        return res.status(403).json({ message: 'incorrect...' });
      }
      req.username = decodedEmployee.username;
      next();
    });
  };
console.log();
  router.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ logout: true });
  });

  export { router as AuthRouter };
