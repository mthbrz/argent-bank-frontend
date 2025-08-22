export function getImageUrl(projet) {
  if (!projet.image || projet.image.length === 0) return null;

  const imageData = projet.image[0];

  return `http://localhost:1337${
    imageData.formats?.medium?.url || imageData.url
  }`;
}
