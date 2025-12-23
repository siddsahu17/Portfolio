const experiences = [
  {
    company: "ML Intern",
    role: "ML Intern (Remote)",
    period: "June 2025 – July 2025",
    description: "Built real-time restaurant dashboards (MongoDB/Redis). Improved forecasting accuracy (37% → 72%) with ARIMA/LSTM.",
  },
  {
    company: "Cloudnautics",
    role: "Cloud Intern (Remote)",
    period: "June 2024 – July 2024",
    description: "Deployed static sites on AWS S3/EC2. Containerized apps with Docker. Managed Apache web servers on Ubuntu.",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "District Debate",
    subtitle: "3rd Prize",
  },
  {
    icon: "⭐",
    title: "CodeChef Rating",
    subtitle: "1450 (Div-2)",
  },
  {
    icon: "👤",
    title: "Codeforces",
    subtitle: "950 Rating",
  },
  {
    icon: "✓",
    title: "Certification",
    subtitle: "Cisco CyberSec",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t-[3px] border-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Experience</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.company}
              className="brutal-card p-6 md:p-8 animate-fade-in"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
              <p className="text-muted-foreground font-medium mb-4">{exp.role}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => (
            <div 
              key={achievement.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h4 className="font-bold">{achievement.title}</h4>
              <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
