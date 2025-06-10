import { Badge } from "@/components/ui/badge";
import { FaExternalLinkAlt } from "react-icons/fa";
import { personalInfo } from "@/config/personal-info";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Education
        </h2>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight hidden lg:block">Education</h2>
        <div className="space-y-8">
        {personalInfo.education.map((edu, index) => (
          <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {edu.period}
            </header>
            
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug">
                {edu.link ? (
                  <a href={edu.link} target="_blank" rel="noopener noreferrer" className="group/link">
                    {edu.school}
                    <span className="inline-block ml-2">
                      <FaExternalLinkAlt className="inline h-3 w-3 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                    </span>
                  </a>
                ) : (
                  edu.school
                )}
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                {edu.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {edu.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} variant="outline" className="text-xs h-5">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
} 