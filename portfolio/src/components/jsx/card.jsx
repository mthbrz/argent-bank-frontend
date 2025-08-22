function Card({ titre, description, lien, image }) {
  return (
    <div className="card border rounded-lg shadow-lg p-4">
      {image && (
        <img
          src={`http://localhost:1337${image}`}
          alt={titre}
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <h2 className="text-xl font-bold mt-2">{titre}</h2>
      <p className="text-gray-600">{description}</p>
      {lien && (
        <a
          href={lien}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 block"
        >
          Voir le projet
        </a>
      )}
    </div>
  );
}

export default Card;
