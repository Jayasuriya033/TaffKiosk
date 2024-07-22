import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { mobileNumber } = req.body;
  if (!mobileNumber) {
    return res.status(400).json({ error: 'Mobile number is required' });
  }
  try {
    const employee = await prisma.employee.findFirst({
      where: { phoneNo: mobileNumber},
    });

    if (!employee) {
      console.log('Mobile Number not found');
      return res.status(401).json({ error: 'Invalid Mobile Number' });
    }
    // console.log('Mobile Number found:', employee);

    return res.json({ validation: true, message: "Mobile number Verified" });
  } catch (error) {
    console.error('Error in OTP send:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get

export default router;
