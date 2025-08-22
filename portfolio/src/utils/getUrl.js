export function getFirstUrl(richTextField) {
  if (!richTextField || !Array.isArray(richTextField)) return null;

  for (const block of richTextField) {
    if (block.children) {
      for (const child of block.children) {
        if (child.type === "link" && child.url) {
          return child.url; // on prend le premier lien trouvé
        }
      }
    }
  }
  return null;
}
