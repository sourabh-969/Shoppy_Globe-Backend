import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

dotenv.config();

export default (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, process.env.Jwt_secret_key);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ err: "Invalid token" });
  }
}