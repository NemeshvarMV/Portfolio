# Nemeshvar M V — AI Full Stack Developer & Python Engineer Portfolio

A production-grade, recruiter-focused personal developer portfolio built for **Nemeshvar M V** (B.Tech CSE AIML, 1st Rank in the CSE Department of 23S14, CGPA 9.04/10). Engineered with **React 18, TypeScript, Tailwind CSS, and Vite**, designed with zero AI-slop, and powered by a centralized, typed dynamic project data architecture.

---

## 🌟 Live Features & Highlights

- **Strict Source of Truth**: All claims, metrics, academic ranks, and project details are verified strictly against the candidate's authentic resume. Zero fabricated metrics or fake endorsements.
- **Modern Minimalist Visual System**: High-contrast dark theme (`#0a0d14`), monospace typography (`JetBrains Mono`), and crisp component borders (`#222f46`). No purple gradients, no pill buttons, no arbitrary percentage skill bars.
- **Dynamic Project Showcase**: Interactive category filtering (`AI / GenAI`, `Full Stack`, `Backend / Python`), deep-dive architectural specifications, and modal state management.
- **Production AI Graph Highlights**: Demonstrates real-world experience in LangGraph workflows, Qdrant vector search, FlashRank reranking, NeMo Guardrails, and FastAPI microservices.
- **Honest Communication Channel**: Client-side validated contact form with direct mailto dispatch and instant copy-to-clipboard actions (no fake mock endpoints).
- **Direct Resume Access**: Direct PDF download link pointing to the candidate's authentic document at [`public/resume.pdf`](./public/resume.pdf).
- **WCAG AA Compliant & Accessible**: Full keyboard navigation, ARIA dialog roles, focus trap, and responsive scaling from 320px mobile to 4K displays.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Language** | React 18, TypeScript (strict mode), Vite 5 |
| **Styling & Design System** | Tailwind CSS 3, Custom CSS variables, JetBrains Mono & Inter typography |
| **Icons & Visuals** | Lucide React |
| **State & Data Layer** | Centralized typed models (`src/data/profileData.ts`, `projects/projectData.ts`) |
| **Package Runtime** | Bun / Node.js |

---

## 🚀 Quickstart & Local Development

### Prerequisites

Ensure you have either **Bun** (recommended) or **Node.js (v18+)** installed.

### 1. Clone the Repository
```bash
git clone https://github.com/NemeshvarMV/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
Using Bun:
```bash
bun install
```
Or using npm / pnpm:
```bash
npm install
```

### 3. Start Development Server
```bash
bun run dev
# or
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
bun run build
# or
npm run build
```
The optimized production bundle will be emitted to `dist/`.

---

## 📂 Project Architecture

```
Portfolio/
├── .agents/                    # OpenSpec & GStack skill infrastructure
├── openspec/                   # Spec-driven proposal and changes
├── projects/
│   └── projectData.ts          # ⭐ SINGLE SOURCE OF TRUTH FOR ALL PROJECTS
├── public/
│   ├── favicon.svg             # Monogram SVG brand icon
│   └── resume.pdf              # Authentic candidate resume PDF
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky header with mobile drawer
│   │   │   └── Footer.tsx      # Monochromatic recruiter-focused footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Specialization headline, CTAs, Python graph teaser
│   │   │   ├── About.tsx       # Academic background & engineering philosophy
│   │   │   ├── Skills.tsx      # 8 categorized skill matrices (no percentage bars)
│   │   │   ├── Projects.tsx    # Filterable project grid & category tabs
│   │   │   ├── ProjectModal.tsx# Deep-dive architecture & trade-off modal
│   │   │   ├── Experience.tsx  # Chronological timeline (Infosys & Infyni)
│   │   │   ├── Education.tsx   # Degree, 9.04 CGPA, 1st Rank & HACKARE 3.0
│   │   │   └── Contact.tsx     # Validated form with mailto & email copy
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       ├── Modal.tsx       # Accessible dialog with escape key & focus trap
│   │       ├── ProjectCard.tsx # Structured project card
│   │       ├── SectionHeader.tsx
│   │       └── Tag.tsx
│   ├── data/
│   │   ├── profileData.ts      # Profile bio, social links, education, awards
│   │   └── projectData.ts      # Re-exports project single source of truth
│   ├── App.tsx                 # Root layout assembler
│   ├── index.css               # Tailwind directives & design tokens
│   └── main.tsx
├── index.html                  # SEO, Open Graph & Twitter metadata
├── package.json
├── tailwind.config.js          # Slate/zinc monochromatic palette configuration
└── tsconfig.json
```

---

## ⚡ Dynamic Project Addition Workflow

Whenever you complete a new project, you can add it to your portfolio in seconds **without modifying any UI component or layout code**.

### Step 1: Open `projects/projectData.ts`
Navigate to `projects/projectData.ts`.

### Step 2: Append a New Project Object
Add a new object to the `projectData` array satisfying the `Project` interface:

```typescript
{
  id: "your-new-project-id",
  title: "Your Project Name — Core Capability",
  category: "AI / GenAI", // Options: 'AI / GenAI' | 'Full Stack' | 'Backend / Python' | 'Systems / Tools'
  shortDescription: "A concise 1-2 sentence problem-oriented summary.",
  detailedDescription: "In-depth explanation of what the system does and why it was built.",
  problemStatement: "The concrete engineering bottleneck or real-world problem addressed.",
  solution: "The exact architectural solution implemented.",
  features: [
    "Key capability 1 with technical detail",
    "Key capability 2 with technical detail",
    "Key capability 3 with technical detail"
  ],
  technologies: [
    "Python", "FastAPI", "LangGraph", "Docker", "PostgreSQL"
  ],
  architecture: "Client Request ➔ Validation Middleware ➔ Async Worker ➔ DB Storage",
  challenges: [
    "Specific engineering challenge faced and overcome",
    "Performance optimization or edge case resolved"
  ],
  contributions: [
    "Your specific role and technical contributions",
    "Algorithms, schemas, or pipelines you authored"
  ],
  githubUrl: "https://github.com/NemeshvarMV/your-repo",
  liveUrl: "https://your-demo-url.com", // Optional
  featured: true,
  status: "Completed" // 'Completed' | 'In Progress' | 'Production'
}
```

### Step 3: Run the Build & Verify
```bash
bun run build
```
The website will **automatically**:
1. Compute the category filter count.
2. Render the new project card in the grid.
3. Generate the full interactive deep-dive modal.
4. Maintain responsive layouts across all device sizes.

---

## 🌐 Deployment Guidelines

### Option A: Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite. Set the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `bun run build` or `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Option B: Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com).
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Option C: GitHub Pages
1. In `vite.config.ts`, set `base: '/Portfolio/'` (matching your repo name).
2. Run `npm run build`.
3. Deploy the `dist` directory using GitHub Actions or `gh-pages`:
   ```bash
   npx gh-pages -d dist
   ```

---

## 📄 License & Attribution

Designed and engineered for **Nemeshvar M V**. All code is open-source under the [MIT License](LICENSE).
