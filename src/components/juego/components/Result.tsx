import { STATUS } from "../constants/status";
import type { Status } from "../types/status";


interface ResultProps {
    status: Status | null;
}

export const Result: React.FC<ResultProps> = ({ status }) => {
    switch(status) {
        case STATUS.WIN:
            return <span className="text-3xl text-center text-fuchsia-600 block">Ganaste!</span>
        case STATUS.LOSE:
            return <span className="text-3xl text-center block text-rose-600">Perdiste!</span>
        case STATUS.DRAW:
            return <span className="text-3xl text-center block text-violet-600">Empate!</span>
        default:
            return null;
    }
}
