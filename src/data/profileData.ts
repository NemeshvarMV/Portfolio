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
  type: 'Internship' | 'Full-Time' | 'Contract';
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
  title: "AI Full Stack Developer & Python Engineer",
  avatar: "/profile.jpg",
  headline:
    "Specializing in Agentic RAG, LangGraph Workflows, FastAPI & Scalable AI Applications",
  summary:
    "AI Full Stack Developer, Python Engineer, and algorithmic problem solver with a strong foundation in Agentic AI, LangGraph, Retrieval-Augmented Generation (RAG), and production backend engineering. Dedicated to robust data structures, algorithmic efficiency, and disciplined systems design. Proven academic excellence with 1st Rank in the CSE Department of 23S14 (9.04 CGPA), hackathon winner, and active LeetCode problem solver.",
  contact: {
    email: "nemeshvaredu@gmail.com",
    phone: "+91 6369159612",
    location: "Tamil Nadu, India",
    github: "https://github.com/NemeshvarMV",
    linkedin: "https://www.linkedin.com/in/nemeshvar-m-v-347b55289/",
    leetcode: "https://leetcode.com/u/Nemeshvar/",
  },
  education: [
    {
      institution: "Kalasalingam Academy of Research and Education",
      degree: "B.Tech in Computer Science and Engineering (AIML)",
      cgpa: "9.04 / 10",
      location: "Krishnankoil, Tamil Nadu, India",
      duration: "Sep 2023 - May 2027",
      honors: "1st Rank in the CSE Department of 23S14",
    },
  ],
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "Java", "JavaScript"],
    },
    {
      category: "Problem Solving & Core CS",
      skills: [
        "Data Structures & Algorithms",
        "Algorithmic Problem Solving",
        "Time & Space Complexity",
        "Object-Oriented Design (OOD)",
        "LeetCode Practice",
        "Dynamic Programming & Graphs",
      ],
    },
    {
      category: "Generative AI & Agentic AI",
      skills: [
        "LangGraph",
        "Agentic AI",
        "State Machine Modeling",
        "Human-in-the-Loop AI",
        "RAG Systems",
        "LLMs",
        "Gemini API",
        "Prompt Engineering",
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "Classification",
        "Feature Engineering",
        "Model Evaluation",
        "Model Inference",
      ],
    },
    {
      category: "RAG & AI Infrastructure",
      skills: [
        "Qdrant",
        "Gemini Embeddings",
        "FlashRank",
        "Portkey",
        "NeMo Guardrails",
        "Ollama",
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        "FastAPI",
        "Pydantic",
        "Django",
        "REST APIs",
        "API Integration",
        "SQLAlchemy",
        "Alembic",
        "CRUD",
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        "React.js",
        "Streamlit",
        "HTML5",
        "CSS3 / Tailwind CSS",
        "JavaScript",
      ],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "Supabase", "MySQL", "SQLite", "Vector Databases (Qdrant)"],
    },
    {
      category: "Developer Tools & Observability",
      skills: [
        "Docker",
        "Docker Compose",
        "Jenkins",
        "AWS (EC2, ECR)",
        "CI/CD Automation",
        "Apache Maven",
        "Git",
        "GitHub",
        "VS Code",
        "Playwright",
        "Logfire",
        "LangSmith",
        "Jira",
      ],
    },
  ],
  experience: [
    {
      organization: "Infosys Springboard",
      role: "Artificial Intelligence Intern",
      location: "Tamil Nadu, India",
      duration: "Aug 2025 - Oct 2025",
      type: "Internship",
      technologies: [
        "Python",
        "NLP",
        "Computer Vision",
        "Speech Processing",
        "Translation Pipelines",
      ],
      responsibilities: [
        "Developed Agrobot, an AI-powered multilingual agricultural assistant using Python, NLP, and computer vision for crop leaf disease identification and context-aware agricultural guidance across 6 languages.",
        "Engineered NLP and knowledge-retrieval pipelines for language detection, keyword extraction, grammar correction, speech processing, approximate matching, translation, and symptom-based recommendations.",
        "Designed accessible multimodal input workflows enabling farmers to query crop health via text, audio, and visual leaf inspection.",
      ],
    },
    {
      organization: "Infyni",
      role: "Backend Developer Intern",
      location: "Haryana, India",
      duration: "May 2025 - July 2025",
      type: "Internship",
      technologies: [
        "Python",
        "Django",
        "REST APIs",
        "PostgreSQL / SQLite",
        "CRUD",
      ],
      responsibilities: [
        "Built foundational backend development skills with Django through hands-on implementation of URL routing, views, database operations, and CRUD functionality for a Library Management System.",
        "Collaborated with the engineering team through daily standups, code reviews, and feedback-driven iterations, gaining practical exposure to production backend workflows.",
        "Implemented relational database schemas, query optimization, and structured error handling for administrative endpoints.",
      ],
    },
  ],
  awards: [
    {
      title: "1st Rank in the CSE Department of 23S14",
      description:
        "Secured 1st Rank in the class batch 23S14 within the Computer Science and Engineering department with a CGPA of 9.04/10, demonstrating sustained academic and technical excellence.",
      year: "2024",
    },
    {
      title: "Winner – HACKARE 3.0 (Vintra 2025)",
      description:
        "Awarded 1st Prize in the intensive intra-college hackathon for developing high-impact software solutions under competitive time constraints.",
      year: "2025",
    },
  ],
};
