"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="max-w-4xl">
        <Paragraph className="mt-4 font-bold text-lg">
          Shatadal Samui | Kalinga Institute of Industrial Technology(2022-2026)
        </Paragraph>
        <Paragraph className="mt-4">
          I am a full-stack developer and 4th-year Computer Science student at Kalinga Institute of Industrial Technology, Bhubaneswar. I specialize in building adaptable, secure applications using React.js and TypeScript for the frontend, and Node.js with PostgreSQL for the backend. My experience extends to cloud infrastructure with AWS and container management using Docker.
        </Paragraph>
        <Paragraph className="mt-4">
          <span className="font-semibold">Professional Summary:</span> I have a proven track record in developing scalable digital solutions, including a digital wallet platform architected to support over 50,000 users. I am proficient in cloud deployments using AWS free tiers and skilled in troubleshooting and maintaining systems with Docker. I thrive in collaborative environments and enjoy solving complex problems in innovative tech teams.
        </Paragraph>
        <Paragraph className="mt-4">
          <span className="font-semibold">Skills:</span> <br />
          <span className="font-medium">Languages:</span> C, C++, Java, JavaScript, SQL, TypeScript.<br />
          <span className="font-medium">Technologies & Tools:</span> AWS, Docker, EC2, Express, MongoDB, Next.js, Node.js, NoSQL, PostgreSQL, Prisma ORM, Postman, React.js, Redis, Turborepo, Git.
        </Paragraph>
        <Paragraph className="mt-4">
          <span className="font-semibold">Education:</span> <br />
          B.Tech in Computer Science and Engineering, Kalinga Institute of Industrial Technology, Bhubaneswar (July 2022 – June 2026) <br />
          <span className="font-medium">Relevant Coursework:</span> Object Oriented Programming, Relational Database Management Systems, Discrete Mathematics, Data Structures and Algorithms, Operating Systems, Computer Networks, Machine Learning, Artificial Intelligence, Deep Learning Techniques, Advanced Data Structures and Algorithms, Design and Analysis of Algorithms.
        </Paragraph>
        <Paragraph className="mt-4">
          <span className="font-semibold">Certificates:</span> <br />
          <span className="font-medium">0-100 Full Stack Web Development Course on 100xdevs:</span> <br />
          Successfully completed a comprehensive program mastering full stack web development, including advanced front-end (React.js, TypeScript) and back-end (Node.js, Express) development, database systems (MongoDB, PostgreSQL), authentication, and deployment using Docker on cloud platforms. Developed hands-on projects focused on responsive UIs, secure RESTful APIs with API testing using Postman, and robust cloud deployment on AWS.
        </Paragraph>
      </div>
    </div>
  );
}
