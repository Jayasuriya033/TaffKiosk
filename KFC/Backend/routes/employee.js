import express from 'express';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import auth from '../middleware/auth.js';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/employee', auth, async (req, res) => {
  const { firstName, lastName, dob, email, phoneNo, location, username, password, roleId } = req.body;

  try {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        dob: new Date(dob),
        email,
        phoneNo,
        location,
        username,
        password: hashedPassword,
        roleId,
        createdBy: req.user.username, 
      },
    });

    res.status(201).json({ message: 'Employee created successfully', newEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
