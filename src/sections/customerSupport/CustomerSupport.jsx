import BlueText from "@/components/blueText";
import HeadingText from "@/components/heading-text";
import ImageText from "@/components/ImageText";
import SubHeadingText from "@/components/subHeadingText";
import Link from "next/link";

const textPhrases = [
  "Your customers want 24/7 support, and if it’s on their preferred channels, even better. But not only that, but they also want an exceptional experience…",
  "What if you could give them what they ask for automatically or, in more complex cases, provide personalized assistance?",
  "Delight your customers with a 5-star customer support service that you can also automate, saving up to 80% of your costs.",
];

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-Integracion-con-IAs-ChatGPT.png",
    alt: "Ai ChatGPT",
    text: "Integration with ChatGPT AI",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-chatbot.png",
    alt: "decision tree chatbots",
    text: "Chatbots for customer support",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-equipo.png",
    alt: "your team can respond",
    text: "The entire team responds on the same WhatsApp platform",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-herramientas.png",
    alt: "herramientas",
    text: "Integration with support tools",
  },
];

export default function CustomerSupport() {
  return (
    <section className="flex flex-col max-w-[1500px] mx-auto lg:mt-40 mt-32 lg:gap-y-10 gap-y-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse justify-between items-center mx-24 lg:gap-y-0 gap-y-20">
        <div className="flex flex-col gap-y-5">
          <HeadingText className="mb-2 text-center lg:text-start">
            Customer Support
          </HeadingText>
          <SubHeadingText textArray={textPhrases} className="max-w-[500px]" />
          <BlueText>Save hundreds of hours</BlueText>
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/whatsapp-confirm-appointment.png"
          }
        >
          <img
            className="lg:max-w-[610px] lg:max-h-[600px] lg:ml-4 max-w-[270px] max-h-[216px]"
            src="https://woztell.com/wp-content/uploads/2025/04/whatsapp-confirm-appointment.png"
            alt="chatbot image"
          />
        </Link>
      </div>

      <div className="flex lg:flex-row lg:justify-between lg:items-center flex-col gap-y-14 lg:gap-y-0 md:mx-20 lg:mx-48 mx-14 gap-x-2.5">
        <ImageText infoArray={cardsInfo} className="max-w-[270px]" />
      </div>
    </section>
  );
}
