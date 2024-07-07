// import express from 'express';
// import bcrypt from 'bcrypt';
// import { PrismaClient } from '@prisma/client';

// const router = express.Router();
// const prisma = new PrismaClient();

// router.post('/login', async (req, res) => {
//   const { username, password, role } = req.body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { username },
//     });

//     if (!user || user.role !== role) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// export  {router as loginRouter};
