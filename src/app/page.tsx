import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const featuredProjects = [
  {
    title: "Project Alpha",
    description: "A modern web application built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "/projects",
  },
  {
    title: "Project Beta",
    description: "An open-source tool for developers to boost productivity.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    href: "/projects",
  },
  {
    title: "Project Gamma",
    description: "A design system and component library for rapid UI development.",
    tags: ["Storybook", "CSS", "Figma"],
    href: "/projects",
  },
];

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"];

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 space-y-24">
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for work</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I&apos;m a{" "}
            <span className="text-foreground">Frontend Developer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build fast, accessible, and beautiful web experiences. Passionate about
            clean code, great design, and open source.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Featured Projects</h2>
          </div>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            All projects <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <Link key={project.title} href={project.href}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Recent Posts</h2>
        </div>

        <div className="space-y-4">
          {[
            { title: "Getting started with Next.js App Router", date: "Apr 2025", href: "/blog" },
            { title: "Why I switched to Tailwind CSS", date: "Mar 2025", href: "/blog" },
            { title: "Building accessible React components", date: "Feb 2025", href: "/blog" },
          ].map((post) => (
            <Link key={post.title} href={post.href}
              className="flex items-center justify-between py-3 border-b last:border-0 hover:text-foreground text-muted-foreground transition-colors group">
              <span className="text-sm font-medium text-foreground group-hover:underline underline-offset-4">
                {post.title}
              </span>
              <span className="text-xs text-muted-foreground shrink-0 ml-4">{post.date}</span>
            </Link>
          ))}
        </div>

        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          All posts <ArrowRight className="h-3 w-3" />
        </Link>
      </section>

      <section className="rounded-xl border bg-muted/50 p-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Code2 className="h-5 w-5 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold">Let&apos;s work together</h2>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          Have a project in mind or just want to chat? I&apos;m always open to new opportunities.
        </p>
        <Button asChild>
          <Link href="/contact">
            Say hello <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
