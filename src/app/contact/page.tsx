import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Shatadal Samui",
  description:
    "As a 4th-year Computer Science student, I am a Full-Stack Developer with a comprehensive skill set in modern web technologies. I am proficient in building adaptable and secure applications by leveraging React.js and TypeScript for the frontend, and Node.js with PostgreSQL for the backend. My experience extends to cloud infrastructure, where I use AWS for scalable deployments and Docker for container management and troubleshooting. Eager to apply my collaborative and problem-solving abilities to new challenges.",
};
export default function Projects() {
  return (
    <Container>
  <span className="text-4xl mb-4">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me directly via email or connect with me on social platforms:
      </Paragraph>
      <div className="flex flex-col gap-4 text-lg">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shatadalsamuimain@gmail.com" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-100 shadow-md border border-neutral-100 dark:border-neutral-200 hover:scale-105 transition-transform group" target="_blank" rel="noopener noreferrer">
          <MdEmail className="text-2xl text-rose-500" />
          <span className="font-medium text-gray-800 dark:text-black">shatadalsamuimain@gmail.com</span>
        </a>
  <a href="https://www.linkedin.com/in/shatadalsamui/" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-100 shadow-md border border-neutral-100 dark:border-neutral-200 hover:scale-105 transition-transform group" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-[#0A66C2]" />
          <span className="font-medium text-gray-800 dark:text-black">LinkedIn</span>
        </a>
  <a href="https://github.com/shatadalsamui" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-100 shadow-md border border-neutral-100 dark:border-neutral-200 hover:scale-105 transition-transform group" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-black" />
          <span className="font-medium text-gray-800 dark:text-black">GitHub</span>
        </a>
  <a href="https://x.com/shatadal_samui" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-100 shadow-md border border-neutral-100 dark:border-neutral-200 hover:scale-105 transition-transform group" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-2xl text-black" />
          <span className="font-medium text-gray-800 dark:text-black">X (Twitter)</span>
        </a>
  <a href="https://www.instagram.com/shatadal.samui/" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-100 shadow-md border border-neutral-100 dark:border-neutral-200 hover:scale-105 transition-transform group" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-pink-500" />
          <span className="font-medium text-gray-800 dark:text-black">Instagram</span>
        </a>
      </div>
    </Container>
  );
}
