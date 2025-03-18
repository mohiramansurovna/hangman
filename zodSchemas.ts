import { z } from "zod";

export const questionSchema = z.object({
  questions: z.array(z.object({
    question: z.string().min(1),
    answer: z.string().min(1).max(15),
  })),
  asker: z.string().min(3).max(40),
})