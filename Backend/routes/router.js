// import express from 'express';
// import roleRouter from './role.js';
// import employeeRouter from './employee.js';

// const router = express.Router();

// router.use('/roles', roleRouter);
// router.use('/employees', employeeRouter);

// export default router;


import express from 'express';
import roleRouter from './role.js';
import employeeRouter from './employee.js';

const router = express.Router();

router.use('/roles', roleRouter);
router.use('/employees', employeeRouter);

export default router;
