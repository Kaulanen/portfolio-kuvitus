import { ArrowRight, ExternalLink, Linkedin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kolarin monitoimitalo",
    description: "Kolarin kirkonkylän koulu.",
    image: "/projects/Kolari.png",
    tags: ["Koulu", "Monitoimitalo", "12/2024"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Ahmon ja Siilinlahden elinkaarihankkeet",
    description:
      "Siilinjärven koulujen elinkaarihankkeet.",
    image: "/projects/Ahmo.jpg",
    tags: ["Koulu", "Elinkaarihanke", "12/2025"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Pohjolan Osuuspankki",
    description:
      "Toimistorakennus sekä asuintorni, Lapti.",
    image: "/projects/OP.jpg",
    tags: ["Toimisto", "Asuinkerrostalo", "12/2027"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Oulun Asemantornit 1-3",
    description: "Asuinkerrostalot Oulun keskustassa, omaperustainen rakennushanke YIT.",
    image: "/projects/AS.jpg",
    tags: ["Asuinkerrostalo", ">10 000 bm2", "12/2021"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Ruka Chalets",
    description: "Asuinkerrostalo YIT.",
    image: "/projects/Ruka.jpg",
    tags: ["Asuinkerrostalo", ">10 000 bm2", "12/2021"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Ruukinkankaan koulu",
    description:
      "Suomussalmen koulu, YIT.",
    image: "/projects/Ruukinkangas.jpg",
    tags: ["Koulu", ">6000 bm2", "5/2022"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Gesterbyn koulukeskus",
    description:
      "Gesterbyn koulukeskus, Kirkkonummi, YIT.",
    image: "/projects/Gesterby.jpg",
    tags: ["Koulukeskus", ">8000 bm2", "12/2025"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 8,
    title: "Kiinteistö x",
    description: "Kiinteistö",
    image: "/projects/rakennusx.jpg",
    tags: ["Toimistorakennus", ">10 000 bm2", "12/2021"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Kiinteistö xx",
    description:
      "Kiinteistö",
    image: "/projects/rakennusx.jpg",
    tags: ["Toimistorakennus", ">6000 bm2", "5/2022"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Kiinteistö xxx",
    description:
      "Kiinteistö",
    image: "/projects/rakennusx.jpg",
    tags: ["Toimistorakennus", ">2500 bm2", "12/2025"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Referenssi<span className="text-primary">kohteet </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tietomallikoordinoinnin referenssihankkeita.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/elsa-maria-kaulanen-10b7711a1/"
          >
            LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};