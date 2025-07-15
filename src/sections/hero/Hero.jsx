import BlueButton from "@/components/blueBtn";
import TypingTextAnimation from "@/components/textAnimation";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex lg:justify-between lg:flex-row flex-col-reverse lg:mx-auto mx-4 items-center  max-w-[1500px] py-16 px-4">
      <div className="mt-5 flex flex-col gap-y-4">
        <h1 className="text-5xl font-mont font-bold font-primary-gray">
          WhatsApp solutions for
        </h1>
        <TypingTextAnimation />
        <p className="text-3xl font-normal font-primary-gray font-mont leading-[1.5em] tracking-tight max-w-[550px]">
          With <span className="font-bold">WOZTELL</span>, turn your WhatsApp{" "}
          <span className="font-bold">conversations into sales</span> and
          improve your customers’ experience.
        </p>
        <div className="lg:self-stretch self-center flex flex-row justify-between lg:gap-x-0 gap-x-5 items-center mt-8 lg:mr-36">
          <BlueButton className="py-1 px-3.5 font-semibold font-mont purple-hovering bg-primary-blue text-white">
            talk to us
          </BlueButton>
          <BlueButton className="py-1 px-3.5 font-semibold font-mont bg-white border-color-primary-blue font-primary-blue">
            Free trial
          </BlueButton>
        </div>
        <div className="mt-7 self-center flex flex-col gap-y-0.5">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
            }
          >
            <img
              src="https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
              alt="hero section image"
            />
          </Link>
          <p className="font-inter text-[12px] font-light font-primary-gray text-center">
            Meta Business Partner and WhatsApp Business Solution Provider
          </p>
        </div>
      </div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://woztell.com/wp-content/uploads/2025/06/Woztell-Conversational-Solutions-english.png"
        }
      >
        <img
          src="https://woztell.com/wp-content/uploads/2025/06/Woztell-Conversational-Solutions-english.png"
          alt="hero section image"
        />
      </Link>
    </section>
  );
}
