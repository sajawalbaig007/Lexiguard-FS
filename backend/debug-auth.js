// Debug script to check authentication and user data isolation
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Agreement from "./models/Agreement.js";
import jwt from "jsonwebtoken";

// Load environment variables
dotenv.config();

// Connect to database
mongoose.connect(process.env.MONGO_URI);

async function debugAuth() {
  console.log("=== AUTHENTICATION DEBUG ===");
  
  // 1. Check all users
  const users = await User.find({});
  console.log("Total users in database:", users.length);
  users.forEach(user => {
    console.log(`- User: ${user.email} (ID: ${user._id})`);
  });
  
  // 2. Check all agreements
  const agreements = await Agreement.find({});
  console.log("\nTotal agreements in database:", agreements.length);
  agreements.forEach(agreement => {
    console.log(`- Agreement: ${agreement.title} (User ID: ${agreement.userId})`);
  });
  
  // 3. Check user-specific agreements
  console.log("\n=== USER-SPECIFIC AGREEMENTS ===");
  for (const user of users) {
    const userAgreements = await Agreement.find({ userId: user._id });
    console.log(`User ${user.email} has ${userAgreements.length} agreements:`);
    userAgreements.forEach(agreement => {
      console.log(`  - ${agreement.title}`);
    });
  }
  
  // 4. Test JWT token generation
  if (users.length > 0) {
    const testUser = users[0];
    const token = jwt.sign({ id: testUser._id }, process.env.JWT_SECRET);
    console.log("\n=== JWT TOKEN TEST ===");
    console.log("Test User:", testUser.email);
    console.log("Generated Token:", token);
    
    // Test token verification
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    console.log("User ID from token:", decoded.id);
    console.log("Original User ID:", testUser._id);
    console.log("IDs match:", decoded.id.toString() === testUser._id.toString());
  }
  
  await mongoose.disconnect();
}

debugAuth().catch(console.error);
