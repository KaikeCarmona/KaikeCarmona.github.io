import "./about.css";

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
          <p>🎓 Cursando Analise e desenvolvimento de sistemas na faculdade</p>
          <p>🎓 Cursei Analise e desenvolvimento de sistemas no SENAI </p>
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
              Em 2021 eu comecei a me interessar pela area de desenvolvimento,
              então comecei a cursar analise e desenvolvimento de sistemas
              (curso tecnico) pelo SENAI Suiço Brasileira.
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
              Em 2022 eu comecei a me aprofundar mais em ferramentas que
              pudessem expandir meu conhecimento e otimizar meu fluxo de
              "estudos". Então comecei a estudar React.js (utilizando styled-components e outras bibliotecas) e Node.js(utilizando express e outras bibliotecas).
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
              Atualmente estou cursando Analise e desenvolvimento no Centro
              Universitario SENAC. Busco me tornar um programador Full-Stack e
              conquistar minha primeira vaga como desenvolvedor.
            </p>
          </div>
        </section>
        {/* <div className="forms">
            <div className="circleAbout"></div>
            <div className="stick"></div>
            <div className="circleAbout"></div>
            <div className="stick"></div>
            <div className="circleAbout"></div>
            <div className="stick"></div>
            <div className="triangle"></div>
          </div>
          <div className="tragectory">
            <section>
              <h1>2021</h1>
              <p>
                Em 2021 eu comecei a cursar analise e desenvolvimento de
                sistemas (curso tecnico) pelo SENAI Suiço Brasileira.
              </p>
            </section>
            <section>
              <h1>2022</h1>
              <p>
                Meus estudos se aprofundaram mais, comecei a criar projetos
                front-end com React e back-end com Node.js.
              </p>
            </section>
            <section>
              <h1>Atualmente</h1>
              <p>
                Atualmente estou cursando Analise e desenvolvimento no Centro
                Universitario SENAC. Busco me tornar um programador Full-Stack e
                conquistar minha primeira vaga como desenvolvedor.
              </p>
            </section>
          </div> */}
      </div>
    </div>
  );
}
