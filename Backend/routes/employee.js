

import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const router = express.Router();
const prisma = new PrismaClient();

// Function to generate a random password
function generateRandomPassword(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

// Create a new Employee
router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    dob,
    email,
    phoneNo,
    location,
    username,
    roleId,
    createdBy,
    password
  } = req.body;





  // Validate null checks
  if (!firstName || !lastName || !dob || !email || !phoneNo || !location || !username || !roleId || !createdBy) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Format the username
    const formattedUsername = `${username}@taffinc`;


    

    // Generate a random password if one is not provided
    let hashedPassword = null;
    let generatedPassword = null;
    if (password) {
      // Hash the password
      hashedPassword = await bcrypt.hash(password, 10);
    } else {
      generatedPassword = generateRandomPassword();
      hashedPassword = await bcrypt.hash(generatedPassword, 10);
    }

    const newEmployee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        dob: new Date(dob),
        email,
        phoneNo,
        location,
        username: formattedUsername,
        password: hashedPassword,
        roleId: parseInt(roleId, 10),
        createdBy,
      },
    });

    // If password was generated, include it in the response (not recommended for production)
    const response = {
      ...newEmployee,
      generatedPassword: generatedPassword ? generatedPassword : undefined
    };

    res.status(201).json(response);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(400).json({ error: error.message });
  }
});



// Get all Employees
router.get('/', async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(400).json({ error: error.message });
  }
});



export default router;



