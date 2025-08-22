import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="dark:bg-slate-950 dark:text-white py-4">
        <div className="container mx-auto text-center">
          <p>Portfolio made with love. &copy; {new Date().getFullYear()}</p>
          <p>Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
