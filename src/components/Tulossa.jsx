import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Tulossa() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Teeman vaihto */}
      <ThemeToggle />

      {/* Navigaatio */}
      <Navbar />

      {/* Sisältö */}
      <main className="flex items-center justify-center px-4 py-24">
        <div className="gradient-border p-10 max-w-lg mx-auto text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Tämä osio on työn alla
          </h1>

          <p className="text-muted-foreground mb-8">
            Rakennan parhaillaan CV:tä ja viimeistelen tämän sivun sisällön.
            Palaa pian uudestaan!
          </p>

          <a href="/" className="cosmic-button inline-block">
            Takaisin etusivulle
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
