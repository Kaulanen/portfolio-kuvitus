
import { Building2, ChartLine, Code, Brush } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tietoja <span className="text-primary"> minusta</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Rakennusinsinööri
            </h3>

            <p className="text-muted-foreground">
              Valmistuin Oulun ammattikorkeakoulusta rakennustekniikan insinööriksi keväällä 2019. Aloitin tietomallikoordinaattorin työn rakennusliikkeessä
              jo ennen valmistumistani. Tietomalliasiantuntijana olen toiminut nyt A-insinööreillä vuodesta 2021 alkaen ja olen kehittänyt
              osaamistani tiedolla johtamisen asiantuntijana. Olen tehnyt muun muassa kustannusseurantaa useassa isossa
              rakennushankkeessa.
            </p>

            <p className="text-muted-foreground">
              Tietomallikoordinaattorin työssä käytän enimmäkseen Solibria ja siitä kokemusta onkin kertynyt jo vuodesta 2016 lähtien. Lisäksi 
              käytän työssäni Revit, Archicad ja Tekla -ohjelmistoja. Power BI on tullut tutuksi kustannusseurannassa. Ohjelmointia olen opetellut
              Dynamo for Revit sekä Grasshopper -ohjelmistoilla ja itsenäisesti verkkokursseilla.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Ota yhteyttä
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Lataa CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tietomallikoordinointi</h4>
                  <p className="text-muted-foreground">
                    xxx...
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartLine className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Tiedolla johtaminen</h4>
                  <p className="text-muted-foreground">
                    xxx...
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brush className="h-6 w-6 text-primary" />
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Muuta</h4>
                  <p className="text-muted-foreground">
                    xx...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};