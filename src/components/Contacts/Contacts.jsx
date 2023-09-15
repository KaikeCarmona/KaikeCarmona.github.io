import "./Contacts.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactLanding() {
  return (
    <section className="contacts">
      <span className="contacts-span">
        <p>🤝 Contatos</p>
      </span>
      <div className="contact-content">
        <article>
          <h1>Entre em contato por aqui !</h1>
        </article>
        <div className="cards-section">
          <div className="card-contact">
            <div>
              <EmailOutlinedIcon sx={{ fontSize: 35 }} />
            </div>

            <a href="mailto:kkaike371@gmail.com;">Email</a>
          </div>
          <div className="card-contact">
            <div>
              <GitHubIcon className="icon" sx={{ fontSize: 35 }} />
            </div>

            <a href="https://github.com/KaikeCarmona">GitHub </a>
          </div>
          <div className="card-contact">
            <div>
              <LinkedInIcon sx={{ fontSize: 35 }} />
            </div>

            <a href="https://www.linkedin.com/in/kaike-carmona-76a05b23a/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
