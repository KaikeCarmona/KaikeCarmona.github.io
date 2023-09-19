import "./Home.css";

import { Link } from "react-scroll";


export default function HomeLanding() {
 
  return (
    <div>
      <div className="home">
        <h1>
          <span style={{ color: "#4200FF" }}>Kaike</span> Carmona
        </h1>
        <p>Desenvolvedor Front-End</p>
        <div className="button-content">
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={5} duration={500} className="scroll" >
            Sobre mim 
          </Link>
        </div>
      </div>
    </div>
  );
}
