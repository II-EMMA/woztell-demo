import BlueText from "@/components/blueText";
import HeadingText from "@/components/heading-text";
import ImageText from "@/components/ImageText";
import SubHeadingText from "@/components/subHeadingText";
import Link from "next/link";

const textPhrases = [
  "Increase your e-commerce sales with WhatsApp",
  "Add the most effective channel to your online sales strategy. Empower your marketing, customer service, and sales with WOZTELL.",
  "Receive orders and payments through WhatsApp",
  "Whether you have an eCommerce or not, if you want to sell products through channels like WhatsApp, we know how to make it happen.",
];

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Shop-1.png",
    alt: "Whats App Shop",
    text: "Integrate your eCommerce with WhatsApp",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Pay.png",
    alt: "Whats App Pay",
    text: "Chatbots for customer support",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Automatizacion.png",
    alt: "Whats App Automatizacion",
    text: "Marketing Automation via WhatsApp",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Marketing.png",
    alt: "Whats App Marketing",
    text: "Conversational campaigns with promotions",
  },
];

export default function ConversationalCommerce() {
  return (
    <section className="flex flex-col max-w-[1500px] mx-auto lg:mt-40 mt-32 lg:gap-y-10 gap-y-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse justify-between items-center mx-24 lg:gap-y-0 gap-y-20">
        <div className="flex flex-col gap-y-5">
          <HeadingText className="mb-2 text-center lg:text-start">
            Conversational Commerce
          </HeadingText>
          <SubHeadingText textArray={textPhrases} className="max-w-[500px]" />
          <BlueText>Sell more on your e-commerce!</BlueText>
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/whatsapp-ecommerce-en.png"
          }
        >
          <img
            className="lg:max-w-[610px] lg:max-h-[600px] lg:ml-4 max-w-[270px] max-h-[270px]"
            src="https://woztell.com/wp-content/uploads/2025/04/whatsapp-ecommerce-en.png"
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
