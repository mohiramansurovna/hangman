export default function Hangman ({ mistake, isWinner }: { mistake: number, isWinner: boolean }){
    return (
        <section className='w-1/2 h-screen flex flex-col justify-around items-center'>
        <svg width="200" height="250" className="mb-4">
            {/* Hang Line */}
            {!isWinner && (
                <>
                    <line x1="20" y1="230" x2="100" y2="230" stroke="black" strokeWidth="4" />
                    <line x1="60" y1="230" x2="60" y2="20" stroke="black" strokeWidth="4" />
                    <line x1="60" y1="20" x2="140" y2="20" stroke="black" strokeWidth="4" />
                    <line x1="140" y1="20" x2="140" y2="50" stroke="black" strokeWidth="4" />
                </>
            )}

            {/* Crown (Shown when player wins) */}
            {isWinner && (
                <>
                    <polygon points="120,80 120,52 140,70" fill="gold" stroke="orange" strokeWidth="2" />
                    <circle cx="120" cy="52" r="3" fill="green" stroke="darkgreen" strokeWidth="1" />
                    <polygon points="140,70 160,52 160,80" fill="gold" stroke="orange" strokeWidth="2" />
                    <circle cx="160" cy="52" r="3" fill="blue" stroke="darkblue" strokeWidth="1" />
                    <polygon points="130,70 140,45 150,70" fill="gold" stroke="orange" strokeWidth="2" />
                    <circle cx="140" cy="45" r="3" fill="red" stroke="darkred" strokeWidth="1" />
                </>
            )}
            
            {/* Hangman */}
            {isWinner ? (
                <>
                    <circle cx="140" cy="90" r="20" stroke="black" strokeWidth="4" fill="none" />
                    <line x1="140" y1="110" x2="140" y2="170" stroke="black" strokeWidth="4" />
                    <line x1="140" y1="130" x2="120" y2="150" stroke="black" strokeWidth="4" />
                    <line x1="140" y1="130" x2="160" y2="150" stroke="black" strokeWidth="4" />
                    <line x1="140" y1="170" x2="120" y2="200" stroke="black" strokeWidth="4" />
                    <line x1="140" y1="170" x2="160" y2="200" stroke="black" strokeWidth="4" />
                </>
            ) : (
                <>
                    {mistake > 0 && <circle cx="140" cy="70" r="20" stroke="black" strokeWidth="4" fill="none" />}
                    {mistake > 1 && <line x1="140" y1="90" x2="140" y2="150" stroke="black" strokeWidth="4" />}
                    {mistake > 2 && <line x1="140" y1="110" x2="120" y2="130" stroke="black" strokeWidth="4" />}
                    {mistake > 3 && <line x1="140" y1="110" x2="160" y2="130" stroke="black" strokeWidth="4" />}
                    {mistake > 4 && <line x1="140" y1="150" x2="120" y2="180" stroke="black" strokeWidth="4" />}
                    {mistake > 5 && <line x1="140" y1="150" x2="160" y2="180" stroke="black" strokeWidth="4" />}
                </>
            )}
        </svg>
        </section>
    );
};