import useScoreStore from "../store/ScoreStore"


const Score = () => {
    const [score, maxScore] = useScoreStore(state => [state.score, state.maxScore]);

    return (
        <div className="w-full max-w-xl mx-auto flex flex-col items-center md:flex-row md:justify-between gap-2 md:gap-4 pt-6 pb-4 md:pt-8 md:pb-6 text-center md:text-left divide-y divide-fuchsia-200/60 md:divide-y-0 md:divide-x">
            <h3 className="px-2 text-sm md:text-base font-medium tracking-wide text-violet-700">Puntaje: {score}</h3>
            <h3 className="px-2 text-sm md:text-base font-medium tracking-wide text-violet-700">Puntaje mas alto: {maxScore}</h3>
        </div>
    )
}

export default Score;
