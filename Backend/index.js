
import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/superAdmin', superadminRouter);
app.use('/admin', adminRouters);
app.use('/branch', branchRouter);
app.use('/employee', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


