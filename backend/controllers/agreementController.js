import Agreement from "../models/Agreement.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  
  if (!token) {
    console.log("No token provided in request");
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decoded successfully:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Token verification failed:", error.message);
    res.status(401).json({ message: "Invalid token." });
  }
};

// SAVE AGREEMENT
export const saveAgreement = async (req, res) => {
  try {
    const { templateName, title, content, formData, status } = req.body;
    const userId = req.user.id;

    // Debug: Log user info
    console.log("Saving agreement for user ID:", userId);
    console.log("User from token:", req.user);

    if (!templateName || !title || !content) {
      return res.status(400).json({ message: "Template name, title, and content are required" });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found for ID:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user.email, "ID:", user._id);

    // Create or update agreement
    console.log("Looking for agreement with userId:", userId, "and title:", title);
    let agreement = await Agreement.findOne({ userId, title });

    if (agreement) {
      // Update existing agreement
      console.log("Updating existing agreement for user:", userId);
      agreement.templateName = templateName;
      agreement.content = content;
      agreement.formData = formData || {};
      agreement.status = status || 'saved';
      agreement.updatedAt = new Date();
      await agreement.save();
    } else {
      // Create new agreement
      console.log("Creating new agreement for user:", userId);
      agreement = new Agreement({
        userId,
        templateName,
        title,
        content,
        formData: formData || {},
        status: status || 'saved'
      });
      await agreement.save();
    }

    res.status(200).json({ 
      message: "Agreement saved successfully", 
      agreement 
    });

  } catch (error) {
    console.error("Error saving agreement:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL USER AGREEMENTS
export const getUserAgreements = async (req, res) => {
  try {
    const userId = req.user.id;

    // Debug: Log user info
    console.log("Fetching agreements for user ID:", userId);
    console.log("User from token:", req.user);

    const agreements = await Agreement.find({ userId })
      .sort({ createdAt: -1 })
      .select('title templateName status createdAt updatedAt');

    console.log("Query executed for userId:", userId);
    console.log("Found agreements:", agreements.length);
    console.log("Agreements:", agreements.map(a => ({ title: a.title, userId: a.userId })));
    res.status(200).json({ agreements });

  } catch (error) {
    console.error("Error fetching agreements:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET SPECIFIC AGREEMENT
export const getAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const agreement = await Agreement.findOne({ _id: id, userId });

    if (!agreement) {
      return res.status(404).json({ message: "Agreement not found" });
    }

    res.status(200).json({ agreement });

  } catch (error) {
    console.error("Error fetching agreement:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE AGREEMENT
export const deleteAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const agreement = await Agreement.findOne({ _id: id, userId });

    if (!agreement) {
      return res.status(404).json({ message: "Agreement not found" });
    }

    await Agreement.findByIdAndDelete(id);

    res.status(200).json({ message: "Agreement deleted successfully" });

  } catch (error) {
    console.error("Error deleting agreement:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Export middleware
export { verifyToken };
