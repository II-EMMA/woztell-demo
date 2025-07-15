import BlueButton from "@/components/blueBtn";
import HeadingText from "@/components/heading-text";
import ImageText from "@/components/ImageText";
import SubHeadingText from "@/components/subHeadingText";
import Link from "next/link";

const textPhrases = [
  "Combine the efficiency of WhatsApp API with the intelligence of ChatGPT to increase sales and reduce costs.",
  "With WOZTELL, you can connect your ChatGPT GPT to WhatsApp, Instagram, Facebook Messenger, and Webchat to address customer or lead inquiries. Not only based on general information and the model’s configuration instructions. You can unlock a world of possibilities for your business.",
];

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Marketing.png",
    alt: "Whats App Marketing",
    text: "WhatsApp + ChatGPT for Marketing and Sales",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-chatbot.png",
    alt: "Desicion tree chatbots",
    text: "WhatsApp + ChatGPT for Customer Support",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Shop-1.png",
    alt: "Whats App Shop",
    text: "WhatsApp + ChatGPT for eCommerce",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-equipo.png",
    alt: "your team can respond",
    text: "WhatsApp + ChatGPT for Internal Communication",
  },
];

export default function ChatGPTAndWhatsApp() {
  return (
    <section className="flex flex-col max-w-[1500px] mx-auto lg:mt-40 mt-32 lg:gap-y-10 gap-y-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse justify-between items-center mx-24 lg:gap-y-0 gap-y-20">
        <div className="flex flex-col gap-y-5">
          <HeadingText className="max-w-[515px] mb-2 leading-11 text-center lg:text-start">
            Create a WhatsApp and ChatGPT-connected chatbot that works 24/7
          </HeadingText>
          <h3 className="font-mont leading-7 font-bold font-primary-gray">
            Intelligent Conversations with WhatsApp and ChatGPT
          </h3>
          <SubHeadingText textArray={textPhrases} className="max-w-[500px]" />
          <BlueButton className="lg:self-start self-center py-1 px-3.5 font-semibold font-mont purple-hovering bg-primary-blue text-white">
            Learn more
          </BlueButton>
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/Assistent-GPT-hero.jpg"
          }
        >
          <img
            className="lg:max-w-[610px] lg:max-h-[600px] lg:ml-4 max-w-[270px] max-h-[315px]"
            src="https://woztell.com/wp-content/uploads/2025/04/Assistent-GPT-hero.jpg"
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
