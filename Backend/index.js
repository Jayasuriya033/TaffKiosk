
import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.use(cors());



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



// Create a new Role
app.post('/roles', async (req, res) => {
  const { roleName, roleDesc, createdBy } = req.body;

  try {
    const newRole = await prisma.role.create({
      data: {
        roleName,
        roleDesc,
        createdBy,
      },
    });
    res.status(201).json(newRole);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



// Create a new Employee
app.post('/employees', async (req, res) => {
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
  } = req.body;

  let { password } = req.body; // Extract password separately

    // Log the request body to ensure it contains the correct data
    // console.log(req.body);

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {

    // Adding format for username  
    const formattedUsername = `${username}@taffinc`;

    // Generating random password if one is not provide
    if(!password){
      password = generateRandomPassword();
    }

  //   // Generate a random password if one is not provided
  //  const generatedPassword = password || generateRandomPassword();

    const newEmployee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        dob: new Date(dob),
        email,
        phoneNo,
        location,
        username:formattedUsername,
        password: password,
        roleId:parseInt(roleId, 10), // convert roleId to an integer
        createdBy,
      },
    });
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


