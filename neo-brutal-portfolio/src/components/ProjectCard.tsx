import { ArrowUpRight, Github, ExternalLink, FileText } from "lucide-react";

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  index: number;
}

const ProjectCard = ({ category, title, description, tags, codeUrl, liveUrl, paperUrl, index }: ProjectCardProps) => {
  return (
    <article 
      className="brutal-card p-6 md:p-8 group animate-fade-in"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="brutal-tag">{category}</span>
        <ArrowUpRight 
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
          size={24} 
        />
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-sm font-medium">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t-2 border-foreground">
        {codeUrl && (
          <a 
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium link-underline"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium link-underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        {paperUrl && (
          <a 
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium link-underline"
          >
            <FileText size={16} />
            Review Paper
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
