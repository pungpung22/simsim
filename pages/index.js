import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Creative Portfolio | Welcome</title>
        <meta name="description" content="A beautiful modern portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`container ${mounted ? 'fade-in' : ''}`}>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="glitch" data-text="지윤덕 고기사줘">
              지윤덕 고기사줘
            </h1>
            <p className="subtitle">고기사줘 지윤덕 고기사줘 고기사줘 지윤덕</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-animation">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                지윤덕 고기사줘 고기사줘 고기사줘 지윤덕 고기사줘 고기사줘 지윤덕 고기사줘
                고기사줘 지윤덕 고기사줘 고기사줘 고기사줘 지윤덕 고기사줘 고기사줘
              </p>
            </div>
            <div className="skills">
              <div className="skill-card">
                <div className="skill-icon">🥩</div>
                <h3>지윤덕</h3>
                <p>고기사줘 고기사줘 고기사줘</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🍖</div>
                <h3>고기사줘</h3>
                <p>지윤덕 지윤덕 지윤덕</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🥓</div>
                <h3>지윤덕 고기사줘</h3>
                <p>고기사줘 지윤덕 고기사줘</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
              <div className="project-info">
                <h3>Project Alpha</h3>
                <p>A revolutionary web application that changes everything</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">AI</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
              <div className="project-info">
                <h3>Project Beta</h3>
                <p>Beautiful e-commerce platform with amazing UX</p>
                <div className="project-tags">
                  <span className="tag">TypeScript</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
              <div className="project-info">
                <h3>Project Gamma</h3>
                <p>Real-time collaboration tool for modern teams</p>
                <div className="project-tags">
                  <span className="tag">WebSocket</span>
                  <span className="tag">Redis</span>
                  <span className="tag">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p>Interested in working together? Let's make something amazing!</p>
            <div className="contact-links">
              <a href="mailto:hello@example.com" className="contact-link">
                <span className="contact-icon">📧</span>
                Email
              </a>
              <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">💻</span>
                GitHub
              </a>
              <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Creative Portfolio. Made with ❤️ using Next.js</p>
        </footer>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          opacity: 0;
          transition: opacity 0.8s ease-in;
        }

        .fade-in {
          opacity: 1;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        .hero-content {
          text-align: center;
          z-index: 2;
          animation: slideUp 1s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .glitch {
          font-size: clamp(3rem, 10vw, 6rem);
          font-weight: 800;
          margin: 0;
          position: relative;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0%, 90%, 100% {
            transform: translate(0);
          }
          92% {
            transform: translate(-2px, 2px);
          }
          94% {
            transform: translate(2px, -2px);
          }
        }

        .subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          margin: 1rem 0 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.3);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.2);
          bottom: 10%;
          right: 10%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.25);
          top: 50%;
          left: 50%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(50px, -50px);
          }
          66% {
            transform: translate(-50px, 50px);
          }
        }

        .section {
          padding: 5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 800;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .skill-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .skill-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        .project-image {
          height: 200px;
          width: 100%;
        }

        .project-info {
          padding: 1.5rem;
        }

        .project-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .project-info p {
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .project-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .contact-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          min-width: 120px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .contact-icon {
          font-size: 2rem;
        }

        .footer {
          text-align: center;
          padding: 2rem;
          opacity: 0.7;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .hero {
            padding: 1rem;
          }

          .section {
            padding: 3rem 1rem;
          }

          .skills, .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
}
