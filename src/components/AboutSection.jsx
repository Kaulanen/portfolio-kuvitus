
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
              Kuvataiteilija - Kuvittaja
            </h3>

            <p className="text-muted-foreground">
              Kirjoitin ylioppilaaksi Torkkelin kuvataidelukiosta vuonna 2000. Kuvataiteilijan ammattiin opiskelin Taidekoulu Maassa Suomenlinnassa ja valmistuin sieltä vuonna 2008. 
              Kuvataiteilijan työn vastapainoksi opiskelin myös rakennusinsinööriksi ja tällä hetkellä työskentelen tietomalliasiantuntijana konsulttitoimistossa mutta vapaa-ajalla 
              teen edelleen kuvitustöitä ja osallistun näyttelyihin.
            </p>

            <p className="text-muted-foreground">
              Kuvataiteilijan työssäni minua kiinnostaa useat eri tekniikat ja työskentelymateriaalit mutta kaikkein lähimpänä sydäntäni ovat aina olleet lyijykynä- ja tussityöt.
              Uutta innostusta tekemiseen on tuonut digitaalisen piirtämisen löytäminen ja sen yhdistäminen valokuviin. Lähimetsissä liikkuminen saa aina mielikuvituksen lentämään ja kuvaan siellä
              puunkoloja, juurakoita, sieniä ja muita yksityiskohtia, joiden suojaan näen pienten haltioiden ja metsän asukkien kätkeytyvän. 
              Luonnon yksityiskohdissa toistuu mikrokoossa maailmankaikkeuden kaunis matematiikka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Ota yhteyttä
              </a>

              <a
                href="/cv"
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
                  <Brush className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Kuvataiteilijan ammattiin valmistava tutkinto</h4>
                  <p className="text-muted-foreground">
                    Taidekoulu Maa, 2008
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
                  <h4 className="font-semibold text-lg">Ylioppilas</h4>
                  <p className="text-muted-foreground">
                    Torkkelin kuvataidelukio, 2000
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* Kuvakkeet pystysuunnassa */}
                <div className="flex flex-col gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Tekstit kuvakkeiden vieressä */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Rakennusinsinööri</h4>
                  <p className="text-muted-foreground">
                    Tietomallikoordinaattori - tiedolla johtamisen asiantuntija
                  </p>
                  <p className="text-muted-foreground">
                    OAMK, 2019
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