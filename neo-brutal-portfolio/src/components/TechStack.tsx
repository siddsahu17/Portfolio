const techCategories = [
  {
    title: "Machine Learning",
    items: ["ARIMA", "LSTM", "ANN", "U-Net", "Scikit/TensorFlow"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Flask", "REST APIs", "Redis/Caching"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Pinecone", "FAISS"],
  },
  {
    title: "Frontend",
    items: ["React", "Vite", "Plotly.js", "Tailwind"],
  },
  {
    title: "DevOps",
    items: ["AWS EC2/S3", "Docker", "Git/CI-CD"],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 border-t-[3px] border-foreground bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Technical Arsenal</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {techCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li 
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
