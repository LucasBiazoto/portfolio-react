import "./App.css";

import heroImage from "./assets/lucasgit.png";

import dashboardImg from "./assets/clinica-dashboard.png";
import loginImg from "./assets/clinica-login.png";
import financeiroImg from "./assets/clinica-financeiro.png";
import agendaImg from "./assets/clinica-agenda.png";

function App() {
  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">
        <h1 className="logo">Lucas.dev</h1>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO */}

      <section className="hero">

        <div className="hero-text">

          <span className="subtitle">
            Olá, eu sou
          </span>

          <h2>
            Lucas Biazoto
          </h2>

          <h3>
            Full Stack Developer | Python • Django • PostgreSQL
          </h3>

          <p>
            Desenvolvendo sistemas web modernos com APIs,
            autenticação, dashboards administrativos
            e banco de dados escaláveis.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="btn-primary">
              Ver Projetos
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Lucas" />
        </div>
      </section>

      {/* SOBRE */}

      <section id="sobre" className="section">

        <h2 className="section-title">
          Sobre Mim
        </h2>

        <div className="about-content">

          <p>
            Profissional com experiência no mercado bancário
            e atuação em desenvolvimento Full Stack utilizando
            Python, Django e PostgreSQL.
          </p>

          <p>
            Desenvolvo aplicações web focadas em sistemas
            administrativos, controle financeiro,
            APIs REST e automações.
          </p>

          <p>
            Tenho experiência com deploy de aplicações,
            integração com banco de dados e construção
            de dashboards modernos.
          </p>

          <h3 className="sub-title">
            Formação Acadêmica
          </h3>

          <ul className="about-list">
            <li>
              Bacharelado em Administração de Empresas —
              Universidade Cruzeiro do Sul
            </li>

            <li>
              MBA em Finanças, Banking e Investimentos —
              PUC-RS
            </li>

            <li>
              Pós-Graduação em Engenharia de Software —
              Faculdade Metropolitana (em andamento)
            </li>
          </ul>

          <h3 className="sub-title">
            Certificações
          </h3>

          <ul className="about-list">
            <li>
              CEA — Certificação ANBIMA de Especialista
              em Investimentos
            </li>

            <li>
              Desenvolvimento Fullstack e IA —
              Infinity School
            </li>

            <li>
              Inglês Intermediário —
              Intercâmbio RCIIS Toronto/Canadá
            </li>
          </ul>
        </div>
      </section>

      {/* PROJETOS */}

      <section id="projetos" className="section">

        <h2 className="section-title">
          Projetos
        </h2>

        <div className="projects-grid">

          {/* CARD 1 */}

          <div className="project-card">

            <img
              src={dashboardImg}
              alt="Dashboard Clínica"
            />

            <div className="project-content">

              <h3>
                Sistema Clínica
              </h3>

              <p>
                Sistema completo para clínicas com agenda,
                pacientes, financeiro, dashboard administrativo
                e integração com WhatsApp.
              </p>

              <div className="techs">
                <span>Python</span>
                <span>Django</span>
                <span>PostgreSQL</span>
                <span>Bootstrap</span>
              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="btn-primary"
                >
                  Ver Projeto
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2 */}

          <div className="project-card">

            <img
              src={loginImg}
              alt="Login Sistema"
            />

            <div className="project-content">

              <h3>
                Sistema de Login
              </h3>

              <p>
                Sistema de autenticação com controle
                de usuários, segurança e permissões.
              </p>

              <div className="techs">
                <span>Django</span>
                <span>Auth</span>
                <span>SQLite</span>
              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="btn-primary"
                >
                  Ver Projeto
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3 */}

          <div className="project-card">

            <img
              src={financeiroImg}
              alt="Financeiro"
            />

            <div className="project-content">

              <h3>
                Controle Financeiro
              </h3>

              <p>
                Sistema financeiro com pagamentos,
                relatórios e controle administrativo.
              </p>

              <div className="techs">
                <span>Python</span>
                <span>Django</span>
                <span>PostgreSQL</span>
              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="btn-primary"
                >
                  Ver Projeto
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* CARD 4 */}

          <div className="project-card">

            <img
              src={agendaImg}
              alt="Agenda"
            />

            <div className="project-content">

              <h3>
                Agenda Inteligente
              </h3>

              <p>
                Agenda médica com confirmações,
                reagendamentos e integração
                automatizada via WhatsApp.
              </p>

              <div className="techs">
                <span>API</span>
                <span>WhatsApp</span>
                <span>Django</span>
              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="btn-primary"
                >
                  Ver Projeto
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECNOLOGIAS */}

      <section id="tecnologias" className="section">

        <h2 className="section-title">
          Tecnologias
        </h2>

        <div className="tech-grid">

          <div className="tech-card">Python</div>
          <div className="tech-card">Django</div>
          <div className="tech-card">PostgreSQL</div>
          <div className="tech-card">React</div>
          <div className="tech-card">JavaScript</div>
          <div className="tech-card">HTML/CSS</div>
          <div className="tech-card">Git/GitHub</div>
          <div className="tech-card">APIs REST</div>

        </div>
      </section>

      {/* CONTATO */}

      <section id="contato" className="section">

        <h2 className="section-title">
          Contato
        </h2>

        <div className="contact-box">

          <p>
            📧 lucas@email.com
          </p>

          <p>
            💼 LinkedIn
          </p>

          <p>
            🖥️ GitHub
          </p>

          <p>
            📱 WhatsApp
          </p>

        </div>
      </section>

    </div>
  );
}

export default App;