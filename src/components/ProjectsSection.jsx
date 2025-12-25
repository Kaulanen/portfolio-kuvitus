import { ArrowRight } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { projectDescriptions } from "./projectDescriptions";

const categories = [
  "Kaikki",  
  "Tunturien yöpuolta",
  "Karilan Navettagalleria",
  "Tarinapolku",
  "Kuuramäki",
  "Oulu Roller Derby",
  "Muut piirrokset ja kuvitukset",
];

const categoryOrder = [
  
  "Tunturien yöpuolta",
  "Karilan Navettagalleria",
  "Tarinapolku",
  "Kuuramäki",
  "Muut piirrokset ja kuvitukset",  
  "Oulu Roller Derby",
  "Kaikki",
];

const projects = [
    {
    id: 1,
    title: "Arhippa",
    category: "Oulu Roller Derby",
    description: "Kuvituksissa seikkaileva hahmo",
    image: "/projects/arhippa2.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 2,
    title: "Tilaa kaikille",
    category: "Oulu Roller Derby",
    description: "Kuvitus myyntituotteeseen",
    image: "/projects/tilaakaikille.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },

  {
    id: 3,
    title: "Urheilu kuuluu",
    category: "Oulu Roller Derby",
    description: "Kuvitus myyntituotteeseen",
    image: "/projects/urheilukuuluu150x315.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },

  {
    id: 4,
    title: "Kieruan pappi käännetään",
    category: "Tunturien yöpuolta",
    description: projectDescriptions[4],
    image: "/projects/Kieruan Pappi käännetään.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 5,
    title: "Officials",
    description: "Kuvitus myyntituotteeseen",
    category: "Oulu Roller Derby",
    image: "/projects/Officialsneliö1.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },

  {
    id: 6,
    title: "Pride-pulu",
    category: "Oulu Roller Derby",
    description: "Kuvitus myyntituotteeseen",
    image: "/projects/PridepuluNeliö.png",
    tags: [],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Kasa",
    category: "Oulu Roller Derby",
    description: "Kuvitus myyntituotteeseen",
    image: "/projects/Kasa-muotoiltu.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },

  {
    id: 8,
    title: "Lineup",
    category: "Oulu Roller Derby",
    description: "Kuvitus myyntituotteeseen",
    image: "/projects/Lineup_uusi.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 9,
    title: "Luistin",
    category: "Oulu Roller Derby",
    description: "Kuvitus myyntituotteeseen",
    image: "/projects/derbyluistin_isompiteksti.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 10,
    title: "Viiripulu",
    category: "Oulu Roller Derby",
    description: "Kuvitus myyntituotteeseen",
    image: "/projects/derbyviiri.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 11,
    title: "Tarinapolku kartta",
    category: "Tarinapolku",
    description: projectDescriptions[11],
    image: "/projects/Kartta_tarinapolku-pieni.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 12,
    title: "Sampo",
    category: "Muut piirrokset ja kuvitukset",
    description: "",
    image: "/projects/papanjäljilläsampo.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 13,
    title: "Pekka Siepin puu",
    category: "Muut piirrokset ja kuvitukset",
    description: "",
    image: "/projects/Pekka Siepin puu.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 14,
    title: "Tunturien yöpuolta, sivu 3",
    category: "Tunturien yöpuolta",
    description: "",
    image: "/projects/kolmas sivu.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 15,
    title: "Pappi siunataan uudelleen",
    category: "Tunturien yöpuolta",
    description: projectDescriptions[15],
    image: "/projects/siunaus.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 16,
    title: "Vainajien menot",
    category: "Tunturien yöpuolta",
    description: projectDescriptions[16],
    image: "/projects/Vainajien menot.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 17,
    title: "Yksinäinen",
    category: "Tunturien yöpuolta",
    description: projectDescriptions[17],
    image: "/projects/YksinäinenPappi.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 17,
    title: "Muistelija",
    category: "Tunturien yöpuolta",
    description: "Kuvissa käytettiin piirrosten lisäksi nukkeja",
    image: "/projects/Muistelija valmis.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 16,
    title: "Kuunvalo",
    category: "Tunturien yöpuolta",
    description: "",
    image: "/projects/Kieruamaisema.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 18,
    title: "Minttuhaltija",
    category: "Karilan Navettagalleria",
    description: "",
    image: "/projects/lehtipeikko.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 19,
    title: "Ruusuhaltija",
    category: "Karilan Navettagalleria",
    description: "",
    image: "/projects/Ruusu.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 120,
    title: "Kolo",
    category: "Karilan Navettagalleria",
    description: "",
    image: "/projects/puunkolo_pien.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 19,
    title: "Navettagallerian logo",
    category: "Karilan Navettagalleria",
    description: "",
    image: "/projects/logo.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 20,
    title: "Tyttö",
    category: "Muut piirrokset ja kuvitukset",
    description: "",
    image: "/projects/kortti2.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 19,
    title: "Karilan nuori emäntä ja oma lehmä",
    category: "Karilan Navettagalleria",
    description: projectDescriptions[18],
    image: "/projects/mummo.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 19,
    title: "Nilioja",
    category: "Tarinapolku",
    description: "",
    image: "/projects/nilioja_pien.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 26,
    title: "Kuuramäki 3",
    category: "Kuuramäki",
    description: "Laulu tunturikylästä - Kari Kaulasen romaanin kansikuvitus",
    image: "/projects/Kuuramäki_or.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 25,
    title: "Kuuramäki 2",
    category: "Kuuramäki",
    description: "Kylä tunturien sylissä - Kari Kaulasen romaanin kansikuvitus",
    image: "/projects/kuuramäki_sin.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 20,
    title: "Saapujat",
    category: "Tarinapolku",
    description: "",
    image: "/projects/Saapujat.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 21,
    title: "Ruuhi",
    category: "Tarinapolku",
    description: "",
    image: "/projects/ruuhi.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 22,
    title: "Savotta",
    category: "Tarinapolku",
    description: "",
    image: "/projects/Tukkimetsa.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 23,
    title: "Sotilaat",
    category: "Tarinapolku",
    description: "",
    image: "/projects/Sotilaat.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 24,
    title: "Lapset",
    category: "Tarinapolku",
    description: "",
    image: "/projects/Lapset_ja_onki.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
    {
    id: 27,
    title: "Omakuva",
    category: "Muut piirrokset ja kuvitukset",
    description: "",
    image: "/projects/Oma.png",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },

  {
    id: 28,
    title: "Pappa",
    category: "Muut piirrokset ja kuvitukset",
    description: "Lyijykynätyö",
    image: "/projects/Pappa.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 29,
    title: "Kukaslompolo",
    category: "Muut piirrokset ja kuvitukset",
    description: "Lyijykynätyö/luonnos",
    image: "/projects/Eno.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
{
    id: 30,
    title: "Aveliina",
    category: "Muut piirrokset ja kuvitukset",
    description: "Lyijykynätyö/luonnos",
    image: "/projects/Ave.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
  {
    id: 31,
    title: "Piirroskokoelma",
    category: "Muut piirrokset ja kuvitukset",
    description: "Lyijykynätyö/luonnos",
    image: "/projects/kollaasi.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },  
    {
    id: 32,
    title: "Piirroskokoelma",
    category: "Muut piirrokset ja kuvitukset",
    description: "Lyijykynätyö/luonnos",
    image: "/projects/kollaasi2.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
      {
    id: 33,
    title: "Joulutervehdys",
    category: "Muut piirrokset ja kuvitukset",
    description: "Tilaustyö A-Insinöörien sähköiseen joulutervehdykseen",
    image: "/projects/Jouluterv_ains3-1.jpg",
    tags: [],
    // demoUrl: "#",
    // githubUrl: "#",
  },
];


export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Kaikki");

  // Suodata projektit kategorian mukaan
  const filteredProjects =
    activeCategory === "Kaikki"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Järjestä projektit kategorian mukaisesti
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.category || "Muu");
    const bIndex = categoryOrder.indexOf(b.category || "Muu");
    return aIndex - bIndex;
  });

  const groupedProjects = categoryOrder
  .filter((cat) => cat !== "Kaikki") // Poistetaan "Kaikki", koska se ei ole varsinainen ryhmä
  .map((category) => ({
    category,
    projects: projects.filter((p) => p.category === category),
  }));


  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Kuvitukset<span className="text-primary">Piirrokset</span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Hankkeet ja projektit
        </p>

        {/* Suodatusnapit */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories
            .filter((cat) => cat !== "Kaikki")
            .map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 rounded-full border transition-all duration-300 bg-white text-gray-700 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
              >
                {cat}
              </a>
            ))}
        </div>


        {groupedProjects.map(({ category, projects }) => (
  <div key={category} className="mb-12">
    <h3
      id={category.toLowerCase().replace(/\s+/g, "-")}
      className="text-3xl font-extrabold mb-6 text-left text-primary border-l-4 border-primary pl-4 scroll-mt-16"
    >
      {category}
    </h3>



    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative mb-4 break-inside-avoid shadow-md cursor-pointer bg-white/10 rounded"
          onClick={() => setSelectedProject(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto shadow-sm"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-white text-xl font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-white text-sm"></p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {project.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium border rounded-full bg-white/20 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
))}


        {/* LinkedIn-nappi */}
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

      {/* Modal-kuva */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white p-6 rounded-lg  text-gray-700 max-w-8xl w-full relative shadow-lg overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white bg-primary/70 hover:bg-black rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-md z-10 transition duration-200"
              aria-label="Sulje"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-6">
                  {selectedProject.title}
                </h3>

                {selectedProject.description
                  .split('\n')
                  .map((paragraph, index) => (
                    <p key={index} className="indent-6 italic mb-6">
                      {paragraph}
                    </p>

                  ))}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-3/4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>        
      )}
      
          {/* Takaisin ylös -nuoli */}
          <a
            href="#"
            className="fixed bottom-6 right-6 z-40 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300"
            aria-label="Takaisin alkuun"
          >
            <ArrowUp size={20} />
          </a>
    </section>
  );
};