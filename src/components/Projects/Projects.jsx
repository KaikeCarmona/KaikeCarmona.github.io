import "./Projects.css";

export default function ProjectsLanding() {
  return (
    <div className="projects">
      <span className="section-title">
        <p>🔗Projetos</p>
      </span>
      <div className="card-content">
        <Card
          projectTitle="API Pages"
          projectDesc="Consumindo as API‘S: Riot, PokeAPI, ViaCEP, Awesome, ClimaTempo. Em todas utilizando bibliotecas css Styled-Components ou Sass"
        />
        <Card
          projectTitle="API Pages"
          projectDesc="Consumindo as API‘S: Riot, PokeAPI, ViaCEP, Awesome, ClimaTempo. Em todas utilizando bibliotecas css Styled-Components ou Sass"
        />
        <Card
          projectTitle="API Pages"
          projectDesc="Consumindo as API‘S: Riot, PokeAPI, ViaCEP, Awesome, ClimaTempo. Em todas utilizando bibliotecas css Styled-Components ou Sass"
        />
      </div>
    </div>
  );
}

export function Card(props) {
  return (
    <section>
      <header>
        <span style={{ backgroundColor: "#4200FF" }}></span>
        <span style={{ backgroundColor: "#FF0000" }}></span>
        <span style={{ backgroundColor: "#00FF1A" }}></span>
      </header>
      <article>
        <h1>{props.projectTitle}</h1>
        <p>{props.projectDesc}</p>
      </article>
      <footer>
        <span></span>
      </footer>
    </section>
  );
}
