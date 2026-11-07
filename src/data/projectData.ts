export type ProjectCategory = 'AI / GenAI' | 'Full Stack' | 'Backend / Python' | 'Systems / Tools';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categories?: ProjectCategory[];
  shortDescription: string;
  detailedDescription: string;
  problemStatement: string;
  solution: string;
  features: string[];
  technologies: string[];
  architecture: string;
  challenges: string[];
  contributions: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Production';
}

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'AI / GenAI',
  'Full Stack',
  'Backend / Python',
  'Systems / Tools',
];

export const projectData: Project[] = [
  {
    id: "contextforge",
    title: "ContextForge — Agentic RAG Assistant",
    category: "AI / GenAI",
    categories: ["AI / GenAI", "Backend / Python"],
    shortDescription: "Enterprise-focused agentic RAG platform using LangGraph, FastAPI, Qdrant, and Gemini Embeddings with NeMo Guardrails safety mechanisms.",
    detailedDescription: "ContextForge is a production-oriented agentic Retrieval-Augmented Generation (RAG) system engineered for enterprise document question answering. It combines LangGraph workflow orchestration, Qdrant vector storage, and FlashRank semantic reranking with NeMo Guardrails to eliminate hallucinations and jailbreak attempts.",
    problemStatement: "Traditional RAG pipelines often suffer from hallucinated responses, off-topic drift, lack of observability, and brittle embedding failure handling when operating on dense enterprise documents.",
    solution: "Architected a multi-stage agentic workflow with LangGraph, combining semantic vector search in Qdrant with FlashRank cross-encoder reranking, guarded by NeMo Guardrails and monitored with Logfire and LangSmith.",
    features: [
      "End-to-end document parsing, chunking, and vector indexing with Gemini Embeddings",
      "Two-stage retrieval pipeline with Qdrant vector search and FlashRank semantic reranking",
      "NeMo Guardrails enforcement for off-topic query filtering and jailbreak prevention",
      "Portkey model routing, caching, and automatic embedding fallback with retry logic",
      "Interactive Streamlit UI with grounded source citation and confidence inspection",
      "Distributed telemetry and LLM observability powered by Logfire and LangSmith",
    ],
    technologies: [
      "LangGraph",
      "FastAPI",
      "Qdrant",
      "Gemini API",
      "FlashRank",
      "Portkey",
      "NeMo Guardrails",
      "Streamlit",
      "Logfire",
      "LangSmith",
      "Python",
    ],
    architecture: "Document Ingestion (Parser → Semantic Chunker → Gemini Embeddings) ➔ Qdrant Vector DB ➔ LangGraph Agent Controller ➔ FlashRank Semantic Reranker ➔ NeMo Guardrails Safety Verification ➔ Portkey Gateway ➔ Attributed Context Response",
    challenges: [
      "Mitigating off-topic drift and hallucination risks across uncurated enterprise documents",
      "Handling upstream embedding provider rate limits through resilient fallback retry logic",
      "Optimizing cross-encoder reranking latency without sacrificing document retrieval recall",
    ],
    contributions: [
      "Designed the complete LangGraph agent state machine and multi-stage retrieval logic",
      "Implemented Portkey caching and resilient embedding retry mechanisms",
      "Integrated NeMo Guardrails and Logfire telemetry for full query auditability and tracing",
    ],
    githubUrl: "https://github.com/NemeshvarMV/ContextForge",
    featured: true,
    status: "Completed",
  },
  {
    id: "agrobot",
    title: "Agrobot — Multilingual Agricultural Assistant",
    category: "AI / GenAI",
    categories: ["AI / GenAI", "Backend / Python"],
    shortDescription: "Multilingual AI agricultural assistant utilizing Python, NLP, and computer vision for crop disease identification across 6 regional languages.",
    detailedDescription: "Agrobot is an accessible farming intelligence assistant engineered to support rural agricultural communities through multimodal inputs (voice, text, and leaf imagery) across 6 languages, providing symptom-based disease identification and context-aware guidance.",
    problemStatement: "Smallholder farmers often face devastating crop losses due to delayed disease identification, low literacy barriers, and lack of immediate access to regional agronomic guidance.",
    solution: "Engineered a unified multimodal assistant integrating computer vision for visual leaf disease classification with NLP translation, speech processing, and knowledge retrieval pipelines.",
    features: [
      "Image-based leaf disease identification powered by computer vision classification models",
      "Voice processing pipeline with speech-to-text and audio response generation",
      "Multilingual translation and language detection spanning 6 regional languages",
      "Keyword extraction, grammar correction, and approximate phonetic string matching",
      "Context-aware symptom-to-treatment knowledge mapping and recommendations",
      "Django backend architecture for scalable query processing and API delivery",
    ],
    technologies: [
      "Python",
      "Computer Vision",
      "Natural Language Processing",
      "Django",
      "Speech Processing",
      "Machine Learning",
      "REST APIs",
    ],
    architecture: "Multimodal Input (Image / Audio / Text) ➔ Audio & Speech Preprocessing ➔ Language Detection & Normalization ➔ Vision Classifier & NLP Retrieval Engine ➔ Symptom-to-Treatment Resolver ➔ Regional Language Voice & Text Output",
    challenges: [
      "Achieving reliable disease classification across diverse lighting, soil backgrounds, and mobile camera resolutions",
      "Handling colloquial dialect phrasing and non-standard terminology via approximate phonetic matching",
      "Optimizing end-to-end latency for voice inference on bandwidth-constrained 3G/4G connections",
    ],
    contributions: [
      "Engineered the end-to-end NLP and knowledge-retrieval pipelines",
      "Implemented voice processing and multilingual symptom-to-treatment mapping across 6 languages",
      "Built the Django API service coordinating vision and language inferences",
    ],
    githubUrl: "https://github.com/NemeshvarMV/Agrobot",
    featured: true,
    status: "Completed",
  },
  {
    id: "healthcare-automation",
    title: "Healthcare Workflow Automation & Booking System",
    category: "Full Stack",
    categories: ["Full Stack", "Backend / Python"],
    shortDescription: "AI-enabled healthcare platform integrating diagnostic ML inference (Fibromyalgia prediction) with Gemini conversational care and secure JWT/RBAC workflows.",
    detailedDescription: "A comprehensive digital healthcare management platform combining predictive machine learning diagnostics with conversational triage, automated doctor booking, and role-based administrative workflows.",
    problemStatement: "Healthcare portals typically separate administrative scheduling from clinical intelligence, leading to fragmented patient experiences, delayed specialist consultations, and disconnected record tracking.",
    solution: "Developed an integrated platform pairing an asynchronous FastAPI backend and React frontend with trained ML classification models and a Gemini-powered medical assistant.",
    features: [
      "Predictive diagnostic assessment using Logistic Regression and Random Forest models for fibromyalgia prediction",
      "Gemini-powered medical consultation chatbot for symptom inquiry and guidance",
      "Role-Based Access Control (RBAC) supporting distinct Patient and Doctor portal views",
      "Secure JWT authentication, token rotation, and password encryption",
      "Asynchronous REST API endpoints powered by FastAPI and PostgreSQL",
      "Responsive React.js interface with automated appointment booking and medical history tracking",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Scikit-Learn",
      "Machine Learning",
      "Gemini API",
      "JWT",
      "Tailwind CSS",
    ],
    architecture: "React.js Client ➔ FastAPI REST API Layer (JWT Auth & RBAC Middleware) ➔ Predictive ML Engine (Random Forest / Logistic Regression) & Gemini AI Service ➔ PostgreSQL Database",
    challenges: [
      "Calibrating diagnostic model precision and handling feature imbalance in clinical survey data",
      "Enforcing strict patient-doctor data segregation through RBAC and JWT validation",
      "Managing asynchronous streaming responses between the Gemini service and React frontend",
    ],
    contributions: [
      "Trained and evaluated Logistic Regression and Random Forest diagnostic models",
      "Designed the complete FastAPI REST architecture, database schema, and JWT authentication",
      "Built the React user interface for appointment booking and ML inference results",
    ],
    githubUrl: "https://github.com/NemeshvarMV/HealthCare",
    featured: true,
    status: "Completed",
  },
  {
    id: "ai-rca-workspace",
    title: "AI-Powered Root Cause Analysis (RCA) Workspace",
    category: "AI / GenAI",
    categories: ["AI / GenAI", "Backend / Python", "Full Stack"],
    shortDescription: "Life sciences cGMP compliance workspace automating pharmaceutical deviation investigations via LangGraph state machines, 5 Whys & 6M Ishikawa modeling.",
    detailedDescription: "An end-to-end AI-powered Root Cause Analysis platform engineered for pharmaceutical deviation investigations under ICH Q9(R1), ICH Q10, and FDA 21 CFR Part 11 guidelines. Developed as an independent technical prototype for AIVOA.AI, the system eliminates 4 to 8 hours of manual transcription per deviation by ingesting multi-modal batch records and synthesizing dual-methodology causal models with 100% human-in-the-loop audit sign-off.",
    problemStatement: "In cGMP pharmaceutical manufacturing, quality deviations (e.g. temperature excursions, equipment drift, yield failures) require exhaustive root-cause investigations. Quality engineers typically lose 4 to 8 hours per deviation manually re-keying batch records, operator shift notes, and email alerts across disconnected tools.",
    solution: "Architected a domain-compliant FastAPI and LangGraph workspace that normalizes multi-modal inputs, extracts traceable Critical Quality Attributes (CQAs), generates 5 Whys and 6M Ishikawa causal ladders, and enforces an immutable 21 CFR Part 11 audit ledger before committing to PostgreSQL / Supabase.",
    features: [
      "Multi-Modal Intake Engine: Seamlessly processes PDF batch reports, operator shift notes, and raw email alert strings through a unified FastAPI ingestion pipeline",
      "Traceable CQA Extraction: Automatically identifies Critical Process Parameters (CPPs), batch IDs, and failure modes with visual .field-ai-badge provenance indicators",
      "Dual-Methodology RCA Engine: LangGraph state machine generating 5 Whys Sequential Ladders and 6M Ishikawa Fishbone matrices (Man, Machine, Material, Method, Measurement, Milieu)",
      "ICH Q10-Compliant CAPA Suite: Structural division between immediate corrective containment actions and systemic preventive engineering controls with effectiveness checks",
      "FDA 21 CFR Part 11 Audit Ledger: Immutable, timestamped event log capturing every AI extraction, investigator edit, status transition, and formal sign-off",
      "100% Human-in-the-Loop Oversight: Enforces mandatory investigator verification before records commit to the database, eliminating hallucination risks",
    ],
    technologies: [
      "LangGraph",
      "FastAPI",
      "Python 3.11",
      "React 18",
      "Pydantic v2",
      "PostgreSQL",
      "Supabase",
      "Playwright",
      "Tailwind CSS",
      "Vite",
    ],
    architecture: "Multi-Modal Ingestion (PDF / Shift Notes / Email) ➔ FastAPI Backend Gateway (Pydantic v2 Validation) ➔ LangGraph Multi-Stage RCA Workflow (CQA Extraction → 5 Whys → 6M Ishikawa → Evidence Gap Detection → CAPA Verification) ➔ React 18 4-Step Stepper (Human-in-the-Loop Sign-off) ➔ PostgreSQL / Supabase Immutable 21 CFR Part 11 Audit Ledger",
    challenges: [
      "Eliminating brittle prompt chaining by engineering an isolated, observable LangGraph state machine where each investigation phase runs in deterministic steps",
      "Defensive normalization of heterogeneous inputs (scanned PDFs, unstructured shift logs, MIME email headers) into strict Pydantic v2 schemas without payload dropouts",
      "Hardening against hallucinations and ensuring cGMP data integrity by requiring mandatory human investigator sign-off before database commits",
    ],
    contributions: [
      "Independently designed and implemented the end-to-end full stack architecture for the AIVOA.AI AI Product Engineer technical evaluation",
      "Built the LangGraph multi-stage state machine orchestrating CQA extraction, 5 Whys laddering, 6M Ishikawa classification, and CAPA generation",
      "Engineered the React 18 multi-step investigation workspace with inline AI field verification badges and end-to-end Playwright tests",
    ],
    githubUrl: "https://github.com/NemeshvarMV/AI-Powered-Root-Cause-Analysis-RCA-Workspace",
    featured: true,
    status: "Completed",
  },
  {
    id: "aws-cicd-pipeline",
    title: "End-to-End Automated CI/CD Pipeline for Containerized Microservices & MySQL on AWS",
    category: "Systems / Tools",
    categories: ["Systems / Tools"],
    shortDescription: "Automated zero-touch deployment pipeline integrating Jenkins, GitHub Webhooks, multi-stage Docker builds, AWS ECR, and Docker Compose on AWS EC2.",
    detailedDescription: "An automated Continuous Integration and Continuous Deployment (CI/CD) pipeline engineered for a containerized REST microservice application backed by MySQL 8.0 on AWS EC2. The pipeline automates the complete lifecycle—from Git commit to live production rollout—incorporating multi-stage Docker optimization, volume-persisted database migrations, container health-check gating, and DevSecOps secret decoupling.",
    problemStatement: "Manual deployment workflows for multi-container microservice and MySQL stacks typically suffer from ~25-minute release cycles, deployment drift, potential database race conditions on container restart, and elevated risks of credential exposure in source code.",
    solution: "Engineered a zero-touch declarative Jenkins pipeline-as-code triggered by GitHub webhooks. Automated multi-stage Docker packaging, pushed versioned container artifacts to AWS ECR, orchestrated service boot with Docker Compose health-gating (mysqladmin ping), and enforced near-zero downtime rollouts with volume data persistence.",
    features: [
      "Zero-Touch Automated Triggering: GitHub Webhooks trigger Jenkins pipeline execution immediately upon pushing code to master",
      "Optimized Multi-Stage Containerization: Builder to slim runtime Alpine container, slashing image footprint by >65%",
      "Multi-Container Orchestration & Health Gating: Docker Compose with service_healthy condition (mysqladmin ping) preventing database race conditions",
      "Volume-Persisted Data Reliability: Persistent named volume (mysql_data) guaranteeing zero data loss across pipeline updates and container restarts",
      "Port Collision Prevention: Isolated Jenkins Dashboard on port 8080 while hosting backend REST API on port 8081 on a single EC2 host",
      "Infrastructure & Memory Optimization: Configured 4 GB swap space on AWS EC2 Free Tier (t3.micro), preventing Linux OOM killer crashes during compilation and packaging",
      "DevSecOps & Secrets Hygiene: Zero hardcoded credentials; decoupled environment variables into .env templates and Jenkins Credential Store",
    ],
    technologies: [
      "Containerized REST APIs",
      "MySQL 8.0",
      "Docker",
      "Docker Compose",
      "Jenkins",
      "AWS EC2",
      "AWS ECR",
      "Docker Volumes",
      "CI/CD Automation",
      "Linux / Bash",
    ],
    architecture: "GitHub Push (Master) ➔ Webhook (HTTP POST) ➔ Jenkins Declarative Pipeline (Clean Package ➔ Multi-Stage Docker Build ➔ AWS ECR Push) ➔ SSH Remote Deploy ➔ Docker Compose Rollout (mysqladmin ping health check) ➔ Live Backend REST API (:8081) & MySQL on AWS EC2",
    challenges: [
      "Preventing Linux Out-Of-Memory (OOM) crashes on AWS t3.micro instances during concurrent build compilation and Docker daemon packaging by configuring 4 GB swap memory",
      "Eliminating microservice boot-time connection failures before MySQL database initialization by implementing Docker Compose health checks and depends_on service gating",
      "Preventing port collisions between Jenkins automation server (port 8080) and backend REST microservice (port 8081) on a shared cloud VM host",
    ],
    contributions: [
      "Architected and implemented the complete Jenkins declarative Pipeline-as-Code from source checkout to cloud rollout",
      "Designed the multi-stage Docker build pipeline reducing final image footprint by over 65%",
      "Configured AWS EC2 infrastructure, security groups, swap space, and ECR container registry permissions",
      "Reduced deployment cycle time from ~25 minutes to an automated ~2 minutes 45 seconds with near-zero downtime",
    ],
    githubUrl: "https://github.com/NemeshvarMV/spring-boot-cicd",
    featured: true,
    status: "Completed",
  },
];
