import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

// Ensure data directory and messages file exist
async function initDatabase() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(MESSAGES_FILE);
    } catch {
      await fs.writeFile(MESSAGES_FILE, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
}
await initDatabase();

// Routes
app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Sanket Kumar Singh Portfolio API is running successfully.",
    endpoints: {
      submitContact: "POST /api/contact"
    }
  });
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing fields. Name, email, and message are required."
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address format."
      });
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || "No Subject",
      message,
      timestamp: new Date().toISOString()
    };

    // Read existing messages
    const data = await fs.readFile(MESSAGES_FILE, "utf-8");
    const messages = JSON.parse(data);

    // Append new message
    messages.push(newMessage);

    // Save back to file
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`[Contact API] New message received from ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: "Your message has been recorded. Thank you for connecting!",
      data: { id: newMessage.id }
    });

  } catch (error) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later."
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio server is running on http://localhost:${PORT}`);
});
