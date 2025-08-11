import { z } from "zod";

// Enums
export const Role = z.enum([
  "PRESIDENT",
  "VICE_PRESIDENT", 
  "TRESORIER",
  "SECRETAIRE",
  "EVENT_LEAD",
  "COMMS_LEAD",
  "PARTNER_LEAD",
  "DESIGNER",
  "LOGISTICS",
  "MEMBER",
  "ALUMNI",
  "STAFF"
]);

export const MembershipStatus = z.enum([
  "ACTIVE",
  "PENDING", 
  "INACTIVE"
]);

export const EventStatus = z.enum([
  "DRAFT",
  "PUBLISHED",
  "CLOSED"
]);

export const EventVisibility = z.enum([
  "PUBLIC",
  "PRIVATE"
]);

export const TicketStatus = z.enum([
  "RESERVED",
  "PAID",
  "CHECKED_IN",
  "REFUNDED"
]);

export const PaymentStatus = z.enum([
  "PENDING",
  "SUCCEEDED",
  "FAILED",
  "REFUNDED"
]);

export const PaymentMethod = z.enum([
  "STRIPE"
]);

export const ExpenseStatus = z.enum([
  "SUBMITTED",
  "APPROVED", 
  "PAID"
]);

export const OrderStatus = z.enum([
  "PENDING",
  "CONFIRMED",
  "CANCELLED"
]);

// User schemas
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().optional(),
  studentId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isActive: z.boolean().default(true),
});

export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateUserSchema = CreateUserSchema.partial();

// Membership schemas
export const MembershipSchema = z.object({
  id: z.string(),
  userId: z.string(),
  status: MembershipStatus,
  startAt: z.date(),
  endAt: z.date().optional(),
  circle: z.string().optional(),
});

// Event schemas
export const EventSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  location: z.string(),
  startAt: z.date(),
  endAt: z.date(),
  capacity: z.number().positive().optional(),
  status: EventStatus,
  budgetTarget: z.number().optional(),
  visibility: EventVisibility,
});

export const CreateEventSchema = EventSchema.omit({ id: true });
export const UpdateEventSchema = CreateEventSchema.partial();

// Payment schemas
export const PaymentSchema = z.object({
  id: z.string(),
  userId: z.string().optional(),
  eventId: z.string().optional(),
  amountCents: z.number().positive(),
  currency: z.string().default("EUR"),
  method: PaymentMethod,
  providerId: z.string(),
  status: PaymentStatus,
  createdAt: z.date(),
});

// Type exports
export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type Membership = z.infer<typeof MembershipSchema>;
export type Event = z.infer<typeof EventSchema>;
export type CreateEvent = z.infer<typeof CreateEventSchema>;
export type UpdateEvent = z.infer<typeof UpdateEventSchema>;
export type Payment = z.infer<typeof PaymentSchema>;
export type RoleType = z.infer<typeof Role>;
export type MembershipStatusType = z.infer<typeof MembershipStatus>;
export type EventStatusType = z.infer<typeof EventStatus>;
export type PaymentStatusType = z.infer<typeof PaymentStatus>;