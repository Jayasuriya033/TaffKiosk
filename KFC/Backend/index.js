import express from 'express';
import cors from 'cors';
import { superadminRouter } from './routes/superAdmin.js';
import { adminRouters } from './routes/admin.js';
import { branchRouter } from './routes/branch.js';
import { employeeRouter } from './routes/employee.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/superAdmin', superadminRouter);
app.use('/admin', adminRouters);
app.use('/branch', branchRouter);
app.use('/employee', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
