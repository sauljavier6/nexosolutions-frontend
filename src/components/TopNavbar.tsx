import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopNavbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => go("/")}
        >
          <svg className="size-9 sm:size-10" fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 15 L85 50 L50 85 L15 50 Z" stroke="var(--deep-blue)" strokeLinejoin="round" strokeWidth="6" />
            <rect fill="var(--cta-coral)" height="24" width="24" x="38" y="38" transform="rotate(45 50 50)" />
            <circle cx="50" cy="15" r="7" fill="var(--accent-cyan)" />
            <circle cx="85" cy="50" r="7" fill="var(--primary)" />
            <circle cx="50" cy="85" r="7" fill="var(--primary)" />
            <circle cx="15" cy="50" r="7" fill="var(--accent-cyan)" />
          </svg>

          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-primary dark:text-white">
            Nexo <span className="text-accent-cyan">Soluciones</span>
          </h2>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {["servicios","soluciones","proceso","nosotros","blog"].map(item => (
            <button
              key={item}
              onClick={() => go("/" + item)}
              className="text-sm font-semibold hover:text-accent-cyan transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <button
            onClick={() => go("/contacto")}
            className="bg-cta-coral hover:bg-[#d94343] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-cta-coral/20 transition-all"
          >
            Hablemos de tu proyecto
          </button>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {["servicios","soluciones","proceso","nosotros","blog"].map(item => (
              <button
                key={item}
                onClick={() => go("/" + item)}
                className="text-left text-sm font-semibold py-2"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <button
              onClick={() => go("/contacto")}
              className="mt-2 bg-cta-coral text-white py-3 rounded-lg font-bold"
            >
              Hablemos de tu proyecto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
