export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative flex items-center justify-center scale-75 origin-left">
                <svg
                  className="size-10"
                  fill="none"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 15 L85 50 L50 85 L15 50 Z"
                    stroke="var(--deep-blue)"
                    stroke-linejoin="round"
                    stroke-width="6"
                  ></path>
                  <rect
                    fill="var(--cta-coral)"
                    height="24"
                    transform="rotate(45 50 50)"
                    width="24"
                    x="38"
                    y="38"
                  ></rect>
                  <circle
                    cx="50"
                    cy="15"
                    fill="var(--accent-cyan)"
                    r="7"
                  ></circle>
                  <circle cx="85" cy="50" fill="var(--primary)" r="7"></circle>
                  <circle cx="50" cy="85" fill="var(--primary)" r="7"></circle>
                  <circle
                    cx="15"
                    cy="50"
                    fill="var(--accent-cyan)"
                    r="7"
                  ></circle>
                </svg>
              </div>
              <h2 className="text-xl font-black tracking-tight text-primary dark:text-white">
                Nexo <span className="text-accent-cyan">Soluciones</span>
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Potenciando PYMEs en Latinoamérica con tecnología de clase
              mundial.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-8 text-primary dark:text-white uppercase tracking-widest text-xs">
              Empresa
            </h4>
            <ul className="space-y-5 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Carreras
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-primary dark:text-white uppercase tracking-widest text-xs">
              Recursos
            </h4>
            <ul className="space-y-5 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Documentación API
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent-cyan transition-colors"
                  href="#"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-primary dark:text-white uppercase tracking-widest text-xs">
              Contacto
            </h4>
            <ul className="space-y-5 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-cyan text-lg">
                  mail
                </span>{" "}
                contacto@nexosoluciones.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-cyan text-lg">
                  call
                </span>{" "}
                +52 (55) 1234-5678
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-cyan text-lg">
                  location_on
                </span>{" "}
                Ciudad de México, MX
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2024 Nexo Soluciones Tecnológicas S.A. de C.V.
          </p>
          <div className="flex gap-10 text-xs font-black text-slate-400 uppercase tracking-widest">
            <a className="hover:text-accent-cyan transition-colors" href="#">
              Privacidad
            </a>
            <a className="hover:text-accent-cyan transition-colors" href="#">
              Términos
            </a>
            <a className="hover:text-accent-cyan transition-colors" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
