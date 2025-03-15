import {db} from '@/lib/db';
import {questionSchema} from '@/zodSchemas';
import {NextRequest, NextResponse} from 'next/server';
export async function POST(req: NextRequest) {
    const body = await req.json();
    const validated = questionSchema.safeParse(body);
    if (!validated.success) {
        return NextResponse.json(validated.error.errors, {status: 400});
    }
    const {question, asker, answer} = validated.data;
    
    try {
        const res = await db.question.create({
            data: {
                question,
                asker,
                answer:answer.trim(),
            },
        });

        return NextResponse.json(res.id, {status: 200});
    } catch (e) {
        return NextResponse.json('Failed to submit question', {status: 500});
    }
}

export async function GET(req: NextRequest,{ params }: { params: Promise<{ id: string }> }) {
    const id=(await params).id;
    if (!id) return NextResponse.json('Missing id', {status: 400});
    try {
        const question = await db.question.findUnique({
            where: {
                id: id,
            },
        });
        if (!question) {
            return NextResponse.json('Question not found', {status: 404});
        }
        return NextResponse.json(question, {status: 200});
    } catch {
        return NextResponse.json('Failed to get question', {status: 500});
    }
}
