import { 
  users, 
  contactSubmissions,
  newsletterSubscriptions,
  courseEnrollments,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
  type CourseEnrollment,
  type InsertCourseEnrollment
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  createCourseEnrollment(enrollment: InsertCourseEnrollment): Promise<CourseEnrollment>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  getAllCourseEnrollments(): Promise<CourseEnrollment[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private courseEnrollments: Map<number, CourseEnrollment>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.courseEnrollments = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existing = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === insertSubscription.email,
    );
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentId++;
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      createdAt: new Date(),
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async createCourseEnrollment(insertEnrollment: InsertCourseEnrollment): Promise<CourseEnrollment> {
    const id = this.currentId++;
    const enrollment: CourseEnrollment = {
      ...insertEnrollment,
      id,
      createdAt: new Date(),
    };
    this.courseEnrollments.set(id, enrollment);
    return enrollment;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }

  async getAllCourseEnrollments(): Promise<CourseEnrollment[]> {
    return Array.from(this.courseEnrollments.values());
  }
}

export const storage = new MemStorage();
