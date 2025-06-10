import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/config/personal-info";

export function HobbiesSection() {
  return (
    <section id="hobbies" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Hobbies
        </h2>
      </div>
      
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight hidden lg:block">My Interests</h2>
        <div className="grid gap-6">
          {personalInfo.hobbies.map((hobby, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {hobby.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {hobby.description}
                  </p>
                  <div className="flex gap-2">
                    {hobby.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 