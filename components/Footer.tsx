import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="flex justify-center gap-4">
        <SocialMediaLink
          icon={<FaGithub />}
          link={"https://github.com/Rahulg321?tab=repositories"}
        />
        <SocialMediaLink
          icon={<FaXTwitter />}
          link={"https://x.com/rg5353070"}
        />
        <SocialMediaLink
          icon={<FaLinkedin />}
          link={"https://www.linkedin.com/in/rahul-gupta-86194a213/"}
        />
        <SocialMediaLink
          icon={<FaInstagram />}
          link={"https://www.instagram.com/_rahulgupta321_/"}
        />
      </div>
      <div className="mt-8">
        <span className="text-center flex items-center text-muted-foreground justify-center">
          Inspired by
        </span>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center mt-2 text-muted-foreground">
          <InspiredText text="Lee Robinson" textLink={"https://leerob.io/"} />{" "}
          <InspiredText
            text="Hosna Qasmei"
            textLink={"https://hosnaqasmei.com/"}
          />
          <InspiredText
            text="Julien Thibeaut"
            textLink={"https://www.ibelick.com/"}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function SocialMediaLink({ icon, link }: { icon: any; link: string }) {
  return (
    <Link
      href={link}
      className="text-2xl text-muted-foreground hover:text-black transition duration-300 ease-in-out dark:hover:text-gray-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}

function InspiredText({ text, textLink }: { text: string; textLink: string }) {
  return (
    <Link
      href={textLink}
      className="ml-1 hover:text-black dark:hover:text-gray-300 transition duration-300 hover:underline ease-in-out underline-offset-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
}
