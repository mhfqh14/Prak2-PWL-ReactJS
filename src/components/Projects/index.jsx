import * as S from "./styles";

import bevelo from "../../assets/Screenshot/bevelo.jpg";
import sekam from "../../assets/Screenshot/sekam.jpg";
import silabil from "../../assets/Screenshot/silabil.jpg";

export function Project() {
  return (
    <S.Footer id="projects">
      <div className="footer-title_div">
        <h1 className="footer-title">Projects</h1>
      </div>

      <div className="projects">
        <a
          href="https://www.figma.com/proto/apDKaV14SNH0oZfbbj2eGN/BEVELO?node-id=2%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2"
          className="project-container"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img
              src={bevelo}
              alt="My Project"
              width="100%"
              height="200px"
            />
          </div>

          <div className="legend">
            <p className="project-text">Design BEVELO</p>
          </div>
        </a>

        <a
          href="https://www.figma.com/proto/3pTAJYCrL6VGq1vsfJVcl4/SEKAM-website?node-id=0%3A1&scaling=contain&page-id=0%3A1&starting-point-node-id=15%3A18"
          className="project-container"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img src={sekam} alt="My Project" width="100%" height="200px" />
          </div>

          <div className="legend">
            <p className="project-text">Design SEKAM</p>
          </div>
        </a>

        <a
          href="https://www.figma.com/proto/M3kBDBAhKM0hqErwAOYJ8V/SILABIL?node-id=7%3A3&scaling=scale-down&page-id=7%3A3&starting-point-node-id=12%3A19"
          className="project-container"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img
              src={silabil}
              alt="My Project"
              width="100%"
              height="200px"
            />
          </div>

          <div className="legend">
            <p className="project-text">Desing Silabil</p>
          </div>
        </a>
      </div>
    </S.Footer>
  );
}
