import { useEffect, useState } from "react";
import { fetchProjets } from "../services/api";
import { getImageUrl } from "../utils/getImageUrl.js"; 
import { getImageHoverUrl } from "../utils/getImageHoverUrl.js";
import { getFirstUrl } from "../utils/getUrl.js";
import Footer from "../components/jsx/footer.jsx";

function Projets() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchProjets();
      setProjets(data);
    }
    getData();
  }, []);


  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projets.map((projet) => (
          <div key={projet.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold">
              {projet.titre}
            </h2>
             <p className="text-gray-600">
            {Array.isArray(projet.description) 
                ? projet.description[0]?.children?.[0]?.text 
                : projet.description}            
                </p>

          <div className="relative group w-full h-[300px]">

            {getImageUrl(projet) ? (
            <img
              src={getImageUrl(projet)}
              alt={projet.titre}
              className="w-full h-[300px] object-cover z-0 transition-opacity duration-300 group-hover:opacity-0"
              loading="lazy"
            />) : (
              <p className="text-sm text-gray-400">Pas d’image</p>
            )}

             {getImageHoverUrl(projet) ? (
              <img
              src={getImageHoverUrl(projet)}
              alt={projet.titre}
              className="absolute inset-0 w-full h-[300px] object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
              />
            ) : (
              <p className="text-sm text-gray-400">Pas d’image au survol</p>
            )} 
          </div>

<div className="flex gap-4 mt-2">
    {getFirstUrl(projet.url) && (
      <a 
        href={getFirstUrl(projet.url)} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
      >
        GitHub
      </a>
    )}
    {getFirstUrl(projet.demo) && (
      <a 
        href={getFirstUrl(projet.demo)} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-green-500 hover:underline"
      >
        Démo
      </a>
      
    )}
  </div>
  <p>{projet.Techno}</p>

          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Projets;
