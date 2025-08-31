"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: any) {
  let router = useRouter();

  return (
    <Container>
      <article>
        <header className="flex flex-col">
          <Heading className=" py-4">{meta.title}</Heading>
          <time
            dateTime={meta.date}
            className="flex items-center text-base text-zinc-400 "
          >
            <Paragraph className=" text-zinc-700">
              {formatDate(meta.date)}
            </Paragraph>
          </time>
          <div className="w-full mt-4 aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={meta.image}
              alt="thumbnail"
              height="800"
              width="800"
              className={`object-cover object-left-top w-full max-h-96`}
            />
          </div>
        </header>
        <Prose className="mt-8">{children}</Prose>
      </article>
    </Container>
  );
}
