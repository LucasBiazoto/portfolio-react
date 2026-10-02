import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="portfolio-container">
      {/* HEADER / NAVBAR */}
      <header className="navbar">
        <div className="logo">Lucas.dev</div>
        
        <div className="language-selector">
          <button 
            className={i18n.language === 'en' ? 'active-lang' : ''} 
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <button 
            className={i18n.language === 'pt' ? 'active-lang' : ''} 
            onClick={() => changeLanguage('pt')}
          >
            PT
          </button>
          <button 
            className={i18n.language === 'es' ? 'active-lang' : ''} 
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
        </div>

        <nav className="nav-links">
          <a href="#about">{t('nav.about')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a href="#technologies">{t('nav.technologies')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>
      </header>

      {/* HERO SECTION COM FOTO DO GITHUB */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="greeting">{t('hero.greeting')}</p>
            <h1>{t('hero.name')}</h1>
            <h2>{t('hero.role')}</h2>
            <p className="description">{t('hero.description')}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">{t('hero.btn_projects')}</a>
              <a href="https://github.com/LucasBiazoto" target="_blank" rel="noreferrer" className="btn secondary">
                {t('hero.btn_github')}
              </a>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img 
              src="https://github.com/LucasBiazoto.png" 
              alt="Lucas Biazoto" 
              className="hero-profile-img" 
            />
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="about" className="section">
        <h2>{t('about.title')}</h2>
        <div className="about-card">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="technologies" className="section">
        <h2>{t('tech.title')}</h2>
        <div className="tech-grid">
          <span className="tech-badge">Python</span>
          <span className="tech-badge">Django</span>
          <span className="tech-badge">PostgreSQL</span>
          <span className="tech-badge">JavaScript</span>
          <span className="tech-badge">React</span>
          <span className="tech-badge">HTML5 & CSS3</span>
          <span className="tech-badge">Git & GitHub</span>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="section">
        <h2>{t('projects.title')}</h2>
        <div className="projects-grid">
          
          <div className="project-card">
            <h3>{t('projects.clinic_title')}</h3>
            <p>{t('projects.clinic_desc')}</p>
            <div className="card-tags">
              <span>Python</span>
              <span>Django</span>
              <span>PostgreSQL</span>
            </div>
            <div className="card-links">
              <a href="https://github.com/LucasBiazoto/clinica-system" target="_blank" rel="noreferrer" className="btn-sm">
                {t('projects.btn_code')}
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>{t('projects.time_title')}</h3>
            <p>{t('projects.time_desc')}</p>
            <div className="card-tags">
              <span>Python</span>
              <span>Django</span>
              <span>PDF Engine</span>
            </div>
            <div className="card-links">
              <a href="https://github.com/LucasBiazoto/time-tracking-system" target="_blank" rel="noreferrer" className="btn-sm">
                {t('projects.btn_code')}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTATO COM ÍCONES */}
      <section id="contact" className="section">
        <h2>{t('contact.title')}</h2>
        <div className="contact-links">
          <a href="mailto:lucasmoreirabiazoto@gmail.com" className="contact-btn">
            <FaEnvelope className="contact-icon email-icon" />
            <span>{t('contact.email')}</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/lucas-biazoto-c-pro-i-80373774/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaLinkedin className="contact-icon linkedin-icon" />
            <span>{t('contact.linkedin')}</span>
          </a>
          <a 
            href="https://github.com/LucasBiazoto" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaGithub className="contact-icon github-icon" />
            <span>{t('contact.github')}</span>
          </a>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE FIXO DO WHATSAPP */}
      <a 
        href="https://wa.me/5511984681343" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;