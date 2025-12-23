import ProjectCard from "./ProjectCard";

const projects = [
  {
    category: "LLM & RAG",
    title: "LLM-Powered Research Paper Analysis",
    description: "Document intelligence with LLM parsing, FAISS/Pinecone semantic search, and modular FastAPI backend.",
    tags: ["Python", "FastAPI", "LangChain", "Pinecone"],
    codeUrl: "https://github.com/siddsahu17/SAD-minor-Project",
  },
  {
    category: "Full-Stack Web App",
    title: "Crypto Dashboard",
    description: "Real-time dashboard with Plotly.js, sub-100ms LLM summarization, and WebSocket streaming.",
    tags: ["React", "FastAPI", "Plotly.js", "Redis"],
    codeUrl: "https://github.com/siddsahu17/CryptoCurrency-Dashboard",
  },
  {
    category: "AI WebGIS",
    title: "FRA Atlas WebGIS",
    description: "Digitized platform with U-Net satellite segmentation and RAG chatbot for citizen guidance.",
    tags: ["PostGIS", "TensorFlow", "React", "GeoServer"],
    codeUrl: "https://github.com/siddsahu17/FRA",
  },
  {
    category: "Medical AI",
    title: "Alzheimer Prediction",
    description: "ANN-based prediction pipeline with full preprocessing and serialized model deployment.",
    tags: ["Keras", "Scikit-Learn", "FastAPI", "Docker"],
    codeUrl: "https://github.com/siddsahu17/Alzheimer-Prediction",
  },
  {
  category: "Assistive AI / Accessibility",
  title: "Braille Script to Audio Transcription System",
  description: "Research-backed assistive AI system that converts Braille scripts into structured text and natural speech audio, enabling accessible content consumption for visually impaired users.",
  tags: ["Python", "NLP", "Text-to-Speech", "Accessibility", "Assistive AI"],
  codeUrl: "https://github.com/siddsahu17/airy-ui-makeover",
  paperUrl: "https://<LINK_TO_REVIEW_PAPER>",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t-[3px] border-foreground">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">SELECTED WORK</h2>
          <p className="text-muted-foreground">01 — 0{projects.length}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
