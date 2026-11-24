export interface Education {
  institution: string;
  degree: string;
  cgpa: string;
  location: string;
  duration: string;
  honors?: string;
}

export interface Experience {
  organization: string;
  role: string;
  location: string;
  duration: string;
  type: 'Internship' | 'Full-Time' | 'Contract' | 'Project-Based';
  technologies: string[];
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  title: string;
  description: string;
  year?: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  summary: string;
  avatar?: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    leetcode?: string;
  };
  education: Education[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  awards: Award[];
}

export const profileData: Profile = {
  name: "Nemeshvar M V",
  title: "AI/ML Engineer",
  avatar: "/profile.jpg",
  headline:
    "Specializing in Machine Learning, Generative AI, Agentic RAG, LangGraph & FastAPI",
  summary:
    "AI/ML Engineer with hands-on experience in developing Machine Learning, Generative AI, and Agentic AI applications using Python. Skilled in building REST APIs, Retrieval-Augmented Generation (RAG) systems, intelligent workflows, and backend applications using FastAPI, Django, LangGraph, and vector databases. Experienced in implementing ML models, LLM integrations, semantic search, and AI-powered automation, with a focus on building reliable and scalable software solutions.",
  contact: {
    email: "nemeshvaredu@gmail.com",
    phone: "+91 6369159612",
    location: "Tamil Nadu, India",
    github: "https://github.com/NemeshvarMV",
    linkedin: "https://www.linkedin.com/in/nemeshvar-m-v",
    leetcode: "https://leetcode.com/u/Nemeshvar/",
  },
  education: [
    {
      institution: "Kalasalingam Academy of Research and Education",
      degree: "B.Tech, Computer Science & Engineering (AI & ML)",
      cgpa: "9.04/10",
      location: "Krishnankoil, Tamil Nadu, India",
      duration: "Sep 2023 – May 2027",
      honors: "1st Rank in the CSE Department (batch 23S14)",
    },
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "SQL", "JavaScript"],
    },
    {
      category: "Backend Development",
      skills: [
        "FastAPI",
        "Django",
        "REST APIs",
        "SQLAlchemy",
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
      ],
    },
    {
      category: "Machine Learning & Deep Learning",
      skills: [
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "Classification",
        "Feature Engineering",
        "Data Preprocessing",
        "Model Evaluation",
        "Computer Vision",
      ],
    },
    {
      category: "Generative AI & Agentic AI",
      skills: [
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Agentic AI",
        "LangGraph",
        "Prompt Engineering",
        "Gemini API",
        "LLM Integration",
      ],
    },
    {
      category: "RAG & AI Engineering",
      skills: [
        "Semantic Search",
        "Embeddings",
        "Vector Databases",
        "Qdrant",
        "Gemini Embeddings",
        "FlashRank",
        "NeMo Guardrails",
      ],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      category: "Libraries & Frameworks",
      skills: ["NumPy", "Pandas", "React.js", "Streamlit"],
    },
    {
      category: "Developer Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Logfire",
        "Pytest",
        "Poetry",
        "Docker",
      ],
    },
    {
      category: "Problem Solving & Core CS",
      skills: [
        "Data Structures & Algorithms",
        "Algorithmic Problem Solving",
        "Bayesian Smoothing",
        "Pairwise Preference Learning (Bradley-Terry)",
        "Workload Fairness & Gini Optimization",
        "LeetCode Practice",
        "Dynamic Programming & Graphs",
      ],
    },
  ],
  experience: [
    {
      organization: "Infosys Springboard",
      role: "Artificial Intelligence Intern",
      location: "Tamil Nadu, India",
      duration: "Aug 2025 – Oct 2025",
      type: "Internship",
      technologies: [
        "Python",
        "NLP",
        "Computer Vision",
        "Speech Processing",
        "Translation Pipelines",
      ],
      responsibilities: [
        "Developed AgroBot, a multilingual AI agricultural assistant using Python, NLP and Computer Vision for crop disease identification and context-aware recommendations across six languages.",
        "Built NLP pipelines for language detection, keyword extraction, grammar correction, speech processing and translation.",
        "Integrated language-processing and knowledge-retrieval components to deliver symptom-based recommendations.",
      ],
    },
    {
      organization: "Infyni",
      role: "Backend Developer Intern",
      location: "Haryana, India",
      duration: "May 2025 – Jul 2025",
      type: "Internship",
      technologies: [
        "Python",
        "Django",
        "REST APIs",
        "Database Operations",
        "CRUD",
      ],
      responsibilities: [
        "Developed Django backend functionality including URL routing, views, database operations and CRUD features.",
        "Collaborated with the team through task updates, code reviews and feedback-driven improvements.",
      ],
    },
    {
      organization: "TheCarePal & AIVOA.AI",
      role: "Independent AI/ML Project Developer",
      location: "Remote",
      duration: "Project-Based Experience",
      type: "Project-Based",
      technologies: [
        "Python",
        "LangGraph",
        "FastAPI",
        "Scikit-learn",
        "Bradley-Terry Model",
        "Bayesian Ranking",
        "React.js",
      ],
      responsibilities: [
        "TheCarePal – CareMatch AI: Developed a clinical nurse-to-patient matching engine using Bayesian ranking, workload fairness optimization, and a Bradley-Terry ML model, achieving 84.3% accuracy.",
        "AIVOA.AI – AI-Powered RCA & CAPA: Built an AI-powered root cause analysis platform using LangGraph, FastAPI, and React to automate pharmaceutical deviation investigations.",
      ],
    },
  ],
  awards: [
    {
      title: "1st Rank in the CSE Department (batch 23S14)",
      description:
        "Secured 1st Rank in the CSE Department (batch 23S14) with a CGPA of 9.04/10, demonstrating sustained academic and technical excellence.",
      year: "2024",
    },
    {
      title: "Winner – HACKARE 3.0, Vintra 2025",
      description:
        "1st Prize in the intra-college hackathon for developing high-impact software solutions under competitive time constraints.",
      year: "2025",
    },
  ],
};
