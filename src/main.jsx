import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Download,
  Menu,
  X,
  Monitor,
  ShieldCheck,
  Zap,
  Code2,
  Cpu,
  Laptop,
  Layers,
  ChevronRight,
} from "lucide-react";
import "./style.css";
function NexOSMark({ size = 37 }) {
  return (
    <svg
      className="nexos-logo-mark"
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NexOS logo"
      role="img"
    >
      <defs>
        <linearGradient id="nexosGradient" x1="5" y1="4" x2="39" y2="40">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#168BFF" />
          <stop offset="100%" stopColor="#0050D8" />
        </linearGradient>
      </defs>

      <rect width="44" height="44" rx="12" fill="#0B1B3A" />
      <path
        d="M9 32 L15 11 Q16 7 19 12 L27 29 Q29 34 32 29 L37 11"
        stroke="url(#nexosGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const features = [
    {
      icon: <Zap size={23} />,
      title: "Fast and lightweight",
      description:
        "A streamlined desktop experience designed to make everyday computing feel responsive.",
    },
    {
      icon: <ShieldCheck size={23} />,
      title: "Security focused",
      description:
        "Built around the ChromiumOS foundation, with security and system updates in mind.",
    },
    {
      icon: <Layers size={23} />,
      title: "Your apps, your workflow",
      description:
        "A platform planned for web apps, Linux tools, and additional app compatibility options.",
    },
    {
      icon: <Cpu size={23} />,
      title: "Multiple hardware targets",
      description:
        "Planned editions for selected Intel, AMD, ARM, and NVIDIA-based devices.",
    },
  ];


const editions = [
  {
    name: "NexOS Intel Lite",
    detail: "For selected Intel Celeron, Atom, and Pentium devices.",
    tag: "Entry-level PCs",
    hardware: "Selected Intel Celeron, Atom, and Pentium processors",
    architecture: "x86_64",
    link: "/intel-lite.html",
  },
  {
    name: "NexOS Intel",
    detail: "For selected 3rd–6th generation Intel Core systems.",
    tag: "Intel Core",
    hardware: "Selected 3rd–6th generation Intel Core processors",
    architecture: "x86_64",
    link: "/intel.html",
  },
  {
    name: "NexOS Intel Pro",
    detail: "For selected 7th–14th generation Intel Core systems.",
    tag: "Performance",
    hardware: "Selected 7th–14th generation Intel Core processors",
    architecture: "x86_64",
    link: "/intel-pro.html",
  },
  {
    name: "NexOS Intel Ultra",
    detail: "A planned edition for supported Intel Core Ultra hardware.",
    tag: "Modern Intel",
    hardware: "Selected Intel Core Ultra processors",
    architecture: "x86_64",
    link: "/intel-ultra.html",
  },
  {
    name: "NexOS AMD",
    detail: "For selected AMD processors and Radeon graphics hardware.",
    tag: "AMD systems",
    hardware: "Selected AMD Ryzen processors and Radeon graphics",
    architecture: "x86_64",
    link: "/amd.html",
  },
  {
    name: "NexOS NVIDIA",
    detail: "A planned edition for specifically supported NVIDIA platforms.",
    tag: "NVIDIA systems",
    hardware: "Selected NVIDIA platforms; compatibility testing required",
    architecture: "Platform dependent",
    link: "/nvidia.html",
  },
  {
    name: "NexOS for VM",
    detail: "Virtual machine editions for x86_64 and ARM-based systems.",
    tag: "Virtual Machines",
    hardware: "Compatible virtual machines and hypervisors",
    architecture: "x86_64 and ARM64",
    link: "/vm.html",
  },
  {
    name: "NexOS For You",
    detail: "Subscription editions planned for supported Chromebooks, ARM computers, and Microsoft Surface devices.",
    tag: "Subscription",
    hardware: "Selected Chromebooks, ARM computers, and Surface devices",
    architecture: "x86_64 and ARM64",
    link: "/for-you.html",
  },
  {
    name: "NexOS SBC",
    detail: "Planned editions for Raspberry Pi, Orange Pi, and supported single-board computers.",
    tag: "Single Board Computers",
    hardware: "Selected Raspberry Pi, Orange Pi, and other supported boards",
    architecture: "ARM64 or board-specific",
    link: "/sbc.html",
  },
];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <NexOSMark />
          <span>Nex<span className="brand-light">OS</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

       
<nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
  <a href="#features" onClick={closeMenu}>Features</a>
  <a href="#editions" onClick={closeMenu}>Editions</a>
  <a href="#about" onClick={closeMenu}>About</a>
  <a href="/support-center.html" onClick={closeMenu}>Support</a>
 <a href="/developer-center.html" onClick={closeMenu}>Developers</a>

 <a className="nav-download" href="/downloads.html" onClick={closeMenu}>
  Downloads <ArrowRight size={16} />
</a>
</nav>
</header>


      
<main>
  <section className="development-announcement">
    <div className="development-announcement-content">
      <span className="development-badge">IN DEVELOPMENT</span>
      <div>
        <strong>NexOS is under development</strong>
        <p>
          NexOS is an early-stage operating system project.
          Features, hardware compatibility, and installation
          images are still being developed and tested.
          No public installation downloads are available yet.
        </p>
      </div>
    </div>
  </section>

  <section className="hero-section" id="home">

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              THE NEXT DESKTOP EXPERIENCE
            </div>

            <h1>
              A new way to
              <br />
              experience <span>your PC.</span>
            </h1>

            <p className="hero-description">
              Meet NexOS — a modern operating system project built on the
              ChromiumOS foundation, designed with simplicity, speed, and
              flexibility in mind.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#editions">
                Explore NexOS <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#about">
                Discover the project
              </a>
            </div>

            <div className="hero-note">
              <ShieldCheck size={16} />
              Open-source project direction · Builds are not yet available
            </div>
          </div>

          <div className="hero-visual" aria-label="NexOS desktop concept preview">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="desktop-window">
              <div className="window-topbar">
                <div className="window-dots">
                  <i /><i /><i />
                </div>
                <span>NexOS Desktop</span>
                <span className="window-topbar-right">● ● ●</span>
              </div>
              <div className="desktop-screen">
                <div className="desktop-logo">N</div>
                <div className="desktop-welcome">Welcome to NexOS</div>
                <div className="desktop-subtitle">A fresh start for your desktop.</div>
                <div className="desktop-search">
                  <span>⌕</span> Search your apps and the web
                </div>
                <div className="desktop-apps">
                  <div><span className="app-icon app-blue">◈</span>Browser</div>
                  <div><span className="app-icon app-purple">▣</span>Files</div>
                  <div><span className="app-icon app-green">⌘</span>Terminal</div>
                  <div><span className="app-icon app-orange">⚙</span>Settings</div>
                </div>
              </div>
              <div className="desktop-shelf">
                <span className="shelf-dot active" />
                <span className="shelf-dot" />
                <span className="shelf-dot" />
                <span className="shelf-time">NexOS concept preview</span>
              </div>
            </div>
            <div className="floating-chip chip-top">
              <Zap size={16} /> Simple by design
            </div>
            <div className="floating-chip chip-bottom">
              <Monitor size={16} /> Made for your devices
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <span>BUILT AROUND FOUR IDEAS</span>
          <div><Zap size={17} /> Speed</div>
          <div><ShieldCheck size={17} /> Security</div>
          <div><Layers size={17} /> Flexibility</div>
          <div><Laptop size={17} /> Device choice</div>
        </section>

        <section className="section features-section" id="features">
          <div className="section-heading">
            <div className="eyebrow">WHY NEXOS</div>
            <h2>Everything starts with a <span>better foundation.</span></h2>
            <p>
              NexOS aims to bring a clean, approachable desktop experience
              to a range of supported devices.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#about" aria-label={`Learn about ${feature.title}`}>
                  Learn more <ChevronRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="edition-section" id="editions">
          <div className="section edition-inner">
            <div className="section-heading">
              <div className="eyebrow">ONE PROJECT. MANY DEVICES.</div>
              <h2>Find your <span>NexOS edition.</span></h2>
              <p>
                The project roadmap includes editions for different hardware
                families. Compatibility will depend on tested devices and drivers.
              </p>
            </div>

            <div className="edition-grid">
              
{editions.map((edition) => (
  <a
    className="edition-card"
    key={edition.name}
    href={edition.link || "#"}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div className="edition-card-top">
      <div className="edition-icon">
        <Cpu size={21} />
      </div>
      <span className="edition-tag">{edition.tag}</span>
    </div>

    <h3>{edition.name}</h3>
    <p>{edition.detail}</p>
    <span className="edition-status">
      {edition.link ? "Explore edition →" : "Planned edition"}
    </span>
  </a>
))}

            </div>

            <div className="edition-footnote">
              Edition names describe the project roadmap, not guaranteed
              compatibility. Hardware support will be confirmed through testing.
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <div className="eyebrow">THE NEXOS PROJECT</div>
            <h2>Built with an open-source <span>mindset.</span></h2>
            <p>
              NexOS is a developing operating system project based on
              ChromiumOS. The goal is to create a polished desktop experience
              while documenting hardware support, installation, and development.
            </p>
            <a className="text-link" href="#developers">
              Explore the project <ArrowRight size={17} />
            </a>
          </div>
          <div className="about-panel">
            <div className="about-panel-icon"><Code2 size={30} /></div>
            <div className="about-panel-label">PROJECT FOUNDATION</div>
            <h3>ChromiumOS-based</h3>
            <p>
              Building on an established open-source foundation, with NexOS
              branding, configuration, and project-specific development.
            </p>
            <div className="panel-divider" />
            <div className="panel-stat-row">
              <span>Project status</span>
              <strong>In development</strong>
            </div>
          </div>
        </section>

       

<section className="download-section" id="downloads">
  <div className="download-content">
    <div className="eyebrow">NEXOS DOWNLOAD CENTER</div>

    <h2>
      Find your <span>NexOS edition.</span>
    </h2>

    <p>
      Choose an edition for your hardware and processor.
      Official installation images will be published after
      development and hardware testing are complete.
    </p>

    <div className="download-edition-list">
      {editions.map((edition) => (
        <div className="download-edition" key={edition.name}>
          <div>
            <strong>{edition.name}</strong>
            <p>{edition.detail}</p>
           
<small>{edition.tag}</small>

<div className="download-requirements">
  <span>Hardware: {edition.hardware}</span>
 <span className="architecture-badge">
  {edition.architecture}
</span>
  <span>Compatibility: Under development</span>
</div>

          </div>

         
<span className="download-status">
  Build in progress
</span>

        </div>
      ))}
    </div>

    <div className="download-notice">
      <strong>Official releases are not available yet.</strong>
      <p>
        NexOS installation images, verified hardware lists,
        installation instructions, and release checksums
        will appear here when builds are ready.
      </p>
    </div>
  </div>
</section>


        <section className="section developer-section" id="developers">
          <div>
            <div className="eyebrow">BUILD WITH US</div>
            <h2>Made to grow with the <span>community.</span></h2>
            <p>
              Follow development, review the project architecture, and help
              improve documentation as NexOS takes shape.
            </p>
          </div>
          <a className="button button-secondary" href="mailto:hello@nexos.example">
            Contact the project <ArrowRight size={17} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <NexOSMark />
          <span>Nex<span className="brand-light">OS</span></span>
        </a>
        <p>© {new Date().getFullYear()} NexOS Project. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);