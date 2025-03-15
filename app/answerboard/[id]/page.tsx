import {db} from '@/lib/db';
import GamePart from '@/components/GamePart';

export default async function QuestionPage({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id;
    const question = await db.question.findUnique({
        where: {id: id},
    });

    if (!question) {
        return <div>Question not found</div>;
    }

    const svgData = (
        <svg
            width='32'
            height='10'
            viewBox='0 0 88 20'
            transform='translate(0 25)'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M0.753246 3.37246C6.58807 2.33951 85.7621 13.0666 84.6366 0.443188'
                stroke='#3B82F6'
                strokeWidth='5'
            />
        </svg>
    );

    return (
        <GamePart question={question} svgData={svgData}/>
    );
}
