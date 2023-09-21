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
        {/* <h1 className="Section-title">Tecnologias e Habilidades</h1> */}
        <article>
          <Cards
            icon={<DesktopWindowsOutlinedIcon />}
            type="Front-End"
            description="Desenvolvo sites Responsivos utilizando tecnologias que giram em torno de React e Bootstrap, utilizando na maioria das vezes a biblioteca Styled Components"
          />
          <Cards
            icon={<StorageOutlinedIcon />}
            type="Back-End"
            description="No lado do servidor eu possuo conhecimento em node.js, juntamente com o express. E habilidades com banco de dados MySql "
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
