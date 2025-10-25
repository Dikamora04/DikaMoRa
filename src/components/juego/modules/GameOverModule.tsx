import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore"
import useScoreStore from "../store/ScoreStore";


const GameOverModule = () => {
    const setStep = useGameStore(state => state.setStep);
    const resetScore = useScoreStore(state => state.resetScore);

    const onClickPlayAgain = () => {
        setStep(STEPS.SELECTION);
        resetScore();
    }

    return (
        <button
          className="bg-gradient-to-r from-rose-400 to-fuchsia-400 hover:from-rose-500 hover:to-fuchsia-500 rounded-full w-48 py-3 text-lg m-auto text-white block shadow-lg hover:shadow-xl transition-all"
          onClick={onClickPlayAgain}
        >
          Jugar de nuevo
        </button>
    )
}
export default GameOverModule;
