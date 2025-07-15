"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimationSlider({ className, infoArray }) {
  return (
    <div className="bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {infoArray.map((card, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                <Image src={card.src} alt={card.alt} width={610} height={600} />
                <p
                  className={`font-mont text-center text-sm leading-6 font-primary-gray font-bold ${className}`}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
