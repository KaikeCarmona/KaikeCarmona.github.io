import "./Home.css";

import { Link } from "react-scroll";


export default function HomeLanding() {
 
  return (
    <div>
      {/* <header>
        <div style={{ backgroundColor: "#4200FF" }} className="circle"></div>
        <div style={{ backgroundColor: "#f00" }} className="circle"></div>
        <div style={{ backgroundColor: "#00FF1A" }} className="circle"></div>
      </header> */}
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
