import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'questions.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const questions = JSON.parse(fileContent).sort(() => Math.random() - 0.5);

        return NextResponse.json(questions, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load questions' }, { status: 500 });
    }
}

