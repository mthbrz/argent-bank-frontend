import React from 'react'

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1>404 - Page Not Found</h1>
      <p>Désolé.e, la page que vous recherchez n'existe pas.</p>
      <p>Mais vous pouvez retourner à la page d'accueil <a href="/" className="text-white-500 font-bold underline">ici</a>.</p>
    </div>
  )
}

export default Error
