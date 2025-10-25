import { STATUS } from "../constants/status";
import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import useScoreStore from "../store/ScoreStore";
import type { Status } from "../types/status";


interface ButtonProps {
    status: Status | null;
}

const Button: React.FC<ButtonProps> = ({ status }) => {
    const setStep = useGameStore(state => state.setStep);
    const increaseScore = useScoreStore(state => state.increaseScore);

    const onClick = () => {
        switch(status) {
            case STATUS.WIN:
                increaseScore();
                setStep(STEPS.SELECTION);
                break;
            case STATUS.LOSE:
                setStep(STEPS.GAMEOVER);
                break;
            case STATUS.DRAW:
                setStep(STEPS.SELECTION);
                break;
            default: 
            break;
        }
    }

    return (
        <button
          className="bg-gradient-to-r from-pink-400 to-sky-400 hover:from-pink-500 hover:to-sky-500 rounded-full w-44 py-3 text-lg m-auto text-white block shadow-lg hover:shadow-xl transition-all"
          onClick={onClick}
        >
          Continuar
        </button>
    )
}

export default Button;
