import express from 'express';
import dotenv from 'dotenv';
import jwt, { decode } from 'jsonwebtoken';



dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'svj_kiosk';
// ---------------------------------JWT TOKEN CREATION Start------------------------------

export function jwtToken(tokenData) {
  // console.log(" userName  ", tokenData);
  // const token = jwt.sign({ usernames }, JWT_SECRET, { expiresIn: '1h' });
  const token = jwt.sign( tokenData , JWT_SECRET, {noTimestamp :  true});
  // console.log(token);
  
  // console.log(" Decode - " ,decode(token));
  return token;
}
// ---------------------------------JWT TOKEN CREATION End------------------------------


// --------------------------verifyEmployee Start---------------------------------

export const verifyEmployee = (requiredRole) => (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  
  // console.log("Token --- " + requiredRole[1]);



  if (!token) {
    return res.status(401).json({ message: 'Token is not there....' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, decodedEmployee) => {
    if (err) {
      return res.status(403).json({ result: false, message: 'incorrect...' });
    }

    req.username = decodedEmployee.username;
    req.roleName = decodedEmployee.roleName;
    console.log("Role Name Decode --- ", decodedEmployee.roleName);

    // if (decodedEmployee.roleName !== requiredRole[0] || decodedEmployee.roleName !== requiredRole[1]) {
    //   return res.status(401).json({ result: false, message: 'Unauthorized Login ⚠️' });
    // }

   var status = 0;
   requiredRole.map(requiredRole => {
    if (decodedEmployee.roleName !== requiredRole ) {
    //  status = 0;
    }else {
      status = 1;
      console.log(requiredRole);
    }
  }
  )
console.log("Status    ",status);
   if (status !== 1) {
      return res.status(401).json({ result: false, message: 'Unauthorized Login ⚠️' });
    }
    next();
  });
};

// --------------------------verifyEmployee End---------------------------------


// -----------------------------logout Start---------------------------------------
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('roleId');
  return res.json({ logout: true });
});
// -----------------------------logout End---------------------------------------





export { router as AuthRouter };
