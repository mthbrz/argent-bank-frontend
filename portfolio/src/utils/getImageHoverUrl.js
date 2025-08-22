  export function getImageHoverUrl(projet) {
  const imageHoverData = projet.ImageHover;

  if (!imageHoverData) return null; // rien à afficher

  return `http://localhost:1337${
    imageHoverData.formats?.medium?.url || imageHoverData.url
  }`;
}
