import { useNavigate } from "react-router-dom";

export default function TopNavbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <svg className="size-10" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            <path
              d="M50 15 L85 50 L50 85 L15 50 Z"
              stroke="var(--deep-blue)"
              strokeLinejoin="round"
              strokeWidth="6"
            />
            <rect
              fill="var(--cta-coral)"
              height="24"
              width="24"
              x="38"
              y="38"
              transform="rotate(45 50 50)"
            />
            <circle cx="50" cy="15" r="7" fill="var(--accent-cyan)" />
            <circle cx="85" cy="50" r="7" fill="var(--primary)" />
            <circle cx="50" cy="85" r="7" fill="var(--primary)" />
            <circle cx="15" cy="50" r="7" fill="var(--accent-cyan)" />
          </svg>

          <h2 className="text-xl font-extrabold tracking-tight text-primary dark:text-white">
            Nexo <span className="text-accent-cyan">Soluciones</span>
          </h2>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigate("/servicios")}
            className="text-sm font-semibold hover:text-accent-cyan transition-colors"
          >
            Servicios
          </button>

          <button
            onClick={() => navigate("/soluciones")}
            className="text-sm font-semibold hover:text-accent-cyan transition-colors"
          >
            Soluciones
          </button>

          <button
            onClick={() => navigate("/tecnologias")}
            className="text-sm font-semibold hover:text-accent-cyan transition-colors"
          >
            Tecnologías
          </button>

          <button
            onClick={() => navigate("/blog")}
            className="text-sm font-semibold hover:text-accent-cyan transition-colors"
          >
            Blog
          </button>

          <button
            onClick={() => navigate("/contacto")}
            className="text-sm font-semibold hover:text-accent-cyan transition-colors"
          >
            Contacto
          </button>

          <button
            onClick={() => navigate("/contacto")}
            className="bg-cta-coral hover:bg-[#d94343] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-cta-coral/20 transition-all"
          >
            Hablemos de tu proyecto
          </button>
        </nav>
      </div>
    </header>
  );
}
