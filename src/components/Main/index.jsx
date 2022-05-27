import { useCallback, useState } from "react";

import * as S from "./styles";
import myPhoto from "../../assets/ganteng.jpeg";

export function Main() {
  const [directory, setDirectory] = useState("#about");
  const [scrollAnimate, setScrollAnimate] = useState("#about");
  const [click, setClick] = useState(0);

  const hanldeWithScroll = useCallback(() => {
    if (click % 2 === 0) {
      setDirectory("#about");
      setScrollAnimate("down");

      return setClick((prev) => prev + 1);
    } else {
      setDirectory("#main");
      setScrollAnimate("up");

      return setClick((prev) => prev + 1);
    }
  }, [click]);

  return (
    <S.Wrapper id="main">
      <S.TextContainer>
        <h1>Hi! I'am Muhammad Faqih</h1>
        <p>UI/UX DESIGNER</p>

        <div>
          <p>
            I love myself, <br />
            my family and <br />
            hate things that made me in trouble <br />
          </p>
        </div>
      </S.TextContainer>

      <div>
        <img src={myPhoto} alt="MyImg" />
      </div>

      <a href={directory} onClick={hanldeWithScroll}>
        <div className={`scroll-animation ${scrollAnimate}`}></div>
      </a>
    </S.Wrapper>
  );
}
