import type { Metadata } from "next";
import { MapPin, Calendar, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About — Dev",
  description: "Learn more about me, my background, skills, and experience.",
};

const experiences = [
  {
    company: "Company Name",
    role: "Senior Frontend Developer",
    period: "2023 — Present",
    description: "Leading frontend development for core products. Building scalable UI systems and improving developer experience.",
  },
  {
    company: "Another Company",
    role: "Frontend Developer",
    period: "2021 — 2023",
    description: "Developed responsive web applications using React and TypeScript. Collaborated closely with design and backend teams.",
  },
  {
    company: "Startup Inc.",
    role: "Junior Developer",
    period: "2019 — 2021",
    description: "Built and maintained multiple client websites. Gained hands-on experience with modern JavaScript frameworks.",
  },
];

const education = [
  {
    school: "University Name",
    degree: "B.S. Computer Science",
    period: "2015 — 2019",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "REST API"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Figma", "VS Code", "Vercel"],
  },
];

const interests = ["Open Source", "UI/UX Design", "Performance", "Accessibility", "Coffee", "Hiking"];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> Shanghai, China
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-4 w-4" /> Open to opportunities
          </span>
        </div>
        <div className="max-w-2xl space-y-3 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a frontend developer with 5+ years of experience building modern web applications.
            I care deeply about creating fast, accessible, and visually polished user experiences.
          </p>
          <p>
            When I&apos;m not coding, you can find me contributing to open source, reading about new web technologies,
            or exploring the outdoors.
          </p>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 rounded-full bg-border mt-2 shrink-0" />
                {i < experiences.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-6 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold">{exp.role}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{exp.company}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {exp.period}
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="space-y-1">
              <div className="font-semibold">{edu.degree}</div>
              <div className="text-sm text-muted-foreground">{edu.school}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <Card key={group.category}>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-sm font-semibold">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Interests</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
