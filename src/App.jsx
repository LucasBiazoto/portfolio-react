import "./App.css";

import heroImg from "./assets/lucasgit.png";

import dashboardImg from "./assets/clinica-dashboard.png";
import loginImg from "./assets/clinica-login.png";
import financeiroImg from "./assets/clinica-financeiro.png";
import agendaImg from "./assets/clinica-agenda.png";

function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">Lucas.dev</div>

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
          <p className="hello">Olá, eu sou</p>

          <h1>
            Lucas <br />
            Biazoto
          </h1>

          <h2>
            Full Stack Developer <br />
            | Python • Django • PostgreSQL
          </h2>

          <p className="description">
            Desenvolvendo sistemas web modernos com APIs,
            autenticação, dashboards administrativos,
            banco de dados escaláveis e automações.
          </p>

          <div className="buttons">
            <a href="#projetos" className="btn-primary">
              Ver Projetos
            </a>

            <a
              href="https://github.com/LucasBiazoto"
              target="_blank"
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

      {/* SOBRE */}
      <section id="sobre" className="section">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">

          <p>
            Profissional com mais de 12 anos de experiência
            no mercado bancário, atuando nas áreas de
            investimentos, conta corrente, produtos financeiros,
            atendimento e relacionamento com clientes.
          </p>

          <p>
            Atualmente focado em desenvolvimento Full Stack
            utilizando Python, Django, PostgreSQL,
            JavaScript e React.
          </p>

          <p>
            Desenvolvo aplicações web modernas voltadas para:
          </p>

          <ul className="about-list">
            <li>✔ APIs REST</li>
            <li>✔ Sistemas administrativos</li>
            <li>✔ Dashboards inteligentes</li>
            <li>✔ Controle financeiro</li>
            <li>✔ Autenticação e segurança</li>
            <li>✔ Integração com banco de dados</li>
            <li>✔ Deploy e cloud computing</li>
          </ul>

          <h3 className="sub-title">
            Formação Acadêmica
          </h3>

          <ul className="about-list">
            <li>
              ✔ Bacharelado em Administração de Empresas —
              Universidade Cruzeiro do Sul
            </li>

            <li>
              ✔ MBA em Finanças, Banking e Investimentos —
              PUC-RS
            </li>

            <li>
              ✔ Pós-Graduação em Engenharia de Software —
              Faculdade Metropolitana (em andamento)
            </li>
          </ul>

          <h3 className="sub-title">
            Qualificações e Certificações
          </h3>

          <ul className="about-list">
            <li>
              ✔ CEA — Certificação ANBIMA de Especialista em Investimentos
            </li>

            <li>
              ✔ Desenvolvimento Full Stack e IA —
              Infinity School
            </li>

            <li>
              ✔ Inglês Intermediário —
              Intercâmbio RCIIS Toronto / Canadá
            </li>
          </ul>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="section">
        <h2 className="section-title">Tecnologias</h2>

        <div className="tech-grid">

          <div className="tech-card">Python</div>
          <div className="tech-card">Django</div>
          <div className="tech-card">PostgreSQL</div>
          <div className="tech-card">React</div>
          <div className="tech-card">JavaScript</div>
          <div className="tech-card">HTML5</div>
          <div className="tech-card">CSS3</div>
          <div className="tech-card">Git & GitHub</div>
          <div className="tech-card">REST APIs</div>
          <div className="tech-card">Bootstrap</div>
          <div className="tech-card">Cloud</div>
          <div className="tech-card">Deploy</div>

        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <h2 className="section-title">Projetos</h2>

        <div className="projects-grid">

          <div className="project-card">
            <img src={dashboardImg} alt="Dashboard Clínica" />

            <div className="project-content">
              <h3>Dashboard Clínica</h3>

              <p>
                Dashboard administrativo completo para gestão clínica
                com métricas, consultas e indicadores.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={loginImg} alt="Sistema Login" />

            <div className="project-content">
              <h3>Sistema de Login</h3>

              <p>
                Sistema de autenticação com controle de acesso,
                segurança e gerenciamento de usuários.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={financeiroImg} alt="Financeiro" />

            <div className="project-content">
              <h3>Controle Financeiro</h3>

              <p>
                Gestão financeira integrada com pagamentos,
                relatórios e acompanhamento administrativo.
              </p>
            </div>
          </div>

          <div className="project-card">
            <img src={agendaImg} alt="Agenda Clínica" />

            <div className="project-content">
              <h3>Agenda Inteligente</h3>

              <p>
                Sistema de agendamento com confirmações,
                reagendamentos e integração automatizada.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section">
        <h2 className="section-title">Contato</h2>

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
            >
              Ver LinkedIn
            </a>
          </div>

          <div className="contact-card">
            <h3>💻 GitHub</h3>

            <a
              href="https://github.com/LucasBiazoto"
              target="_blank"
            >
              github.com/LucasBiazoto
            </a>
          </div>

          <div className="contact-card">
            <h3>📱 WhatsApp</h3>

            <a
              href="https://wa.me/5511984681343"
              target="_blank"
              className="whatsapp-btn"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;