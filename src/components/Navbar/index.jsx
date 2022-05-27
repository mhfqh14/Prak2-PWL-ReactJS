import * as S from "./styles";

import githubIMG from "../../assets/github.svg";
import linkedinIMG from "../../assets/linkedin.svg";
import whatsappIMG from "../../assets/whatsapp.svg";

import { useState } from "react";

export function Navbar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <S.Wrapper onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
      <S.Navbar>
        <div className={isNavBarOpen && "open"}></div>
        <div className={isNavBarOpen && "close-one"}></div>
        <div className={isNavBarOpen && "close-two"}></div>
      </S.Navbar>

      {isNavBarOpen && (
        <S.Nav>
          <div>
            <a
              href="https://github.com/mhfqh14"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIMG} alt="github" />
              <span>/mhfqh14</span>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/muhammad-faqih-b6bb95221/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIMG} alt="linkedin" />
              <span>/Muhammad Faqih</span>
            </a>
          </div>

          <div>
            <a
              href="https://wa.me/085930213210"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappIMG} alt="" />
              <span>085930213210</span>
            </a>
          </div>
        </S.Nav>
      )}
    </S.Wrapper>
  );
}
