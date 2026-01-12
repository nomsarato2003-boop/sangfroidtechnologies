"use server";

import { z } from "zod";

// Contact Form Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

// Server Action: Submit Contact Form
export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    phone: formData.get("phone") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const result = contactFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate sending email/saving to database
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, you would:
  // 1. Save to database
  // 2. Send notification email
  // 3. Add to CRM system

  console.log("Contact form submission:", result.data);

  return {
    success: true,
    message: "Thank you for your message! We'll get back to you within 24 hours.",
  };
}

// Newsletter Subscription Schema
const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

// Server Action: Subscribe to Newsletter
export async function subscribeToNewsletter(formData: FormData): Promise<ActionResult> {
  const email = formData.get("email") as string;

  const result = newsletterSchema.safeParse({ email });

  if (!result.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate subscription
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("Newsletter subscription:", result.data);

  return {
    success: true,
    message: "You've been subscribed to our newsletter!",
  };
}

// Demo Request Schema
const demoRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().optional(),
  phone: z.string().optional(),
  solution: z.enum(["blockchain", "ai-security", "ai-marketing", "transportation", "other"]),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]),
  message: z.string().optional(),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;

// Server Action: Request Demo
export async function requestDemo(formData: FormData): Promise<ActionResult> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    jobTitle: formData.get("jobTitle") as string,
    phone: formData.get("phone") as string,
    solution: formData.get("solution") as string,
    companySize: formData.get("companySize") as string,
    message: formData.get("message") as string,
  };

  const result = demoRequestSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate processing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Demo request:", result.data);

  return {
    success: true,
    message: "Thank you! Our team will contact you to schedule your demo.",
  };
}

// Career Application Schema
const careerApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  position: z.string().min(2, "Position is required"),
  experience: z.string().min(1, "Experience level is required"),
  linkedIn: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
});

export type CareerApplicationData = z.infer<typeof careerApplicationSchema>;

// Server Action: Submit Career Application
export async function submitCareerApplication(formData: FormData): Promise<ActionResult> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    position: formData.get("position") as string,
    experience: formData.get("experience") as string,
    linkedIn: formData.get("linkedIn") as string,
    portfolio: formData.get("portfolio") as string,
    coverLetter: formData.get("coverLetter") as string,
  };

  const result = careerApplicationSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate processing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Career application:", result.data);

  return {
    success: true,
    message: "Your application has been submitted! We'll review it and get back to you.",
  };
}

// Partner Inquiry Schema
const partnerInquirySchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  partnershipType: z.enum(["technology", "reseller", "integration", "consulting", "other"]),
  website: z.string().url("Please enter a valid website URL").optional().or(z.literal("")),
  description: z.string().min(20, "Please provide more details about the partnership"),
});

export type PartnerInquiryData = z.infer<typeof partnerInquirySchema>;

// Server Action: Submit Partner Inquiry
export async function submitPartnerInquiry(formData: FormData): Promise<ActionResult> {
  const rawData = {
    companyName: formData.get("companyName") as string,
    contactName: formData.get("contactName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    partnershipType: formData.get("partnershipType") as string,
    website: formData.get("website") as string,
    description: formData.get("description") as string,
  };

  const result = partnerInquirySchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Simulate processing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Partner inquiry:", result.data);

  return {
    success: true,
    message: "Thank you for your interest in partnering with us! Our team will be in touch.",
  };
}
