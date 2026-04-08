import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact — Dev",
  description: "Get in touch with me for collaborations, opportunities, or just to say hi.",
};

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

const socials = [
  {
    name: "Email",
    handle: "hello@example.com",
    href: "mailto:hello@example.com",
    Icon: Mail,
    description: "Best way to reach me",
  },
  {
    name: "GitHub",
    handle: "@username",
    href: "https://github.com",
    Icon: GithubIcon,
    description: "Check out my code",
  },
  {
    name: "Twitter / X",
    handle: "@username",
    href: "https://twitter.com",
    Icon: TwitterIcon,
    description: "Thoughts and updates",
  },
  {
    name: "LinkedIn",
    handle: "Your Name",
    href: "https://linkedin.com",
    Icon: LinkedinIcon,
    description: "Professional network",
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          I&apos;m open to freelance projects, full-time opportunities, or just a friendly chat.
          The best way to reach me is via email — I try to respond within 24 hours.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Connect</h2>
          </div>
          <div className="space-y-3">
            {socials.map((social) => (
              <Link key={social.name} href={social.href} target={social.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-9 w-9 rounded-lg border flex items-center justify-center shrink-0">
                      <social.Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{social.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{social.handle}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-auto shrink-0 hidden sm:block">
                      {social.description}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Send className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Send a message</h2>
          </div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What's on your mind?"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>
              <Button className="w-full">
                <Send className="h-4 w-4" /> Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Or email me directly at{" "}
                <Link href="mailto:hello@example.com" className="underline underline-offset-4 hover:text-foreground">
                  hello@example.com
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Separator />

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Are you available for freelance work?",
              a: "Yes, I take on select freelance projects. Feel free to reach out with your project details.",
            },
            {
              q: "What's your typical response time?",
              a: "I try to respond to all messages within 24 hours on weekdays.",
            },
            {
              q: "Are you open to full-time roles?",
              a: "Currently open to the right opportunity. Let's chat!",
            },
          ].map((item, i) => (
            <div key={i} className="space-y-1 border-b pb-4 last:border-0">
              <h3 className="text-sm font-medium">{item.q}</h3>
              <p className="text-sm text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
