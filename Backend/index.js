
import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.use(cors());

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
    password,
    roleId,
    createdBy,
  } = req.body;

  try {
    const newEmployee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        dob: new Date(dob),
        email,
        phoneNo,
        location,
        username,
        password,
        roleId,
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


