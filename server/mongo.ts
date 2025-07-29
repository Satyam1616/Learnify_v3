import { MongoClient } from "mongodb";

// Use environment variable or fallback to the provided connection string
// Updated with correct credentials: user: LearnifyDb, password: LearnifyDb
const uri = process.env.MONGODB_URI || "mongodb+srv://LearnifyDb:LearnifyDb@cluster0.dmnqiz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Alternative connection strings (uncomment and update as needed):
// If you create a new user 'learnify-app' with password 'SecurePass123!', use this:
// const uri = "mongodb+srv://learnify-app:SecurePass123!@cluster0.dmnqiz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// For URL encoding special characters in password:
// const uri = "mongodb+srv://username:password@cluster0.dmnqiz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let isConnected = false;

export async function getDb() {
  if (!isConnected) {
    try {
      await client.connect();
      console.log("Successfully connected to MongoDB Atlas");
      isConnected = true;
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }
  return client.db("Learnify");
}

export async function closeDb() {
  if (isConnected) {
    await client.close();
    isConnected = false;
    console.log("MongoDB connection closed");
  }
}