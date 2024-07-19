// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import router from './routes/router.js';
// import loginRouter from './routes/login.js';
// import dotenv from 'dotenv';
// // import { token } from './routes/login.js';

// dotenv.config();

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());
// // token();

// app.use('/', router);
// app.use('/login', loginRouter);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes/router.js';
import loginRouter from './routes/login.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use('/', router);
app.use('/login', loginRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
