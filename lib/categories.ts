import {promises as fs} from 'fs';
import path from 'path';

export async function getCategories() {
    try {
        const filePath = path.join(process.cwd(), 'categories.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const questions = JSON.parse(fileContent).sort(() => Math.random() - 0.5);
        return questions;
    } catch {
        return null;
    }
}
// import {db} from './db';

// export async function addCategoriesOnceToDb() {
//     try {
//         const filePath = path.join(process.cwd(), 'ourquestions.json');
//         const fileContent = await fs.readFile(filePath, 'utf-8');
//         const categories: { category: string; questions: { question: string; answer: string }[] }[] =
//             JSON.parse(fileContent).sort(() => Math.random() - 0.5);

//         let ids: { id: string; category: string }[] = [];

//         for (const each of categories) {
//             // Check if category already exists in DB
//             const existing = await db.questions.findFirst({
//                 where: { asker: `cassy from ${each.category}` },
//             });

//             if (existing) {
//                 console.log(`Category ${each.category} already exists, skipping.`);
//                 console.log({
//                     id: existing.id,
//                     category: each.category,
//                 });
//                 continue;
//             }

//             try {
//                 const res = await db.questions.create({
//                     data: {
//                         asker: `cassy from ${each.category}`,
//                         questions: {
//                             create: each.questions.map(q => ({
//                                 question: q.question,
//                                 answer: q.answer.trim().toLowerCase(),
//                             })),
//                         },
//                     },
//                 });

//                 console.log({
//                     id: res.id,
//                     category: each.category,
//                 })
//             } catch (error) {
//                 console.error(`Failed to insert category ${each.category}:`, error);
//             }
//         }
//         return ids;
//     } catch (error) {
//         console.error("Failed to read categories file:", error);
//         return null;
//     }
// }
