import {db} from '@/lib/db';
import QuestionList from '@/components/QuestionList';

export default async function QuestionPage({params}: {params: Promise<{id: string}>}) {
    const id = (await params).id;
    const questions = await db.questions.findUnique({
        where: {id: id},
        include: {questions: true},
    });
    if (!questions) {
        return <div>Questions not found</div>;
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
    const winSvg = (
        <svg
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            className='w-screen h-screen absolute'>
            <g>
                <rect x="40" y="-20" width="1" height="4" fill="blue">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="0s" repeatCount="indefinite"/>
                </rect>
                <rect x="15" y="-20" width="1" height="4" fill="yellow">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="0.2s" repeatCount="indefinite"/>
                </rect>
                <rect x="50" y="-20" width="1" height="4" fill="red">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="0.4s" repeatCount="indefinite"/>
                </rect>
                <rect x="25" y="-20" width="1" height="4" fill="green">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="0.6s" repeatCount="indefinite"/>
                </rect>
                <rect x="60" y="-20" width="1" height="4" fill="yellow">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="0.8s" repeatCount="indefinite"/>
                </rect>
                <rect x="30" y="-20" width="1" height="4" fill="green">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="1s" repeatCount="indefinite"/>
                </rect>
                <rect x="80" y="-20" width="1" height="4" fill="blue">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="1.2s" repeatCount="indefinite"/>
                </rect>
                <rect x="20" y="-20" width="1" height="4" fill="yellow">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="1.4s" repeatCount="indefinite"/>
                </rect>
                <rect x="10" y="-20" width="1" height="4" fill="red">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="1.6s" repeatCount="indefinite"/>
                </rect>
                <rect x="70" y="-20" width="1" height="4" fill="green">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="1.8s" repeatCount="indefinite"/>
                </rect>
                <rect x="35" y="-20" width="1" height="4" fill="blue">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="2s" repeatCount="indefinite"/>
                </rect>
                <rect x="90" y="-20" width="1" height="4" fill="red">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="2.2s" repeatCount="indefinite"/>
                </rect>
                <rect x="55" y="-20" width="1" height="4" fill="yellow">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="2.4s" repeatCount="indefinite"/>
                </rect>
                <rect x="45" y="-20" width="1" height="4" fill="red">
                    <animate attributeName="y" from="-20" to="100" dur="3s" begin="2.6s" repeatCount="indefinite"/>
                </rect>
            </g>
        </svg>
    );

    return (
        <QuestionList
            questions={questions}
            svgData={svgData}
            winSvg={winSvg}
        />
    );
}
