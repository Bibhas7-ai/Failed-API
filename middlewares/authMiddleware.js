const jwt = require("jsonwebtoken");
const User = require("../models/user");

const secretKey = "yourSecretKey"; // Replace with your own secret key

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized access" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Find the user in the database
    User.findById(decoded.userId, (err, user) => {
      if (err || !user) {
        return res.status(401).json({ error: "Unauthorized access" });
      }

      // Attach the authenticated user to the request object
      req.user = user;

      // Proceed to the next middleware or route handler
      next();
    });
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized access" });
  }
};

module.exports = authMiddleware;
