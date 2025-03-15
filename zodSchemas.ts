import { z } from "zod";

export const questionSchema = z.object({
  question:z.string().min(5).max(100),
  asker: z.string().min(3).max(40),
  answer:z.string().min(2).max(100),
})