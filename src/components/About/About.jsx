import "./About.css";

export default function AboutLanding() {
  return (
    <div id="about">
      <div className="bloc1">
        <div className="bloc1-1"></div>
        <div className="bloc1-2">
          <span>
            <p>🧐 Sobre mim</p>
          </span>
          <h1>Kaike Carmona</h1>
          <p>💻 Desenvolvedor web a dois anos</p>
          <p>🎓 Cursando Análise e Desenvolvimento de Sistemas na Faculdade</p>
          <p>🎓 Cursei Análise e Desenvolvimento de Sistemas no SENAI </p>
          <p>
            💡 Tenho esperiencia em front-end, mas almejo me tornar full-stack
          </p>
        </div>
      </div>
      <div className="bloc2">
        <section>
          <div className="forms">
            <div className="circle"></div>
            <div className="retangle"></div>
          </div>
          <div className="text">
            <h4 style={{ color: "#fff" }}>2021</h4>
            <p className="year">
              Em 2021, comecei a me interessar pela área de desenvolvimento e, consequentemente, iniciei o curso técnico em Análise e Desenvolvimento de Sistemas no SENAI Suíço-Brasileira.
            </p>
          </div>
        </section>
        <section>
          <div className="forms">
            <div className="circle"></div>
            <div className="retangle"></div>
          </div>
          <div className="text">
            <h4 style={{ color: "#fff" }}>2022</h4>
            <p className="year">
              Em 2022, comecei a me aprofundar mais em ferramentas que pudessem expandir meu conhecimento e otimizar meu fluxo de estudos. Então, iniciei o estudo de React.js (utilizando styled-components e outras bibliotecas) e Node.js (utilizando express e outras bibliotecas).
            </p>
          </div>
        </section>
        <section>
          <div className="forms">
            <div className="circle"></div>
            <div className="retangle"></div>
            <div className="triangle"></div>
          </div>
          <div className="text">
            <h4 style={{ color: "#fff" }}>Atualmente</h4>
            <p className="year">
              Atualmente estou cursando Análise e Desenvolvimento no Centro Universitário SENAC. Busco me tornar um programador Full-Stack e conquistar minha primeira vaga como desenvolvedor.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
