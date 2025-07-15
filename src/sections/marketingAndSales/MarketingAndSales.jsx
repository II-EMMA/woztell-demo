import BlueText from "@/components/blueText";
import HeadingText from "@/components/heading-text";
import ImageText from "@/components/ImageText";
import SubHeadingText from "@/components/subHeadingText";
import Link from "next/link";

const textPhrases = [
  "Boost your sales by implementing conversational strategies on WhatsApp.",
  "At WOZTELL, we have repeatedly witnessed how our clients have achieved incredible results by communicating with their customers on the channels they prefer.",
  "We have extensive experience in various industries and have successfully implemented dozens of marketing and sales strategies using our solutions.",
];

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/woztell-icon-muti-agent.png",
    alt: "Muti agent",
    text: "Multi-agent and multi-channel live chat",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/woztell-icon-chatbot-lead.png",
    alt: "chatbot lead",
    text: "Lead generation and qualification chatbots",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/woztell-icon-crm-integration.png",
    alt: "crm integration",
    text: "Integration with CRM",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/woztell-icon-push-messages.png",
    alt: "push messages",
    text: "Broadcast Promotional Messages",
  },
];

export default function MarketingAndSales() {
  return (
    <section className="flex flex-col max-w-[1500px] mx-auto mt-[60px] lg:gap-y-10 gap-y-20">
      <h2 className="font-primary-gray font-medium self-center font-mont text-[38px] lg:text-start text-center ">
        <span className="font-extrabold">Make the most</span> of WhatsApp
      </h2>

      <div className="flex lg:flex-row flex-col-reverse lg:justify-between lg:gap-y-0 gap-y-20 mt-7 lg:mt-0 items-center lg:mx-8 mx-14">
        <div className="flex flex-col gap-y-5">
          <HeadingText className="mb-2 text-center lg:text-start">
            Marketing and Sales
          </HeadingText>
          <SubHeadingText textArray={textPhrases} className="max-w-[500px]" />
          <BlueText>
            Are you ready to take your sales to the next level?
          </BlueText>
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/05/chatbots-whatsapp-sales-989x1024.jpg"
          }
        >
          <img
            className="lg:max-w-[610px] lg:max-h-[600px] max-w-[270px] max-h-[280px]"
            src="https://woztell.com/wp-content/uploads/2025/05/chatbots-whatsapp-sales-989x1024.jpg"
            alt="chatbot image"
          />
        </Link>
      </div>

      <div className="flex lg:flex-row lg:justify-between lg:items-center flex-col gap-y-14 lg:gap-y-0 md:mx-20 lg:mx-48 mx-14 gap-x-2.5 ">
        <ImageText infoArray={cardsInfo} className="max-w-[270px]" />
      </div>
    </section>
  );
}
