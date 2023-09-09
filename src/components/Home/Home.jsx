import "./Home.css";

export default function HomeLanding() {
  const teste = "funcionou";

  return (
    <div>
        <header>
            <div style={{backgroundColor: '#4200FF'}} className="circle"></div>
            <div style={{backgroundColor: '#f00'}} className="circle"></div>
            <div style={{backgroundColor: '#00FF1A'}} className="circle"></div>
        </header>
      <div className="home">
        <h1>
          <span style={{ color: "#4200FF" }}>Kaike</span> Carmona
        </h1>
        <p>Desenvolvedor Front-End</p>
        <div className="button-content">
        <button class="btn draw-border">Draw Border</button>        </div>
      </div>
    </div>
  );
}
