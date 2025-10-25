import { useMemo } from "react";
import { STEPS } from "../juego/constants/steps";
import type { Step } from "../juego/constants/steps";
import PlayModule from "../juego/modules/PlayModules";
import SelectionModule from "../juego/modules/SelectionModule";
import GameOverModule from "../juego/modules/GameOverModule";
import useGameStore from "../juego/store/GameStore";
import Score from "../juego/components/Score";

const renderModule = (step: Step) => {
  switch (step) {
    case STEPS.SELECTION:
      return <SelectionModule />;
    case STEPS.PLAY:
      return <PlayModule />;
    case STEPS.GAMEOVER:
      return <GameOverModule />;
    default:
      return null;
  }
};

export default function Juego() {
  const step = useGameStore((state) => state.step);
  const module = useMemo(() => renderModule(step), [step]);

  return (
    <div className="min-h-screen pt-32 sm:pt-36 md:pt-40 pb-16 px-4 sm:px-6 md:px-8 scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40">
      <div className="max-w-screen-lg mx-auto mt-8 mb-12 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-pink-200/40 shadow-xl p-4 sm:p-6 md:p-8">
        {/* Título */}
        <h1 className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl text-fuchsia-600 font-mono mx-auto w-fit px-4 py-2 rounded-2xl bg-gradient-to-r from-fuchsia-100/70 via-fuchsia-50/60 to-pink-100/70 backdrop-blur-sm border border-fuchsia-200/60 shadow-sm">
          Piedra, Papel o Tijera
        </h1>

        {/* Puntuación */}
        <div className="mt-4">
          <Score />
        </div>

        {/* Instrucciones (solo al inicio) */}
        {step === STEPS.SELECTION && (
          <p className="mx-auto max-w-xl text-center text-violet-800/90 mt-6 mb-8 md:mt-8 md:mb-10 px-4 py-3 bg-fuchsia-50/60 backdrop-blur rounded-xl border border-fuchsia-200/60 shadow-sm font-mono">
            Haz clic en un círculo para elegir Piedra, Papel o Tijera.
            <br />
            ¡Intenta vencer a la CPU con tu mejor jugada! ✨
          </p>
        )}

        {/* Módulo actual */}
        {module}
      </div>
    </div>
  );
}
