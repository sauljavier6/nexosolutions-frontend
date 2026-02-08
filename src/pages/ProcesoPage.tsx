import { useNavigate } from "react-router-dom";

export default function ProcesoPage() {
  const navigate = useNavigate();

  return (
    <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex flex-col items-center py-12">
            <div className="layout-content-container flex flex-col max-w-[1100px] w-full px-6">
              <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-custom/10 text-deep-blue dark:text-cyan-custom border border-cyan-custom/20">
                    <span className="size-2 rounded-full bg-coral-red"></span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Metodología Elite
                    </span>
                  </div>
                  <h1 className="text-deep-blue dark:text-white text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                    Nuestro Proceso <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-custom to-deep-blue">
                      Digital
                    </span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed max-w-xl">
                    Unimos estrategia, diseño y tecnología en una metodología
                    ágil diseñada para escalar PYMEs en toda Latinoamérica.
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-custom to-deep-blue rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <div
                      className="relative bg-cover bg-center rounded-2xl min-h-[350px] shadow-2xl overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(45deg, rgba(10, 36, 99, 0.8) 0%, rgba(0, 229, 255, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0g4nUnvJzbFuZM6YB_mZB2uWcWjIaQqB58_spUBYqz8FgZ0R-83Kadg6I91kwHYU2fYbf_lMYBV0JOyvEE63q5vpqCNavzHCZbfQJS-30EIMl12ApX4JADnvaqszkCf_t2Cd12ZPMKuFTi_gvrIPvaSgtXEfxl-dBwUkwLRcjVCnUsNt9b8RqNRFJ24Jo1lKHvQm8_GDeFNiVGL5_DLnt_jMQzxkoczmybOktt8jgBqEm-kN0vLfRzOnzxvnoBgA_UPx6ypkYRSE")`,
                      }}
                    >
                      <div className="absolute bottom-0 left-0 p-8">
                        <div className="flex items-center gap-4">
                          <div className="size-12 rounded-xl bg-coral-red flex items-center justify-center text-white shadow-xl">
                            <span className="material-symbols-outlined !text-3xl">
                              insights
                            </span>
                          </div>
                          <div className="text-white">
                            <div className="text-sm font-bold opacity-80 uppercase tracking-widest">
                              Compromiso
                            </div>
                            <div className="text-xl font-black">
                              Resultados Medibles
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative px-4">
                <div className="absolute left-1/2 top-0 bottom-0 w-[4px] timeline-gradient hidden md:block -translate-x-1/2 opacity-20"></div>
                <div className="space-y-12 relative">
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 text-center md:text-right order-2 md:order-1">
                      <h3 className="text-2xl font-black text-deep-blue dark:text-white mb-3">
                        Descubrimiento y Auditoría
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Analizamos profundamente sus procesos actuales para
                        identificar cuellos de botella y oportunidades reales de
                        automatización.
                      </p>
                    </div>
                    <div className="relative z-10 order-1 md:order-2">
                      <div className="size-16 rounded-full bg-white dark:bg-background-dark border-4 border-cyan-custom flex items-center justify-center shadow-xl ring-8 ring-cyan-custom/10">
                        <span className="text-2xl font-black text-coral-red">
                          01
                        </span>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 h-12 w-[4px] bg-cyan-custom opacity-50 md:hidden"></div>
                    </div>
                    <div className="flex-1 order-3 hidden md:block">
                      <div className="flex items-center gap-4 text-cyan-custom">
                        <span className="material-symbols-outlined !text-5xl opacity-40">
                          search
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 hidden md:block text-right order-1">
                      <div className="flex items-center justify-end gap-4 text-cyan-custom/80">
                        <span className="material-symbols-outlined !text-5xl opacity-40">
                          architecture
                        </span>
                      </div>
                    </div>
                    <div className="relative z-10 order-2">
                      <div className="size-16 rounded-full bg-white dark:bg-background-dark border-4 border-cyan-custom/70 flex items-center justify-center shadow-xl ring-8 ring-cyan-custom/5">
                        <span className="text-2xl font-black text-coral-red">
                          02
                        </span>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 h-12 w-[4px] bg-slate-400 opacity-50 md:hidden"></div>
                    </div>
                    <div className="flex-1 text-center md:text-left order-3">
                      <h3 className="text-2xl font-black text-deep-blue dark:text-white mb-3">
                        Diseño y Plan de Ruta
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Estructuramos la arquitectura técnica y el diseño UX
                        centrado en el usuario, garantizando una adopción rápida
                        por parte de su equipo.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 text-center md:text-right order-2 md:order-1">
                      <h3 className="text-2xl font-black text-deep-blue dark:text-white mb-3">
                        Desarrollo Iterativo
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Mediante Sprints de 2 semanas, construimos el software
                        de manera incremental, permitiendo ajustes dinámicos y
                        visibilidad total.
                      </p>
                    </div>
                    <div className="relative z-10 order-1 md:order-2">
                      <div className="size-16 rounded-full bg-white dark:bg-background-dark border-4 border-deep-blue/60 flex items-center justify-center shadow-xl ring-8 ring-deep-blue/5">
                        <span className="text-2xl font-black text-coral-red">
                          03
                        </span>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 h-12 w-[4px] bg-deep-blue opacity-50 md:hidden"></div>
                    </div>
                    <div className="flex-1 order-3 hidden md:block">
                      <div className="flex items-center gap-4 text-deep-blue">
                        <span className="material-symbols-outlined !text-5xl opacity-40">
                          terminal
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 hidden md:block text-right order-1">
                      <div className="flex items-center justify-end gap-4 text-deep-blue">
                        <span className="material-symbols-outlined !text-5xl opacity-40">
                          rocket_launch
                        </span>
                      </div>
                    </div>
                    <div className="relative z-10 order-2">
                      <div className="size-16 rounded-full bg-deep-blue border-4 border-deep-blue flex items-center justify-center shadow-2xl shadow-deep-blue/40 ring-8 ring-deep-blue/10">
                        <span className="text-2xl font-black text-coral-red">
                          04
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left order-3">
                      <h3 className="text-2xl font-black text-deep-blue dark:text-white mb-3 text-coral-red">
                        Lanzamiento y Soporte
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Desplegamos la solución y acompañamos a su empresa con
                        mantenimiento preventivo y soporte técnico continuo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-24">
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-8 md:p-16 text-center">
                  <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl"></div>
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-red-500/20 blur-3xl"></div>

                  <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                      Impulse su empresa al siguiente nivel
                    </h2>

                    <p className="text-slate-300 text-lg md:text-xl font-medium">
                      Agende una consultoría técnica gratuita y descubra cómo
                      nuestra metodología puede transformar su PYME.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                      <button onClick={() => navigate("/contacto")} className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-extrabold text-lg transition-all transform hover:scale-105 shadow-xl">
                        Iniciar Consultoría
                      </button>

                      <button className="px-8 py-4 border-2 border-white/30 hover:bg-white/10 text-white rounded-full font-extrabold text-lg transition-all">
                        Ver Portafolio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
}
