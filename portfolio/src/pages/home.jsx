import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Footer from "../components/jsx/footer";

function Home() {
  return (
    <>
    <main>
      <div className="flex justify-center items-center gap-5">
        <h1>Salut, moi c'est Mathilde</h1>
        {/* Version claire */}
        <img
          src="/salut.png"
          alt="Salut clair"
          className="w-[20px] block dark:hidden"
        />
        {/* Version sombre */}
        <img
          src="/salut_dark_mode.png"
          alt="Salut sombre"
          className="w-[20px] hidden dark:block"
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <p>Je suis développeuse web.</p>
        <p>Je cherche une alternance pour la rentrée, ça vous dit ?</p>
        <p>
          On pourrait travailler ensemble pour créer des expériences utilisateur plus{" "}
          <TypeAnimation
            sequence={[
              "éthiques", 2500,
              "responsables", 2500,
              "innovantes", 2500,
              "accessibles", 2500,
              "cools", 2500,
              "humaines", 2500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={150}
          />
        </p>
        <Link to="/contact" className="hover:underline">
          On en discute ?
        </Link>
        <Link to="/projects" className="hover:underline">
          Découvrez mes projets
        </Link>
      </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
