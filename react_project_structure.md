# React Project Structure (DevSecOps Perspective)

## 1. Root-level Files
| File | Description |
|------|--------------|
| **`package.json`** | Declares the project, dependencies, and scripts for build/test/start. Essential for reproducible environments in CI/CD. |
| **`Dockerfile`** | Defines how the app is built and run in a container — key for the *Build* and *Release* stages. |
| **`.env`** | Contains environment variables (API URLs, keys, etc.). **Must be secured** — never commit secrets to Git. |
| **`.gitignore`** | Lists files/folders excluded from version control (`node_modules/`, `.env`, build outputs, etc.). |
| **`README.md`** | Documentation for running, building, and testing the app. |

---

## 2. `public/` Folder
Contains **static assets** served as-is:

- **`index.html`** → The single HTML entry point for the React app.  
- **`favicon.ico`, `logo192.png`, `logo512.png`** → Icons and images.  
- **`.json` / `.jpg` files** → Static data or configuration accessible to the browser.  

> 💡 In DevOps, this folder is bundled directly into the final build (e.g., inside the Docker image).

---

## 3. `src/` Folder
Contains **all the React source code**, compiled during the build process:

### 📁 `components/`
Reusable UI parts like forms, buttons, navigation bars, etc.

### 📁 `context/`
Shared application state via React’s Context API (e.g., user session, global data).

### 📁 `pages/`
Full-page components linked to routes (e.g., Login, Home, Activity Detail).

> 🎯 In DevSecOps pipelines, this folder is usually scanned for **static analysis**, **linting**, and **vulnerability checks** (e.g., SonarQube, ESLint, SAST tools).

---

## 4. Other JavaScript and CSS Files

| File | Purpose |
|------|----------|
| **`App.js`** | Root component that wraps the entire application. |
| **`index.js`** | Entry point that renders React into `index.html`. |
| **`reportWebVitals.js`** | Collects performance metrics (can feed observability tools). |
| **`smoke.test.js`** | Unit or smoke tests executed in the *TEST* stage of CI/CD. |

