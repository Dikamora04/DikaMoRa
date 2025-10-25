import type { Answer } from "../types/answer";


interface ChoiceProps {
    choice: Answer | null;
    onClick?: (answer: Answer) => void;
}

export const Choice = ({ choice, onClick }: ChoiceProps) => {
    const onClickChoice = () => (onClick && choice) && onClick(choice);

    return  (
        <div className="rounded-full text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <button className="cursor-pointer bg-violet-300 hover:bg-fuchsia-400 ring-4 ring-fuchsia-200 rounded-full shadow-xl hover:shadow-2xl transition-transform transition-shadow h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-48 lg:w-48 text-violet-900 hover:scale-105" onClick={onClickChoice}>
                {choice ?? "?"}
            </button>
        </div>
    )
};

