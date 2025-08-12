// src/utils/generateToken.js

import jwt from "jsonwebtoken";

/**
 * Generate a JWT token for a user
 * @param {string} userId - The ID of the user
 * @returns {string} token
 */
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },              // payload
    process.env.JWT_SECRET,      // secret key from .env
    { expiresIn: "30d" }         // token validity
  );
};

export default generateToken;
