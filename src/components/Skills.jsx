import Section from "./Section";
import Card from "./Card";
import { skills } from "../data/skills";
import * as Icons from "lucide-react"; // Import all icons

const Skills = () => (
  <Section id="skills" title="Skills & Superpowers" kicker="What I use">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {skills.map((s, i) => {
        const IconComponent = Icons[s.icon]; // Dynamic component
        return (
          <Card key={i}>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-900/60 flex items-center justify-center">
                {IconComponent && <IconComponent className="h-5 w-5" />}
              </div>
              <div>
                <h4 className="font-semibold">{s.label}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Production-ready patterns, strong performance, and DX.
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  </Section>
);

export default Skills;
