import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hi, I&apos;m Shatadal Samui</Heading>
      <Paragraph className="max-w-xl mt-4">
  I&apos;m a full-stack developer and 4th-year Computer Science student at Kalinga Institute of Industrial Technology, Bhubaneswar. I specialize in building adaptable, secure applications using <Highlight>React.js</Highlight> and <Highlight>TypeScript</Highlight> for the frontend, and <Highlight>Node.js</Highlight> with <Highlight>PostgreSQL</Highlight> for the backend. My experience extends to cloud infrastructure with <Highlight>AWS</Highlight> and container management using <Highlight>Docker</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have developed scalable digital solutions, including a digital wallet platform supporting 50,000+ users, and am proficient in cloud deployments and troubleshooting. I enjoy collaborating in innovative tech teams and solving complex problems with modern web technologies.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
