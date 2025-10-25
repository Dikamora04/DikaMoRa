import { motion } from "framer-motion";
import type { Answer } from "../types/answer";

interface ChoiceProps {
  choice: Answer | null;
  onClick?: (choice: Answer) => void;
}

export const Choice = ({ choice, onClick }: ChoiceProps) => {
  const handleClick = () => {
    if (onClick && choice) onClick(choice);
  };

  return (
    <motion.button
      whileHover={{ scale: onClick ? 1.08 : 1 }}
      whileTap={{ scale: onClick ? 0.95 : 1 }}
      onClick={handleClick}
      disabled={!onClick}
      className={`
        flex items-center justify-center 
        w-24 h-24 md:w-28 md:h-28
        rounded-full 
        bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400
        shadow-[0_4px_12px_rgba(255,182,193,0.5)]
        hover:shadow-[0_8px_20px_rgba(255,182,193,0.8)]
        transition-all duration-300 ease-out
        border-2 border-pink-100
        select-none
        ${onClick ? 'cursor-pointer' : 'cursor-default opacity-90'}
      `}
      aria-label={`Elegir ${choice?.symbol ?? '?'}`}
    >
      <motion.span
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: onClick ? Infinity : 0,
          repeatType: "mirror",
          duration: 2.2,
          ease: "easeInOut",
        }}
        className="text-5xl md:text-6xl drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]"
      >
        {choice?.symbol ?? "?"}
      </motion.span>
    </motion.button>
  );
};
