import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white antialiased min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 flex flex-col items-center py-6 md:py-10">
            <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4 sm:px-6">
              {/* HERO */}
              <div className="mb-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-center">
                  <div
                    className="w-full aspect-video bg-cover bg-center rounded-2xl shadow-2xl border-4 border-white dark:border-white/5"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAscbL7lXsge1GOSE8_yIifTdI5KuojiGHEuk1E8Qub9HgMJqoXlMJsKLUZURiT2atccjXDuR8GFdHG_joG2cUzxAae48-7byUDILLHygaPAslB3drZ69vudiODkNaFrRxICPMxMcvRDS0gxGFDtyEJypKJScAbIxTjHzvqkIQkVpjvREfynxD6jH0UeDKJwv53d1thuhL4bjA7YRundJrporlRALuXK6qXljwz-H2C-H6tY1-mxdptF2w0e3zxTyI6Hhs7h2pioCU")`,
                    }}
                  />

                  <div className="flex flex-col gap-6 w-full md:w-1/2 md:pl-12">
                    <div className="h-1 w-20 bg-coral rounded-full"></div>
                    <h1 className="text-deep-blue dark:text-white text-3xl md:text-5xl font-extrabold leading-tight">
                      Somos el puente entre la visión de tu negocio y la
                      tecnología
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                      Ayudamos a las PYMEs en Latinoamérica a escalar mediante
                      software personalizado de alta calidad.
                    </p>
                    <button className="w-full sm:w-fit rounded-lg h-12 px-6 bg-blue-700 hover:bg-blue-800 text-white font-bold shadow-lg transition-all">
                      Conoce nuestra historia
                    </button>
                  </div>
                </div>
              </div>

              {/* MISIÓN */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-6 md:p-10 mb-20 border dark:border-white/5 shadow-sm">
                <h2 className="text-deep-blue dark:text-white text-2xl md:text-3xl font-extrabold pb-4">
                  Nuestra Misión
                </h2>
                <p className="text-gray-700 dark:text-gray-200 text-base md:text-xl leading-relaxed">
                  En <span className="font-bold">Nexo Soluciones</span>, nuestra
                  misión es democratizar el acceso a tecnología de punta para
                  las pequeñas y medianas empresas.
                </p>
              </div>

              {/* FEATURES */}
              <div className="mb-24">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-deep-blue dark:text-white">
                    Por qué elegirnos
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-base md:text-lg">
                    Nuestros pilares fundamentales
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    ["account_tree", "Integración"],
                    ["code", "Desarrollo a medida"],
                    ["support_agent", "Soporte continuo"],
                    ["verified_user", "Tecnología robusta"],
                  ].map(([icon, title]) => (
                    <div
                      key={title}
                      className="rounded-2xl border dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:shadow-lg transition-all"
                    >
                      <span className="material-symbols-outlined text-cian text-4xl">
                        {icon}
                      </span>
                      <h3 className="mt-4 font-bold">{title}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* EQUIPO */}
              <div className="mb-24">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Nuestro Equipo
                </h2>

                <div className="relative w-full h-[280px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFeqpwNSBffWIfiaI70XHlRbTI1zwsPQVgQgn5HfQiPik5-IXRmjVkJk2JNnvtMc-sQHnW5ctdKzxlFeUx5yMu3g_N4r5fc_O7Pd3WdosmxjXw6ylEAVZaDY7jJQHXNe84PGqk-UIDetLzfFGV5dZLgt3Eu_NkFLIm3tdobqT3FrXJ06xWcmrDiX1C9Ixow9m_cEBGQw24mHUGQq8rwEmr-7VXccmECDFRp-wIbSN4mTdIkL1JYk0oCqh7gk2x8BBD3Q8IPO-egb0")',
                    }}
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-center text-white mb-20">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                  ¿Listo para transformar tu empresa?
                </h2>

                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  Únete a las PYMEs que ya están creciendo con tecnología real.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => navigate("/contacto")} className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-bold transition">
                    Agendar consulta
                  </button>

                  <button className="border border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-xl font-bold transition">
                    Ver portafolio
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
