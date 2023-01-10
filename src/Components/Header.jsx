import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { SiOpenai } from "react-icons/si";
import "./style/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="socials">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <span>
            <AiOutlineGithub fontSize={20} />
          </span>
        </a>

        <a
          href="https://salehahmed.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> Project of Saleh Ahmed</span>
        </a>

        <a
          href="https://beta.openai.com/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <SiOpenai fontSize={20} href="https://beta.openai.com/overview" />
          </span>
        </a>
      </div>
    </header>
  );
}
