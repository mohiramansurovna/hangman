import { db } from "@/lib/db";
import { questionSchema } from "@/zodSchemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validated = questionSchema.safeParse(body);
        if (!validated.success) {
            return NextResponse.json(validated.error.errors, { status: 400 });
        }

        const { questions, asker } = validated.data;

        // Create a new Questions entry with related Question records
        const questionBlock = await db.questions.create({
            data: {
                asker,
                questions: {
                    create: questions.map((q) => ({
                        question: q.question,
                        answer: q.answer.trim().toLowerCase(),
                    })),
                },
            },
            include: { questions: true },
        });

        return NextResponse.json(questionBlock.id, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json("Failed to submit questions", { status: 500 });
    }
}
