import BlueButton from "@/components/blueBtn";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1500px] mx-auto pt-14 px-20 mt-20">
      <div className="flex md:flex-row flex-col justify-between gap-x-20 items-center image-background-pseudo-element bg-secondary-purple full-bleed-secondary-purple py-16 -my-60 md:my-0 ">
        <div className="flex flex-col items-center justify-center gap-y-5">
          <h2 className="text-center font-mont font-bold font-primary-gray text-3xl leading-9">
            Make your conversational project a reality with WOZTELL
          </h2>
          <p className="text-center text-xl font-inter leading-7 font-secondary-gray max-w-[770px]">
            Our team of experts is ready to develop and{" "}
            <span className="font-bold">
              implement conversational solutions customized
            </span>{" "}
            to your company’s needs.
          </p>
          <BlueButton className="py-1 px-3.5 font-semibold font-mont purple-hovering bg-primary-blue text-white">
            Talk with us
          </BlueButton>
        </div>
        <div className="md:visible invisible">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://woztell.com/wp-content/uploads/2025/04/woztell-projects.png"
            }
          >
            <img
              className="max-w-[225px] max-h-[225px]"
              src="https://woztell.com/wp-content/uploads/2025/04/woztell-projects.png"
              alt="Contact section image"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-8 items-center text-center py-9 bg-secondary-purple full-bleed-secondary-purple">
        <h4 className="text-2xl font-inter leading-9 font-primary-gray max-w-[1220px]">
          At <span className="font-bold">WOZTELL</span>, we believe and
          implement{" "}
          <span className="font-bold">
            Corporate Social Responsibility actions
          </span>
          , because companies play a key role in developing a better world.
        </h4>
        <h6 className="text-center text-base font-mont leading-6 font-secondary-gray font-bold">
          Click bellow to know more about our CSR projects
        </h6>
        <div className="flex md:flex-row flex-col md:gap-x-3 gap-y-10 md:gap-y-0 items-center -mt-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://woztell.com/wp-content/uploads/2025/04/cbcuv.png"}
          >
            <img
              className="max-w-[225px] max-h-[35px]"
              src="https://woztell.com/wp-content/uploads/2025/04/cbcuv.png"
              alt="Contact section image"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://woztell.com/wp-content/uploads/2025/04/wa-against-1.png"
            }
          >
            <img
              className="max-w-[165px] max-h-[85px]"
              src="https://woztell.com/wp-content/uploads/2025/04/wa-against-1.png"
              alt="Contact section image"
            />
          </Link>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-x-2 gap-y-3 lg:gap-y-0 gap-x-0 items-center justify-between py-8 full-bleed-sub-secondary-purple bg-sub-secondary-purple">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/IVACEUE-valencia.png"
          }
        >
          <img
            className="max-w-[557px] max-h-[64px] px-20 md:px-0"
            src="https://woztell.com/wp-content/uploads/2025/04/IVACEUE-valencia.png"
            alt="Contact section image"
          />
        </Link>
        <p className="text-[10px] font-inter leading-3 font-secondary-gray">
          ORGANISM: IVACE
          <br />
          FILE NUMBER: IMINOD/2021/53
          <br />
          PROGRAM: SME INNOVATION PROJECTS (INNOVA-CV)
          <br />
          ACTION: SME INNOVATION. INNOVATION IN TEICS (INNOVATeiC-CV) 2021
          <br />
          PROJECT: NEW ADVANCED MULTICHANNEL UNIFIED MESSAGING SOLUTION FOR{" "}
          <br />
          COMMUNICATION BETWEEN COMPANY AND CLIENTS.
        </p>
      </div>
    </div>
  );
}
