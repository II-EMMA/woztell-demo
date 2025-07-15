"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-mcdonalds.png",
    alt: "McDonald's",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-samsung.png",
    alt: "Samsung",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-playstation.png",
    alt: "PlayStation",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-garmin.png",
    alt: "GARMIN",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-lexus.png",
    alt: "LEXUS",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-samsonite.png",
    alt: "Samsonite",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-toyota.png",
    alt: "TOYOTA",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-mastel.png",
    alt: "MATTEL",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-mcdonalds.png",
    alt: "McDonald's",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-samsung.png",
    alt: "Samsung",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-playstation.png",
    alt: "PlayStation",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-garmin.png",
    alt: "GARMIN",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-lexus.png",
    alt: "LEXUS",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-samsonite.png",
    alt: "Samsonite",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-toyota.png",
    alt: "TOYOTA",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-partners-mastel.png",
    alt: "MATTEL",
  },
];

export default function Trust() {
  return (
    <section className="py-8 border-b-primary-gray border-t-primary-gray flex items-center justify-between mx-auto px-5 max-w-[1500px] flex-col gap-y-12">
      <h5 className="font-primary-gray font-mont text-xl font-extrabold ">
        Clients who trust us
      </h5>

      <div className="bg-purple-200/10 opacity-80">
        <div className="container mx-auto">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
