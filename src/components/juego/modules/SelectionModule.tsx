import { Choice } from "../components/Choice";
import { ANSWERS } from "../constants/answer";
import { STEPS } from "../constants/steps";
import useGameStore from "../store/GameStore";
import type { Answer } from "../types/answer";

const SelectionModule = () => {
  const [setChoice, setStep] = useGameStore((state) => [
    state.setChoice,
    state.setStep,
  ]);

  const onClickChoice = (choice: Answer) => {
    setChoice(choice);
    setStep(STEPS.PLAY);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-2 md:mt-6 lg:mt-8">
      {ANSWERS.map((answer) => (
        <Choice key={answer.id} choice={answer} onClick={onClickChoice} />
      ))}
    </div>
  );
};

export default SelectionModule;
