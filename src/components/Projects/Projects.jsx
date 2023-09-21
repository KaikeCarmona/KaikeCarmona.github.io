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
          projectDesc="Consumindo as API‘S: Riot, PokeAPI, ViaCEP, ClimaTempo. Utilizando Styled-Components ou Sass."
        />
        <Card
          projectTitle="CRUD "
          projectDesc="Neste projeto, criei um CRUD temático no qual utilizo todos os verbos HTTP: GET, POST, PUT e DELETE."
        />
        <Card
          projectTitle="Clone UI"
          projectDesc="Projeto no qual clono a interface de empresas como Netflix, Amazon, GitHub e Nike."
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
      <a
        href=""
        style={{
          textDecoration: "none",
          borderRadius: "1.2rem",
          height: "auto",
        }}
      >
        <footer>
          <span></span>
        </footer>
      </a>
    </section>
  );
}
