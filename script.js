/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Theme Variables */
:root {
  --bg: #fef9ff;
  --text: #2e2e2e;
  --accent: #d7aaff;
  --accent-2: #ffb6c1;
  --glass: rgba(255, 255, 255, 0.3);
  --glass-border: rgba(255, 255, 255, 0.5);
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

body.dark {
  --bg: #1e1e2f;
  --text: #fefefe;
  --glass: rgba(255, 255, 255, 0.06);
  --glass-border: rgba(255, 255, 255, 0.15);
  --accent: #b47cff;
  --accent-2: #ff77b3;
}

body {
  font-family: 'Poppins', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
  scroll-behavior: smooth;
}

/* Navbar */
.navbar {
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: var(--shadow);
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
}

.toggle-dark {
  cursor: pointer;
  font-size: 1.2rem;
}

/* Hero Section */
.hero-section {
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

.hero-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.hero-left {
  max-width: 600px;
  margin: 0 auto;
}

.hero-left h1 {
  color: var(--accent);
  font-size: 1.8rem;
}

.hero-left h2 span {
  color: var(--accent-2);
}

.hero-avatar {
  max-width: 260px;
  border-radius: 50%;
  box-shadow: var(--shadow);
}

.hero-buttons {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.btn {
  background: var(--accent);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--accent-2);
  transform: scale(1.05);
}

.btn-outline {
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}

.btn-soft {
  background: rgba(255, 182, 193, 0.2);
  color: var(--accent-2);
}

/* Section Styling */
.section {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--accent);
}

.skills-grid,
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  margin-top: 2rem;
}

.project-card,
.cert-card {
  background: var(--glass);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: 0.3s ease;
}

.project-card:hover,
.cert-card:hover {
  transform: translateY(-4px);
}

/* Contact Form */
.contact-form {
  text-align: left;
  max-width: 600px;
  margin: 2rem auto;
}

.contact-form label {
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--accent);
  border-radius: 8px;
  margin-top: 0.5rem;
}

.contact-form button {
  margin-top: 1rem;
  background: var(--accent-2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
}

/* Footer */
.footer {
  padding: 2rem;
  text-align: center;
  background: var(--glass);
  backdrop-filter: blur(10px);
  color: var(--text);
  font-size: 0.9rem;
}

.footer a {
  color: var(--accent-2);
  text-decoration: none;
}

/* Back to Top */
.back-to-top {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background: var(--accent);
  color: white;
  padding: 10px;
  border-radius: 50%;
  text-decoration: none;
  font-weight: bold;
  box-shadow: var(--shadow);
}

/* Mobile Layout */
@media (min-width: 768px) {
  .hero-grid {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .hero-left {
    flex: 1;
    padding-right: 2rem;
  }

  .hero-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
