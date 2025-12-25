import { ArrowDown } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">
        
        {/* Profiilikuva animaatiolla ja hover-efektillä */}
        <div className="opacity-0 animate-fade-in">
          <img
            src={isHovered ? "/projects/omakuva2.jpg" : "/projects/omakuva1.jpg"}
            alt="Elsa-Maria Kaulanen"
            className="w-60 h-60 rounded-full object-cover border-4 shadow-lg mx-auto mb-4 transition-transform duration-500 hover:scale-120 hover:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>


        {/* Tervetuloteksti */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hei, olen</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Elsa-Maria
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            Kaulanen
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Kuvataiteilija – Kuvittaja
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#contact" className="cosmic-button">
            Ota yhteyttä
          </a>
        </div>
      </div>

      {/* Scroll-indikaattori */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
