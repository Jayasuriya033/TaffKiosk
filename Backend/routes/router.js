import express from 'express';
import roleRouter from './role.js';
import employeeRouter from './employee.js';
import { AuthRouter } from './auth.js';
import cookieParser from "cookie-parser";
import OtpRouter from './otp.js'


const router = express.Router();
router.use(cookieParser());

router.use('/roles', roleRouter);
router.use('/api/employees', employeeRouter);
router.use('/auth', AuthRouter);
router.use('/otp', OtpRouter);

export default router;
