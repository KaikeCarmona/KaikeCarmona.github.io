import "./Skills.css";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";

export default function SkillsLanding() {
  return (
    <section className="SkillsSection">
      <span>
        <p>🖥️ Skills</p>
      </span>
      <div className="SkillsCards">
        <article>
          <Cards
            icon={<DesktopWindowsOutlinedIcon />}
            type="Front-End"
            description="Desenvolvo sites responsivos utilizando tecnologias centradas em React e Bootstrap, com ênfase na utilização da biblioteca Styled Components na maioria dos casos."
          />
          <Cards
            icon={<StorageOutlinedIcon />}
            type="Back-End"
            description="No lado do servidor, possuo conhecimento em Node.js, juntamente com o Express, além de habilidades em banco de dados MySQL."
          />
        </article>
      </div>
    </section>
  );
}

export function Cards(props) {
  return (
    <div className="Cards">
      <header>
        <span style={{ backgroundColor: "#4200FF" }}></span>
        <span style={{ backgroundColor: "#FF0000" }}></span>
        <span style={{ backgroundColor: "#00FF1A" }}></span>
      </header>
      <div className="Cards-content">
        <div className="Cards-icon">{props.icon}</div>
        <h2>{props.type}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
