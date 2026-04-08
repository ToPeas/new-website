import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog — Dev",
  description: "Thoughts on frontend development, design, and the web.",
};

const posts = [
  {
    slug: "getting-started-nextjs-app-router",
    title: "Getting Started with Next.js App Router",
    excerpt: "A deep dive into the new App Router in Next.js 13+, covering layouts, server components, and data fetching patterns.",
    date: "Apr 10, 2025",
    readTime: "8 min read",
    tags: ["Next.js", "React"],
  },
  {
    slug: "why-switched-tailwind-css",
    title: "Why I Switched to Tailwind CSS",
    excerpt: "After years of using CSS modules and styled-components, I finally made the switch. Here's what I learned.",
    date: "Mar 22, 2025",
    readTime: "5 min read",
    tags: ["CSS", "Tailwind"],
  },
  {
    slug: "building-accessible-react-components",
    title: "Building Accessible React Components",
    excerpt: "Accessibility isn't optional. A practical guide to building inclusive UI components with ARIA and semantic HTML.",
    date: "Feb 15, 2025",
    readTime: "10 min read",
    tags: ["React", "A11y"],
  },
  {
    slug: "typescript-generics-practical-guide",
    title: "TypeScript Generics: A Practical Guide",
    excerpt: "Generics can feel intimidating at first. This guide breaks them down with real-world use cases and examples.",
    date: "Jan 30, 2025",
    readTime: "12 min read",
    tags: ["TypeScript"],
  },
  {
    slug: "web-performance-core-web-vitals",
    title: "Web Performance & Core Web Vitals",
    excerpt: "Understanding LCP, FID, and CLS — and practical techniques to improve your scores.",
    date: "Jan 8, 2025",
    readTime: "7 min read",
    tags: ["Performance", "SEO"],
  },
  {
    slug: "state-management-2025",
    title: "State Management in 2025: What to Use?",
    excerpt: "From Redux to Zustand to React Query — comparing the landscape of state management in modern React apps.",
    date: "Dec 20, 2024",
    readTime: "9 min read",
    tags: ["React", "State Management"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground max-w-xl">
          I write about frontend development, web performance, and things I find interesting.
        </p>
      </section>

      <div className="space-y-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-lg border p-5 hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-3">
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="font-semibold group-hover:underline underline-offset-4">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-1 hidden md:block" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
