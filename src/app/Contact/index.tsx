import React from "react";
import Link from "next/link";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Contact() {
  const email = "richikchanda1999@gmail.com";
  const github = "https://github.com/richikchanda1999";
  const linkedin = "https://www.linkedin.com/in/richik-chanda-0585ba15b/";
  const twitter = "https://twitter.com/richik_chanda";

  return (
    <div id="contact" className="flex flex-col md:flex-row w-full justify-between py-[2%] px-[10%]">
      <h1 className="text-3xl md:text-6xl font-bold text-secondary">
        Reach out!
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-8 md:mt-0 justify-around gap-4 text-secondary">
        <Link
          href={`mailto:${email}`}
          passHref
          className="flex items-center cursor-pointer"
        >
          <AiOutlineMail size="2em" />
          <span className="ml-2">Email</span>
        </Link>
        <Link
          href={github}
          passHref
          className="flex items-center cursor-pointer"
        >
          <AiFillGithub size="2em" />
          <span className="ml-2">GitHub</span>
        </Link>
        <Link
          href={linkedin}
          passHref
          className="flex items-center cursor-pointer"
        >
          <AiFillLinkedin size="2em" />
          <span className="ml-2">LinkedIn</span>
        </Link>
        <Link
          href={twitter}
          passHref
          className="flex items-center cursor-pointer"
        >
          <AiFillTwitterCircle size="2em" />
          <span className="ml-2">Twitter</span>
        </Link>
      </div>
    </div>
  );
}
