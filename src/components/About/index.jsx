import * as S from "./styles";

export function About() {
  return (
    <S.Wrapper id="about">
      <p className="about-text">
        🪐 My name is Muhammad Faqih - Im 20 Years Old 🪐
        <br />I started my study{" "}
        <time dateTime="2021-01-15">in September 2019.</time>
        <br />
        <br />
        Bismillah
        <br />
        Allahuakbar
        <br />
        <br />
        <strong>My knowledge</strong> : DESIGN, FIGMA, CANVA, ILUSTRATOR, AFTER EFFECT{" "}
        <br />
        <strong> What am I learning</strong>: JS, HTML, CSS
      </p>

      <S.CV>
        <h1>Download my CV</h1>

        <a
          href="https://drive.google.com/drive/folders/1SDQ1wgfhSIhG7XH1CuJUBFa4Zi-LxCt7?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span>Download</span>
        </a>
      </S.CV>
    </S.Wrapper>
  );
}
