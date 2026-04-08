import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects — Dev",
  description: "A collection of projects I've built or contributed to.",
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: "Project Alpha",
    description:
      "A modern web application built with React and TypeScript. Features real-time updates, dark mode, and a fully responsive layout.",
    tags: ["React", "TypeScript", "Tailwind CSS", "WebSocket"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    stars: 128,
  },
  {
    title: "Project Beta",
    description:
      "An open-source productivity tool for developers. Includes CLI support, plugin system, and integrations with popular services.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    stars: 64,
  },
  {
    title: "Project Gamma",
    description:
      "A design system and component library built for speed. Fully typed, accessible, and compatible with multiple frameworks.",
    tags: ["Storybook", "CSS", "Figma", "A11y"],
    github: "https://github.com",
    demo: null,
    featured: true,
    stars: 32,
  },
  {
    title: "Project Delta",
    description:
      "A CLI tool for scaffolding and managing project templates. Reduces setup time for new projects significantly.",
    tags: ["Node.js", "CLI", "Bash"],
    github: "https://github.com",
    demo: null,
    featured: false,
    stars: 16,
  },
  {
    title: "Project Epsilon",
    description:
      "A browser extension that enhances GitHub with additional features like code folding and PR statistics.",
    tags: ["Browser Extension", "JavaScript", "Chrome API"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    stars: 8,
  },
  {
    title: "Project Zeta",
    description:
      "A simple markdown-based blog engine with RSS support, syntax highlighting, and SEO optimization.",
    tags: ["Markdown", "SSG", "RSS"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    stars: 24,
  },
];

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground max-w-xl">
          A selection of things I&apos;ve built — from side projects and open source contributions to experiments.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Featured</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardContent className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3" />
                    {project.stars}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-3 w-3" /> Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" /> Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Other Projects</h2>
        <div className="divide-y">
          {others.map((project) => (
            <div key={project.title} className="py-4 flex flex-col md:flex-row md:items-center gap-3">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{project.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3" />
                    {project.stars}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-3 w-3" /> Code
                  </Link>
                </Button>
                {project.demo && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" /> Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
