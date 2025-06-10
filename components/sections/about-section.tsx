import { personalInfo } from "@/config/personal-info";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          About
        </h2>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight hidden lg:block">About Me</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {personalInfo.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
} 