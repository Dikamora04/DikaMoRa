import { useEffect, useState } from "react";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import useGameStore from "../store/GameStore"
import { Result } from "../components/Result";
import Button from "../components/Button";


const PlayModule = () => {
    const choice = useGameStore(state => state.choice);
    const {status, cpuAnswer, generateCpuChoice} = usePlayGame();
    const [countdown, setCountdown] = useState(3);

    useEffect(()=> {
        if(choice) {
            generateCpuChoice(choice);
        }
    }, [choice, generateCpuChoice])

    useEffect(() => {
        if(countdown > 0) {
            setTimeout(() => setCountdown(countdown -1), 1000);
            }
    }, [countdown])
    
    if (countdown > 0) {
        return (
            <div className="flex items-center justify-center py-6">
              <span className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/30 ring-2 ring-pink-200/60 text-4xl text-fuchsia-700 backdrop-blur-md shadow-md">
                {countdown}
              </span>
            </div>
        )
    }

    return(
        <>
        <Result status={status}/>
    <div className="mt-3 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-pink-200/40 p-4 md:p-6 shadow-lg">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
          <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl text-fuchsia-600/90 text-center pb-4">Jugador</span>
              <Choice choice={choice}/>
          </div>
          <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl text-rose-500/90 text-center pb-4">CPU</span>
              <Choice choice={cpuAnswer}/>
          </div>
      </div>
    </div>
    <div className="mt-6"><Button status={status} /></div>
    </>
    )
}

export default PlayModule;

