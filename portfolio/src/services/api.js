const API_URL = "http://localhost:1337/api";

export async function fetchProjets() {
  try {
  const response = await fetch("http://localhost:1337/api/projets?populate=*");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des projets");
    }
  const result = await response.json();
    return result.data; 
  } catch (error) {
    console.error("Erreur API fetchProjets:", error);
    return [];
  }
}

