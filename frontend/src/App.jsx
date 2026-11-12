
import { useEffect, useState } from "react";
import "./App.css";

const skills = [
  { name: "HTML5", category: "Frontend", level: "Core" },
  { name: "CSS3", category: "Frontend", level: "Core" },
  { name: "JavaScript", category: "Frontend", level: "Learning" },
  { name: "React.js", category: "Frontend", level: "Learning" },
  { name: "Node.js", category: "Backend", level: "Learning" },
  { name: "Express.js", category: "Backend", level: "Learning" },
  { name: "MongoDB", category: "Database", level: "Learning" },
  { name: "Python", category: "Programming", level: "OOP" },
  { name: "Java", category: "Programming", level: "OOP" },
];

const defaultProjects = [
  {
    title: "Career Pilot",
    description:
      "An AI-powered career platform combining MERN stack development with Gemini AI to help users manage their career journey.",
    technologies: ["MERN", "Gemini AI", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    imageUrl: "",
    featured: true,
  },
  {
    title: "Digital Khata",
    description:
      "A digital record management application for managing records.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://digital-khata-one.vercel.app/",
    githubUrl: "https://github.com/ahafeezusmani79-art/digital-khata",
    imageUrl: "",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "A weather application with location-based weather information and forecast features.",
    technologies: ["React", "API", "MongoDB"],
    liveUrl: "https://ahafeezusmani79-art.github.io/weather/",
    githubUrl: "",
    imageUrl: "",
    featured: false,
  },
];

const projectOrder = [
  "Career Pilot",
  "Digital Khata",
  "Weather App",
  "Fitness Website",
  "Analytics Nest",
];

const projectHighlights = {
  "Career Pilot": [
    "Gemini AI-powered career assistant",
    "AI resume analysis and improvement",
    "Job application tracking",
    "MERN full-stack architecture",
  ],

  "Digital Khata": [
    "React-based user interface",
    "Express REST API integration",
    "MongoDB data persistence",
    "Full-stack record management",
  ],

  "Weather App": [
    "Live weather API integration",
    "Location-based weather information",
    "Weather forecast functionality",
    "MongoDB search history",
  ],

  "Fitness Website": [
    "Responsive frontend design",
    "Interactive JavaScript features",
    "HTML5 and CSS3",
  ],

  "Analytics Nest": [
    "Modern dashboard-style interface",
    "Responsive web design",
    "HTML, CSS and JavaScript",
  ],
};

const highlights = [
  {
    number: "01",
    title: "BS Computer Science",
    description: "University of Karachi",
  },
  {
    number: "02",
    title: "Full-stack development",
    description: "Learning and building with MERN",
  },
  {
    number: "03",
    title: "AI integration",
    description: "Exploring AI-powered applications",
  },
  {
    number: "04",
    title: "Project-based learning",
    description: "Turning ideas into practical products",
  },
];

function App() {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Could not load projects");
        }

        const data = await response.json();

        if (Array.isArray(data.projects) && data.projects.length > 0) {
          const sortedProjects = [...data.projects].sort((a, b) => {
            const indexA = projectOrder.indexOf(a.title);
            const indexB = projectOrder.indexOf(b.title);

            return (
              (indexA === -1 ? Infinity : indexA) -
              (indexB === -1 ? Infinity : indexB)
            );
          });

          setProjects(sortedProjects);
        }
      } catch (error) {
        console.error("Project loading error:", error.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          AH<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://github.com/ahafeezusmani79-art"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          View GitHub ↗
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section-container">
          <div className="hero-content">
            <div className="eyebrow-pill">
              <span className="status-dot"></span>
              BS COMPUTER SCIENCE STUDENT
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Abdul Hafeez
              <span>Usmani.</span>
            </h1>

            <h2>Full-Stack Developer & AI Enthusiast</h2>

            <p className="hero-description">
              I build modern web applications using the MERN stack and explore
              AI-powered solutions to solve real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                View My Work ↗
              </a>

              <a
                href="/resume.pdf"
                className="button button-outline"
                download="Abdul-Hafeez-Usmani-CV.pdf"
              >
                Download CV ↓
              </a>
            </div>

            <div className="hero-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Python</span>
              <span>Gemini AI</span>
              <span>HTML & CSS</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-glow"></div>

            <div className="photo-circle">
              <img
                src="/profile.jpeg"
                alt="Abdul Hafeez Usmani"
                className="profile-image"
              />
            </div>

            <div className="code-card">
              <div className="code-card-top">
                <span></span>
                <span></span>
                <span></span>
                <small>developer.js</small>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="code-indent">
                  name: <span className="code-green">"Hafeez"</span>,
                </p>
                <p className="code-indent">
                  focus: <span className="code-green">"Full Stack"</span>,
                </p>
                <p className="code-indent">
                  learning: <span className="code-green">"Every Day"</span>
                </p>
                <p>{"};"}</p>
              </div>
            </div>

            <div className="floating-label label-top">
              <span className="label-icon">{"</>"}</span>
              React.js
            </div>

            <div className="floating-label label-bottom">
              <span className="label-icon">✦</span>
              Node.js
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="section-container about-layout">
            <div className="about-copy">
              <p className="eyebrow">ABOUT ME</p>

              <h2>
                I'm passionate about
                <span> creating digital solutions.</span>
              </h2>

              <p>
                I'm pursuing a BS in Computer Science at the University of
                Karachi. I enjoy learning how applications work and building
                practical projects that solve real problems.
              </p>

              <p>
                My current focus is full-stack web development with the MERN
                stack, along with exploring AI-powered features and tools.
              </p>

              <a href="#projects" className="small-link">
                Discover my projects ↗
              </a>
            </div>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <div className="highlight" key={item.number}>
                  <div className="highlight-icon">{item.number}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills-section">
          <div className="section-container">
            <div className="center-heading">
              <p className="eyebrow">MY TECHNICAL SKILLS</p>
              <h2>
                Technologies I <span>work with.</span>
              </h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-heading">
                    <span className="skill-symbol">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>

                  <div className="skill-track">
                    <div className={`skill-fill skill-fill-${index + 1}`}></div>
                  </div>

                  <span className="skill-category">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects-section section-container">
          <div className="center-heading">
            <p className="eyebrow">FEATURED PROJECTS</p>
            <h2>
              Some of my <span>recent work.</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects I've built and worked on.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project._id || project.title}
              >
                <div className="project-preview">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} preview`}
                    />
                  ) : (
                    <div className={`project-art project-art-${index + 1}`}>
                      <span className="project-art-mark">
                        {project.title}
                      </span>
                      <span className="project-art-symbol">✳</span>
                    </div>
                  )}

                  {project.featured && (
                    <span className="project-badge">FEATURED</span>
                  )}
                </div>

                <div className="project-details">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-highlights">
                    <h4>Technical Highlights</h4>

                    <ul>
                      {(projectHighlights[project.title] || []).map(
                        (highlight) => (
                          <li key={highlight}>{highlight}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="project-tags">
                    {(project.technologies || []).slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Preview ↗
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="section-container">
            <div className="center-heading">
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>
                Let's build something <span>together.</span>
              </h2>
              <p className="section-subtitle">
                Have an opportunity, project, or just want to connect? I'd love
                to hear from you.
              </p>
            </div>

            <div className="contact-grid">
              <a
                href="mailto:ahafeezusmani79@gmail.com"
                className="contact-card"
              >
                <div className="contact-icon">✉</div>
                <div className="contact-card-copy">
                  <h3>Email Me</h3>
                  <p>For opportunities and collaborations</p>
                  <span>ahafeezusmani79@gmail.com ↗</span>
                </div>
              </a>

              <a
                href="https://github.com/ahafeezusmani79-art"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">⌘</div>
                <div className="contact-card-copy">
                  <h3>GitHub</h3>
                  <p>Explore my code and projects</p>
                  <span>Visit GitHub ↗</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">in</div>
                <div className="contact-card-copy">
                  <h3>LinkedIn</h3>
                  <p>Connect with me professionally</p>
                  <span>Find me on LinkedIn ↗</span>
                </div>
              </a>
            </div>

            <div className="contact-resume">
              <div>
                <p className="eyebrow">MY RESUME</p>
                <h3>Want to know more about my experience?</h3>
                <p>View or download my latest CV.</p>
              </div>

              <a
                href="/resume.pdf"
                className="button button-primary"
                download="Abdul-Hafeez-Usmani-CV.pdf"
              >
                Download My Resume ↓
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          AH<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Abdul Hafeez Usmani</p>
        <p>Designed & built with React.</p>
      </footer>
    </div>
  );
}

export default App;
