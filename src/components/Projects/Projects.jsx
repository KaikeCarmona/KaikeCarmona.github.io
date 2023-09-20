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
          projectTitle="Crud Tematico"
          projectDesc="Neste projeto eu criei um CRUD tematico, onde utilizo todos os verbos http: Get, post, Put, Delete."
        />
        <Card
          projectTitle="Clones UI de grandes empresas"
          projectDesc="Projeto onde clono a interface UI de empresas como: Netflix, Amazon, GitHub..."
        />
      </div>
    </div>
  );
}

export function Card(props) {
  return (
    <section>
      <a href="" style={{textDecoration: "none", borderRadius:"1.2rem"}}>
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
      </a>

    </section>
  );
}
