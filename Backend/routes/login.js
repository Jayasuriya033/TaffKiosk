import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();


const router = express.Router();
const prisma = new PrismaClient();


router.use(cookieParser());

const JWT_SECRET = process.env.JWT_SECRET || 'svj_kiosk';

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    console.log('Attempting to find user:', username);
    const user = await prisma.employee.findUnique({
      where: { username },
    });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    console.log('User found:', user);

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log('Password does not match');
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    function createTokeFormat(username, password) {
      const userNameAndPassword = `${username + password}`;
      console.log("UserPassword  ---- " + userNameAndPassword);
    }
    
    // createTokeFormat(username, password) ;
    // createTokeFormat(user.username, user.password);

    
    console.log('Password matches');
    const token = jwt.sign(
      { username: createTokeFormat(username, password) },
      JWT_SECRET,
      { expiresIn: '1h' } 
    );

    const decoded = jwt.decode(token);
    console.log(decoded);
    console.log(token);


    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
    });
console.log("role ID "+ user.roleId);
    return res.json({ login: true, username: user.username, role: user.roleId});
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

export default router;
