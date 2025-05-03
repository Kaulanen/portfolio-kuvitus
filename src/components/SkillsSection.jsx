import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Tietomallikoordinointi ja tietomallit
  { name: "Solibri", level: 95, category: "Tietomalli" },
  { name: "Navisworks", level: 50, category: "Tietomalli" },
  { name: "Recap", level: 70, category: "Tietomalli" },
  { name: "Revit", level: 70, category: "Tietomalli" },
  { name: "ArchiCAD", level: 65, category: "Tietomalli" },
  { name: "Tekla", level: 70, category: "Tietomalli" },

  // Tiedolla johtaminen
  { name: "Power BI", level: 80, category: "Tiedolla johtaminen" },
  { name: "xx", level: 75, category: "Tiedolla johtaminen" },

  // Ohjelmointi
  { name: "Python", level: 40, category: "Ohjelmointi" },
  { name: "CSS", level: 50, category: "Ohjelmointi" },
  { name: "Figma", level: 70, category: "Ohjelmointi" },
  { name: "VS Code", level: 65, category: "Ohjelmointi" },

  // Muu
  { name: "Photoshop", level: 95, category: "Muu" },
  { name: "Illustrator", level: 40, category: "Muu" },
  { name: "Blender", level: 75, category: "Muu" },

  
];

const categories = ["Kaikki", "Tietomalli", "Tiedolla johtaminen", "Ohjelmointi", "Muu"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Kaikki");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Kaikki" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Kuvaus <span className="text-primary"> osaamisesta</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      
    </section>
  );
};