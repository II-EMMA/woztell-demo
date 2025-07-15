"use client";
import BlueText from "@/components/blueText";
import Trust from "@/sections/trust/Trust";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Doodle - customer support chatbot",
    description:
      "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
  },
  {
    id: 2,
    title: "Dash - AI calling system",
    description:
      "We developed Dash, an AI-powered calling system that enhances customer communication and support with automated features.",
  },
  {
    id: 3,
    title: "Atomic - AI driven outreach",
    description:
      "Atomic is our AI-driven outreach tool that maximizes engagement and conversions through intelligent automation.",
  },
  {
    id: 4,
    title: "Doodle - customer support chatbot",
    description:
      "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
  },
  {
    id: 5,
    title: "Dash - AI calling system",
    description:
      "We developed Dash, an AI-powered calling system that enhances customer communication and support with automated features.",
  },
  {
    id: 6,
    title: "Atomic - AI driven outreach",
    description:
      "Atomic is our AI-driven outreach tool that maximizes engagement and conversions through intelligent automation.",
  },
];

export default function page() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="flex flex-col max-w-[1500px] mx-auto">
      <div className="flex md:flex-row md:justify-between flex-col mt-24 mx-14 md:gap-x-32 gap-x-0 md:gap-y-0 gap-y-14">
        <div className="flex flex-col gap-y-6 md:text-start text-center items-center md:items-stretch">
          <p className="text-4xl font-normal font-primary-gray font-inter leading-11 tracking-tight max-w-[480px]">
            Your company needs
            <span className="font-bold"> conversational solutions</span>
          </p>
          <p className="text-xl leading-8 font-mont font-primary-gray max-w-[545px]">
            Our team of experts is ready to design, develop, and launch your
            custom conversational solution.
          </p>
          <BlueText>Become a partner</BlueText>
          <div className="mt-7 flex flex-col gap-y-0.5 items-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
              }
            >
              <img
                className="max-w-[261px] max-h-[30px]"
                src="https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
                alt="hero section image"
              />
            </Link>
            <p className="font-inter text-[12px] font-light font-primary-gray text-center">
              Meta Business Partner and WhatsApp Business Solution Provider
            </p>
          </div>
        </div>
        <form action="" className="flex-grow">
          <div className="w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mb-10 w-full border border-gray-300 shadow p-3 rounded"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Corporative email"
              className="mb-10 w-full border border-gray-300 shadow p-3 rounded"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Web"
              className="mb-10 w-full border border-gray-300 shadow p-3 rounded"
            />
            <input
              type="tel"
              id="name"
              name="name"
              placeholder="WhatsApp"
              className="mb-10 w-full border border-gray-300 shadow p-3 rounded"
            />
            <div className="relative">
              <textarea
                id="id-l03"
                type="text"
                name="id-l03"
                rows="3"
                placeholder="Write your message"
                className="peer relative w-full rounded border border-slate-200 p-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              ></textarea>
              <label
                htmlFor="id-l03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {" "}
                Write your message{" "}
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="my-24">
        <Trust />
      </div>

      <div className="flex flex-col gap-y-10 justify-center items-center my-24">
        <p className="lg:self-start self-center lg:ml-14 font-inter text-3xl font-primary-gray mb-5">
          Frequently Asked <span className="font-bold">Questions</span>
        </p>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer mb-8 group"
          >
            <h3
              className={`text-center text-3xl font-semibold group-hover:text-purple-500 transition-colors duration-300 ${
                selectedProject.id === project.id ? "text-purple-300" : ""
              }`}
            >
              {project.title} ↗
            </h3>
            {selectedProject.id === project.id && (
              <div className="border-b-2 border-purple-300 my-4"></div>
            )}
            {selectedProject.id === project.id && (
              <p
                className={`text-gray-400 transition-all duration-500 ease-in-out md:mx-4 mx-14 lg:text-start text-center ${
                  selectedProject.id === project.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                {project.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="self-center flex lg:flex-row flex-col lg:gap-x-2 gap-y-3 lg:gap-y-0 gap-x-0 items-center py-8 full-bleed-sub-secondary-purple bg-sub-secondary-purple">
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
    </section>
  );
}
