import jwt from "jsonwebtoken"

const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "Not authorized, login again"
      });
    }

    console.log("token ", token);

    const token_decode = jwt.decode(token);
    if (!token_decode || !token_decode.clerkId) {
      return res.status(401).json({
        success: false,
        msg: "Invalid or expired token.",
      });
    }

    req.user = { clerkId: token_decode.clerkId };  // ✅ safe assignment
    console.log("Authenticated clerkId: ", token_decode.clerkId);
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ success: false, msg: error.message });
  }
};

export { authUser };
