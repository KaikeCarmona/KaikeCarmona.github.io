import { useEffect } from "react";
import "./Home.css";

import { Link } from "react-scroll";

export default function HomeLanding() {
  var i = 0;
  var txt = "Desenvolvedor Web"; /* The text */
  var speed = 100; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

useEffect(()=>{
  typeWriter();
})

  return (
    <div>
      <div className="home">
        <h1>
          <span style={{ color: "#4200FF" }}>Kaike</span> Carmona
        </h1>
        <p id="demo"></p>
        <div className="button-content">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            className="scroll"
          >
            Sobre mim
          </Link>
        </div>
      </div>
    </div>
  );
}
