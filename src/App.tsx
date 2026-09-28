import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Verbete from "./components/verbete";
import Clientes from "./components/clientes";
import Trabalhos from "./components/trabalhos";
import Metodo from "./components/metodo";
import Cta from "./components/cta";
import Rodape from "./components/rodape";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Verbete />
        <Clientes />
        <div className="pt-24 sm:pt-32">
          <Trabalhos />
        </div>
        <Metodo />
        <Cta />
      </main>
      <Rodape />
    </>
  );
}
