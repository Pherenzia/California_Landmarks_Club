const router = require("express").Router();
const { User } = require("../models");
const { signToken, requireAuth } = require("../util/auth");

// Use requireAuth middleware for routes that should return an error to the
// client if a valid token isn't received.
router.get("/me", requireAuth, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  res.json(user);
});

router.post("/register", async (req, res) => {
  try {
    // Create a new user
    const { email, username, password } = req.body;
    const user = await User.create({ email, username, password });

    // Create a token and send response to client
    const token = await signToken(user);
    res.json({ user, token });
  } catch (error) {
    // Check for duplicate email
    if (error.name === "MongoError" && error.code === 11000) {
      const [[key, value]] = Object.entries(error.keyValue);
      return res.status(400).json({
        message: `${key} "${value}" already exists.`,
      });
    }

    // Some other error happened. Uh oh.
    console.error(error);
    return res.status(500).json({
      message: "An expected server error has occurred.",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Helper function to send authentication error back to client.
  const sendAuthError = () =>
    res.status(401).json({ message: "Invalid username or password" });

  if (!user) {
    // No such user
    return sendAuthError();
  }

  const authentic = await user.isCorrectPassword(password);
  if (!authentic) {
    // Password doesn't match
    return sendAuthError();
  }

  // Update lastLogin purely for the sake of example. Feel free to eliminate this field from the User model.
  user.lastLogin = Date.now();
  await user.save();

  // Create the token and send response to client
  const token = await signToken(user);
  res.json({ token, user });
});

module.exports = router;
