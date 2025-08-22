import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Navbar() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
    <div className="flex gap-20 mx-auto items-center justify-center p-4 text-3xl bg-purple-50 dark:bg-slate-950 text-slate-950 dark:text-white">
    <Link to="/" className="border-b-5 border-b-purple-700 dark:border-b-amber-300">
      <h2>Accueil</h2>
    </Link>

    <Link to="/projects" className="active:border-b-5-green-400">
      <h2>Projets</h2>
    </Link>

    <Link to="/" className='flex size-12 '>
    <img
  src={theme === "dark" ? "/m_dark_mode.png" : "/m.png"}
  alt="Lettre M"
/> <img
  src={theme === "dark" ? "/b_dark_mode.png" : "/b.png"}
  alt="Lettre B"
/>
    </Link>

    <Link to="/contact">
      <h2>Contact</h2>
    </Link>

    <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex items-center gap-2"
      >
        {theme === "dark" ? "🌕" : "🌑"}
      </button>
  </div>

    </>
  )
}
export default Navbar;
