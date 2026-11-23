
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./desktop.css";

function Desktop() {
  const [launcher, setLauncher] = useState(false);
  const [activeApp, setActiveApp] = useState("");
  const [search, setSearch] = useState("");
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    { name: "Browser", icon: "🌐" },
    { name: "Files", icon: "📁" },
    { name: "Settings", icon: "⚙️" },
    { name: "Terminal", icon: "⌨️" },
    { name: "App Store", icon: "🛍️" },
    { name: "Calendar", icon: "📅" },
  ];

  const openApp = (name) => {
    setActiveApp(name);
    setLauncher(false);
  };

  const filteredApps = apps.filter((app) =>
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className={`desktop ${darkMode ? "dark" : "light"}`}>
      <div className="desktop-top">
        <div className="top-brand">
          <span className="mini-logo">N</span>
          <strong>NexOS</strong>
        </div>

        <div className="top-status">
          <span>◉ Wi-Fi</span>
          <span>🔋 100%</span>
          <span>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })}
          </span>
        </div>
      </div>

      <section className="desktop-center">
        <div className="desktop-welcome">
          <div className="desktop-logo">N</div>
          <h1>Welcome to NexOS</h1>
          <p>Fast. Modern. Open.</p>
          <div className="desktop-date">
            {time.toLocaleDateString([], {
              weekday: "long",
              month: "long",
              day: "numeric"
            })}
          </div>
        </div>
      </section>

      {launcher && (
        <section className="launcher">
          <div className="launcher-heading">
            <h2>Applications</h2>
            <button onClick={() => setLauncher(false)}>✕</button>
          </div>

          <input
            placeholder="Search applications..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="app-grid">
            {filteredApps.map((app) => (
              <button
                className="app-item"
                key={app.name}
                onClick={() => openApp(app.name)}
              >
                <span>{app.icon}</span>
                <small>{app.name}</small>
              </button>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <p className="no-apps">No applications found.</p>
          )}
        </section>
      )}

      {activeApp && (
        <section className="app-window">
          <div className="window-titlebar">
            <strong>
              {apps.find((app) => app.name === activeApp)?.icon} {activeApp}
            </strong>
            <button onClick={() => setActiveApp("")}>✕</button>
          </div>

          <div className="window-content">
            {activeApp === "Files" && (
              <>
                <h2>My Files</h2>
                <div className="file-list">
                  <div>📁 Downloads</div>
                  <div>📁 Documents</div>
                  <div>📁 Pictures</div>
                  <div>📁 Music</div>
                </div>
                <p className="window-note">
                  These are sample folders in the desktop prototype.
                </p>
              </>
            )}

            {activeApp === "Settings" && (
              <>
                <h2>Settings</h2>
                <div className="setting-row">
                  <div>
                    <strong>Appearance</strong>
                    <p>Choose your desktop theme.</p>
                  </div>
                  <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Dark mode" : "Light mode"}
                  </button>
                </div>
                <div className="setting-row">
                  <div>
                    <strong>System</strong>
                    <p>NexOS Desktop Preview</p>
                  </div>
                </div>
                <div className="setting-row">
                  <div>
                    <strong>Version</strong>
                    <p>Prototype 0.1</p>
                  </div>
                </div>
              </>
            )}

            {activeApp === "Browser" && (
              <>
                <h2>NexOS Browser</h2>
                <p>A browser window concept for NexOS.</p>
                <div className="browser-bar">
                  <span>🔒</span>
                  <input
                    placeholder="Enter a website address..."
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        const value = event.currentTarget.value;
                        if (/^https?:\/\//i.test(value)) {
                          window.open(value, "_blank", "noopener,noreferrer");
                        } else if (value.includes(".")) {
                          window.open("https://" + value, "_blank", "noopener,noreferrer");
                        } else {
                          window.open(
                            "https://www.google.com/search?q=" +
                              encodeURIComponent(value),
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }
                    }}
                  />
                </div>
                <p className="window-note">
                  This opens websites in your existing browser.
                </p>
              </>
            )}

            {activeApp === "Terminal" && (
              <>
                <h2>Terminal</h2>
                <div className="terminal-box">
                  <p>NexOS Terminal Preview</p>
                  <p>Welcome to NexOS.</p>
                  <p>Terminal functionality is planned.</p>
                  <span>user@nexos:~$ _</span>
                </div>
              </>
            )}

            {activeApp === "App Store" && (
              <>
                <h2>NexOS App Store</h2>
                <div className="file-list">
                  <div>🌐 Web applications</div>
                  <div>🐧 Linux applications — planned</div>
                  <div>🤖 Android applications — planned</div>
                  <div>🪟 Windows compatibility — planned</div>
                </div>
              </>
            )}

            {activeApp === "Calendar" && (
              <>
                <h2>Calendar</h2>
                <div className="calendar-date">
                  {time.toLocaleDateString([], {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </div>
                <p>Your NexOS calendar preview.</p>
              </>
            )}
          </div>
        </section>
      )}

      <nav className="taskbar">
        <button
          className="launcher-button"
          title="App launcher"
          onClick={() => {
            setLauncher(!launcher);
            setSearch("");
          }}
        >
          <span className="mini-logo">N</span>
        </button>

        <div className="taskbar-apps">
          {apps.slice(0, 4).map((app) => (
            <button
              key={app.name}
              title={app.name}
              onClick={() => openApp(app.name)}
            >
              {app.icon}
            </button>
          ))}
        </div>

        <div className="taskbar-right">
          <span>◉</span>
          <span>🔊</span>
          <span>🔋</span>
          <span className="taskbar-clock">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })}
          </span>
        </div>
      </nav>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<Desktop />);
