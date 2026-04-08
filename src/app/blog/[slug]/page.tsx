import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog Post — Dev",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 space-y-8">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <article className="space-y-8">
        <header className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">React</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight leading-tight">
            Getting Started with Next.js App Router
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> Apr 10, 2025
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> 8 min read
            </span>
          </div>
        </header>

        <Separator />

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-foreground text-lg leading-relaxed">
            The App Router in Next.js 13+ represents a fundamental shift in how we build React applications.
            It brings server components, nested layouts, and streaming to the forefront.
          </p>

          <p>
            This post is a placeholder — replace this content with your actual article.
            The structure here includes proper heading hierarchy, paragraph spacing, and code block styles.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">What changed?</h2>
          <p>
            The old Pages Router served us well, but the new App Router enables React Server Components
            by default, allowing you to fetch data directly in your components without useEffect or getServerSideProps.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Getting started</h2>
          <p>
            Create a new Next.js app and start exploring the <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">app/</code> directory.
            Each folder becomes a route segment, and <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">page.tsx</code> files define the UI.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">Conclusion</h2>
          <p>
            The App Router is the future of Next.js development. Once you get comfortable with the mental model,
            it&apos;s a joy to work with. Start small, experiment, and gradually migrate your existing code.
          </p>
        </div>
      </article>

      <Separator />

      <div className="flex justify-between items-center text-sm">
        <Button variant="ghost" size="sm" asChild className="-ml-2">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
        </Button>
      </div>
    </div>
  );
}
