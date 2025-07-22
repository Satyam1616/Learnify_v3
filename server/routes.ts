import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSubmissionSchema, 
  insertNewsletterSubscriptionSchema, 
  insertCourseEnrollmentSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, message: "Contact form submitted successfully!", data: submission });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit contact form" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json({ success: true, message: "Successfully subscribed to newsletter!", data: subscription });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      if (error instanceof Error && error.message === "Email already subscribed") {
        res.status(409).json({ success: false, message: "Email is already subscribed to our newsletter" });
      } else {
        res.status(400).json({ 
          success: false, 
          message: error instanceof Error ? error.message : "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  // Course enrollment
  app.post("/api/enroll", async (req, res) => {
    try {
      const validatedData = insertCourseEnrollmentSchema.parse(req.body);
      const enrollment = await storage.createCourseEnrollment(validatedData);
      res.json({ success: true, message: "Successfully enrolled in course!", data: enrollment });
    } catch (error) {
      console.error("Course enrollment error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to enroll in course" 
      });
    }
  });

  // Get all submissions (admin endpoints)
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContactSubmissions();
      res.json({ success: true, data: contacts });
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch contact submissions" });
    }
  });

  app.get("/api/admin/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.json({ success: true, data: subscriptions });
    } catch (error) {
      console.error("Get newsletter subscriptions error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch newsletter subscriptions" });
    }
  });

  app.get("/api/admin/enrollments", async (req, res) => {
    try {
      const enrollments = await storage.getAllCourseEnrollments();
      res.json({ success: true, data: enrollments });
    } catch (error) {
      console.error("Get enrollments error:", error);
      res.status(500).json({ success: false, message: "Failed to fetch course enrollments" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
