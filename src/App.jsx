import "./App.css";
import { useState } from "react";

import heroImg from "./assets/lucasgit.png";

import dashboardImg from "./assets/clinica-dashboard.png";
import loginImg from "./assets/clinica-login.png";
import financeiroImg from "./assets/clinica-financeiro.png";
import agendaImg from "./assets/clinica-agenda.png";

function App() {

  const [language, setLanguage] = useState("en");

  const translations = {

    en: {
      about: "About",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",

      hello: "Hello, I'm",

      description:
        "Developing modern web systems with APIs, authentication, dashboards, scalable databases and automations.",

      viewProjects: "View Projects",

      aboutTitle: "About Me",

      aboutText1:
        "Professional with more than 12 years of experience in the banking sector, investments, customer service and financial products.",

      aboutText2:
        "Currently focused on Full Stack Development using Python, Django, PostgreSQL, JavaScript and React.",

      technologiesTitle: "Technologies",

      projectsTitle: "Projects",

      project1:
        "Administrative dashboard for clinic management with metrics and indicators.",

      project2:
        "Authentication system with secure login and user management.",

      project3:
        "Integrated financial control system with payments and reports.",

      project4:
        "Smart scheduling system with confirmations and automations.",

      contactTitle: "Contact",

      linkedin: "View LinkedIn",

      whatsapp: "Talk on WhatsApp",
    },

    pt: {
      about: "Sobre",
      projects: "Projetos",
      technologies: "Tecnologias",
      contact: "Contato",

      hello: "Olá, eu sou",

      description:
        "Desenvolvendo sistemas web modernos com APIs, autenticação, dashboards administrativos, banco de dados escaláveis e automações.",

      viewProjects: "Ver Projetos",

      aboutTitle: "Sobre Mim",

      aboutText1:
        "Profissional com mais de 12 anos de experiência no mercado bancário, investimentos, atendimento ao cliente e produtos financeiros.",

      aboutText2:
        "Atualmente focado em Desenvolvimento Full Stack utilizando Python, Django, PostgreSQL, JavaScript e React.",

      technologiesTitle: "Tecnologias",

      projectsTitle: "Projetos",

      project1:
        "Dashboard administrativo para gestão clínica com métricas e indicadores.",

      project2:
        "Sistema de autenticação com login seguro e gerenciamento de usuários.",

      project3:
        "Sistema integrado de controle financeiro com pagamentos e relatórios.",

      project4:
        "Sistema inteligente de agendamento com confirmações e automações.",

      contactTitle: "Contato",

      linkedin: "Ver LinkedIn",

      whatsapp: "Falar no WhatsApp",
    },

    es: {
      about: "Sobre",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",

      hello: "Hola, soy",

      description:
        "Desarrollando sistemas web modernos con APIs, autenticación, dashboards, bases de datos escalables y automatizaciones.",

      viewProjects: "Ver Proyectos",

      aboutTitle: "Sobre Mí",

      aboutText1:
        "Profesional con más de 12 años de experiencia en el sector bancario, inversiones, atención al cliente y productos financieros.",

      aboutText2:
        "Actualmente enfocado en Desarrollo Full Stack usando Python, Django, PostgreSQL, JavaScript y React.",

      technologiesTitle: "Tecnologías",

      projectsTitle: "Proyectos",

      project1:
        "Dashboard administrativo para gestión clínica con métricas e indicadores.",

      project2:
        "Sistema de autenticación con login seguro y gestión de usuarios.",

      project3:
        "Sistema integrado de control financiero con pagos e informes.",

      project4:
        "Sistema inteligente de programación con confirmaciones y automatizaciones.",

      contactTitle: "Contacto",

      linkedin: "Ver LinkedIn",

      whatsapp: "Hablar por WhatsApp",
    },
  };

  const t = translations[language];

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div className="logo">
          Lucas.dev
        </div>

        <div className="language-switch">

          <button onClick={() => setLanguage("en")}>
            EN
          </button>

          <button onClick={() => setLanguage("pt")}>
            PT
          </button>

          <button onClick={() => setLanguage("es")}>
            ES
          </button>

        </div>

        <nav>
          <a href="#sobre">{t.about}</a>
          <a href="#projetos">{t.projects}</a>
          <a href="#tecnologias">{t.technologies}</a>
          <a href="#contato">{t.contact}</a>
        </nav>

      </header>

      {/* HERO */}

      <section className="hero">

        <div className="hero-text">

          <p className="hello">
            {t.hello}
          </p>

          <h1>
            Lucas <br />
            Biazoto
          </h1>

          <h2>
            Full Stack Developer <br />
            | Python • Django • PostgreSQL
          </h2>

          <p className="description">
            {t.description}
          </p>

          <div className="buttons">

            <a href="#projetos" className="btn-primary">
              {t.viewProjects}
            </a>

            <a
              href="https://github.com/LucasBiazoto"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Lucas Biazoto" />
        </div>

      </section>

      {/* ABOUT */}

      <section id="sobre" className="section">

        <h2 className="section-title">
          {t.aboutTitle}
        </h2>

        <div className="about-content">

          <p>{t.aboutText1}</p>

          <p>{t.aboutText2}</p>

        </div>

      </section>

      {/* TECHNOLOGIES */}

      <section id="tecnologias" className="section">

        <h2 className="section-title">
          {t.technologiesTitle}
        </h2>

        <div className="tech-grid">

          <div className="tech-card">Python</div>
          <div className="tech-card">Django</div>
          <div className="tech-card">PostgreSQL</div>
          <div className="tech-card">React</div>
          <div className="tech-card">JavaScript</div>
          <div className="tech-card">HTML5</div>
          <div className="tech-card">CSS3</div>
          <div className="tech-card">GitHub</div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projetos" className="section">

        <h2 className="section-title">
          {t.projectsTitle}
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <img src={dashboardImg} alt="dashboard" />

            <div className="project-content">

              <h3>Dashboard</h3>

              <p>{t.project1}</p>

            </div>

          </div>

          <div className="project-card">

            <img src={loginImg} alt="login" />

            <div className="project-content">

              <h3>Authentication</h3>

              <p>{t.project2}</p>

            </div>

          </div>

          <div className="project-card">

            <img src={financeiroImg} alt="financeiro" />

            <div className="project-content">

              <h3>Finance</h3>

              <p>{t.project3}</p>

            </div>

          </div>

          <div className="project-card">

            <img src={agendaImg} alt="agenda" />

            <div className="project-content">

              <h3>Scheduling</h3>

              <p>{t.project4}</p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contato" className="section">

        <h2 className="section-title">
          {t.contactTitle}
        </h2>

        <div className="contact-container">

          <div className="contact-card">

            <h3>📩 E-mail</h3>

            <a href="mailto:lucasmoreirabiazoto@gmail.com">
              lucasmoreirabiazoto@gmail.com
            </a>

          </div>

          <div className="contact-card">

            <h3>💼 LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/lucas-biazoto-c-pro-i-80373774/"
              target="_blank"
              rel="noreferrer"
            >
              {t.linkedin}
            </a>

          </div>

          <div className="contact-card">

            <h3>💻 GitHub</h3>

            <a
              href="https://github.com/LucasBiazoto"
              target="_blank"
              rel="noreferrer"
            >
              github.com/LucasBiazoto
            </a>

          </div>

          <div className="contact-card">

            <h3>📱 WhatsApp</h3>

            <a
              href="https://wa.me/5511984681343"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              {t.whatsapp}
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;