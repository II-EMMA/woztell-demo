import TestimonialsImages from "@/components/TestimonialsImages";
import AnimationSlider from "./AnimationSlider";

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-btn.png",
    alt: "Testimonial 1",
    text: "Interactive Buttons",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/objet-whatsapp-list.png",
    alt: "Testimonial 2",
    text: "List",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-product.png",
    alt: "Testimonial 3",
    text: "Products",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/objets-whatsapp-flows-form.png",
    alt: "Testimonial 4",
    text: "WhatsApp Flows",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-carousel.png",
    alt: "Testimonial 5",
    text: "Carousel",
  },
];

const AnimationCardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-btn.png",
    alt: "Testimonial 1",
    text: "Interactive Buttons",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/objet-whatsapp-list.png",
    alt: "Testimonial 2",
    text: "List",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-product.png",
    alt: "Testimonial 3",
    text: "Products",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/objets-whatsapp-flows-form.png",
    alt: "Testimonial 4",
    text: "WhatsApp Flows",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-carousel.png",
    alt: "Testimonial 5",
    text: "Carousel",
  },
];

export default function CloudApi() {
  return (
    <section className="flex flex-col max-w-[1500px] mx-auto mt-40 gap-y-10 px-14 2xl:px-0">
      <div className="w-full h-px bg-secondary-gray" />
      <h2 className="text-[38px] font-mont leading-14 font-primary-gray max-w-[1300px] text-center mx-auto mt-4">
        With WOZTELL, you will have access to all its{" "}
        <span className="font-extrabold">
          exclusive WhatsApp Cloud API features
        </span>
      </h2>
      <div className="flex flex-row 2xl:justify-between justify-center items-center gap-x-2.5 py-10 flex-wrap 2xl:mx-0 mx-auto">
        <TestimonialsImages infoArray={cardsInfo} />
      </div>
      {/* <div className="flex visible 2xl:invisible flex-row justify-between items-center gap-x-2.5 -mt-[720px] 2xl:mt-0 ">
        <AnimationSlider infoArray={AnimationCardsInfo} />
      </div> */}
      <div className="w-full h-px bg-secondary-gray" />
    </section>
  );
}
