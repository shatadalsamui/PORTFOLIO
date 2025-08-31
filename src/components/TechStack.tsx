import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
  // Languages
  { title: "C++", src: "/images/cpp.png", className: "h-[67px] w-[95px]" },
  { title: "Java", src: "/images/java.png", className: "h-[67px] w-[95px]" },
  { title: "Rust", src: "/images/rust.png", className: "h-[67px] w-[95px]" },
  { title: "TypeScript", src: "/images/ts.png", className: "h-[67px] w-[95px]" },
  { title: "JavaScript", src: "/images/js.png", className: "h-[67px] w-[95px]" },

    // Databases
    { title: "PostgreSQL", src: "/images/postgresql.png", className: "h-[67px] w-[95px]" },
    { title: "MongoDB", src: "/images/mongodb.png", className: "h-[67px] w-[95px]" },
    { title: "Redis", src: "/images/redis.png", className: "h-[67px] w-[95px]" },

    // Frameworks/JS
    { title: "React", src: "/images/react.png", className: "h-[67px] w-[95px]" },
    { title: "Next.js", src: "/images/logos/next.png", className: "h-[67px] w-[95px]" },
    { title: "Node", src: "/images/nodejs.png", className: "h-[67px] w-[52px]" },
    { title: "Tailwind", src: "/images/logos/tailwind.png", className: "h-[67px] w-[163px]" },

    // Rest (tools, infra, etc)
    { title: "Prisma", src: "/images/prisma.png", className: "h-[67px] w-[95px]" },
    { title: "Turborepo", src: "/images/turborepo.png", className: "h-[67px] w-[95px]" },
    { title: "WebSockets", src: "/images/ws.png", className: "h-[67px] w-[95px]" },
    { title: "Postman", src: "/images/postman.png", className: "h-[67px] w-[95px]" },
    { title: "Docker", src: "/images/docker.png", className: "h-[67px] w-[95px]" },
    { title: "AWS", src: "/images/logos/aws.webp", className: "h-[67px] w-[67px]" },
    { title: "Vercel", src: "/images/logos/vercel.png", className: "h-[67px] w-[163px]" },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
