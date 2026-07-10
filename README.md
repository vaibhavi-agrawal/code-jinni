# 🧞 CodeJinni  – AI-Powered Web IDE


**CodeJinni** is a modern AI-powered web IDE that runs entirely inside your browser. It combines the power of **Next.js**, **WebContainers**, **Monaco Editor**, and **local Large Language Models (LLMs)** through **Ollama** to deliver an intelligent coding experience without requiring a traditional desktop IDE.

With AI-assisted code completion, an interactive chat assistant, built-in terminal, multiple project templates, and instant code execution, CodeJinni brings the complete development workflow into the browser.

---

## 🚀 Features

- 🔐 **OAuth Login with NextAuth** – Supports Google & GitHub login.
- 🎨 **Modern UI** – Built with TailwindCSS & ShadCN UI.
- 🌗 **Dark/Light Mode** – Seamlessly toggle between themes.
- 🧱 **Project Templates** – Choose from React, Next.js, Express, Hono, Vue, or Angular.
- 🗂️ **Custom File Explorer** – Create, rename, delete, and manage files/folders easily.
- 🖊️ **Enhanced Monaco Editor** – Syntax highlighting, formatting, keybindings, and AI autocomplete.
- 💡 **AI Suggestions with Ollama** – Local models give you code completion on `Ctrl + Space` or double `Enter`. Accept with `Tab`.
- ⚙️ **WebContainers Integration** – Instantly run frontend/backend apps right in the browser.
- 💻 **Terminal with xterm.js** – Fully interactive embedded terminal experience.
- 🤖 **AI Chat Assistant** – Share files with the AI and get help, refactors, or explanations.

---

## 🧱 Tech Stack

| Layer         | Technology                                   |
|---------------|----------------------------------------------|
| Framework     | Next.js 15 (App Router)                      |
| Styling       | TailwindCSS, ShadCN UI                       |
| Language      | TypeScript                                   |
| Auth          | NextAuth (Google + GitHub OAuth)             |
| Editor        | Monaco Editor                                |
| AI Suggestion | Ollama (LLMs running locally via Docker)     |
| Runtime       | WebContainers                                |
| Terminal      | xterm.js                                     |
| Database      | MongoDB (via DATABASE_URL)                   |

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/code-jinni.git
cd code-jinni
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file using the template:

```bash
cp .env.example .env.local
```

Then, fill in your credentials:

```env
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret
DATABASE_URL=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
```

### 4. Start Local Ollama Model

Install Ollama and pull your preferred coding model.

Example:

```bash
ollama run gpt-oss
```

or

```bash
ollama run codellama
```

---
Or use your preferred model that supports code generation.

### 5. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
.
├── app/                     # App Router-based pages & routes
├── components/              # UI components
├── editor/                 # Monaco, File Explorer, Terminal
├── lib/                     # Utility functions
├── public/                  # Static files (incl. thumbnail)
├── utils/                   # AI helpers, WebContainer logic
├── .env.example             # Example env vars
└── README.md
```

---

## 🎯 Keyboard Shortcuts

* `Ctrl + Space` or `Double Enter`: Trigger AI suggestions
* `Tab`: Accept AI suggestion
* `/`: Open Command Palette (if implemented)

---

<!-- ## ✅ Roadmap -->

# 🗺 Roadmap

- ✅ AI Chat Assistant
- ✅ AI Code Completion
- ✅ Monaco Editor
- ✅ Browser Terminal
- ✅ WebContainers
- ✅ Google Authentication
- ✅ GitHub Authentication
- ✅ Multiple Project Templates

---

# 💡 Why CodeJinni?

Unlike traditional online editors, CodeJinni combines a modern development environment with locally running AI models, enabling intelligent code generation, explanations, and autocomplete while keeping AI inference on your own machine through Ollama.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

##  Acknowledgements

Built using Next.js, Monaco Editor, WebContainers, Ollama, xterm.js, NextAuth.js, Tailwind CSS, and shadcn/ui.
```
