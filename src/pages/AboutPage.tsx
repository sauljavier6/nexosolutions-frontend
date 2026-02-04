export default function AboutPage() {
  return (
    <body className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 flex flex-col items-center py-10">
            <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-6">
              <div className="@container mb-12">
                <div className="flex flex-col gap-6 py-10 @[864px]:flex-row @[864px]:items-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-2xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2 shadow-2xl border-4 border-white dark:border-white/5"
                    data-alt="Modern tech office with employees working"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAscbL7lXsge1GOSE8_yIifTdI5KuojiGHEuk1E8Qub9HgMJqoXlMJsKLUZURiT2atccjXDuR8GFdHG_joG2cUzxAae48-7byUDILLHygaPAslB3drZ69vudiODkNaFrRxICPMxMcvRDS0gxGFDtyEJypKJScAbIxTjHzvqkIQkVpjvREfynxD6jH0UeDKJwv53d1thuhL4bjA7YRundJrporlRALuXK6qXljwz-H2C-H6tY1-mxdptF2w0e3zxTyI6Hhs7h2pioCU")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[864px]:w-1/2 @[864px]:pl-12">
                    <div className="flex flex-col gap-4 text-left">
                      <div className="h-1 w-20 bg-coral rounded-full"></div>
                      <h1 className="text-deep-blue dark:text-white text-4xl font-extrabold leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                        Somos el puente entre la visión de tu negocio y la
                        tecnología
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed">
                        Ayudamos a las PYMEs en Latinoamérica a escalar mediante
                        software personalizado de alta calidad, transformando
                        desafíos en ventajas competitivas.
                      </p>
                    </div>
                    <div>
                      <button className="flex min-w-[220px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-deep-blue text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all">
                        <span>Conoce nuestra historia</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-white/5 rounded-2xl p-10 mb-20 border border-[#f0f2f4] dark:border-white/5 shadow-sm accent-coral">
                <h2 className="text-deep-blue dark:text-white text-3xl font-extrabold leading-tight tracking-[-0.015em] pb-6">
                  Nuestra Misión
                </h2>
                <p className="text-gray-700 dark:text-gray-200 text-xl font-normal leading-relaxed">
                  En{" "}
                  <span className="text-deep-blue dark:text-cian font-bold">
                    Nexo Soluciones
                  </span>
                  , nuestra misión es democratizar el acceso a tecnología de
                  punta para las pequeñas y medianas empresas, creando
                  herramientas digitales que optimizan procesos y potencian el
                  crecimiento sostenible en toda la región. Creemos en el
                  talento latinoamericano y en el poder del software para
                  cambiar realidades empresariales.
                </p>
              </div>
              <div className="mb-24">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-deep-blue dark:text-white">
                    Por qué elegirnos
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
                    Nuestros pilares fundamentales para el éxito de tu proyecto
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex flex-1 gap-6 rounded-2xl border border-[#dbe0e6] dark:border-white/10 bg-white dark:bg-white/5 p-8 flex-col hover:border-cian hover:shadow-lg transition-all group">
                    <div className="text-cian bg-cian/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-cian group-hover:text-white transition-colors">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "36px" }}
                      >
                        account_tree
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-deep-blue dark:text-white text-xl font-bold leading-tight">
                        Enfoque en Integración
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                        Conectamos tus sistemas actuales sin fricciones para una
                        operación unificada y eficiente.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-6 rounded-2xl border border-[#dbe0e6] dark:border-white/10 bg-white dark:bg-white/5 p-8 flex-col hover:border-cian hover:shadow-lg transition-all group">
                    <div className="text-cian bg-cian/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-cian group-hover:text-white transition-colors">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "36px" }}
                      >
                        code
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-deep-blue dark:text-white text-xl font-bold leading-tight">
                        Desarrollo a la Medida
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                        Creamos soluciones únicas diseñadas específicamente para
                        resolver tus problemas de negocio.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-6 rounded-2xl border border-[#dbe0e6] dark:border-white/10 bg-white dark:bg-white/5 p-8 flex-col hover:border-cian hover:shadow-lg transition-all group">
                    <div className="text-cian bg-cian/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-cian group-hover:text-white transition-colors">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "36px" }}
                      >
                        support_agent
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-deep-blue dark:text-white text-xl font-bold leading-tight">
                        Soporte Continuo
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                        No te dejamos solo. Ofrecemos acompañamiento técnico
                        experto post-lanzamiento.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-6 rounded-2xl border border-[#dbe0e6] dark:border-white/10 bg-white dark:bg-white/5 p-8 flex-col hover:border-cian hover:shadow-lg transition-all group">
                    <div className="text-cian bg-cian/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-cian group-hover:text-white transition-colors">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "36px" }}
                      >
                        verified_user
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-deep-blue dark:text-white text-xl font-bold leading-tight">
                        Tecnología Robusta
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                        Arquitecturas escalables y seguras preparadas para
                        soportar tu crecimiento futuro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-8 mb-24">
                <div className="flex flex-col gap-2">
                  <h2 className="text-deep-blue dark:text-white text-3xl font-extrabold leading-tight">
                    Nuestro Equipo
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    El talento humano experto que da vida a tu visión
                    tecnológica.
                  </p>
                </div>
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/20 to-transparent z-10"></div>
                  <div className="absolute bottom-12 left-12 z-20 text-white max-w-lg">
                    <p className="text-3xl font-extrabold mb-2">
                      Pasión por la innovación
                    </p>
                    <p className="text-white/80 text-lg">
                      Ubicados estratégicamente en los principales hubs
                      tecnológicos de Latinoamérica.
                    </p>
                    <div className="mt-6 flex gap-2">
                      <span className="w-12 h-1.5 bg-cian rounded-full"></span>
                      <span className="w-4 h-1.5 bg-coral rounded-full"></span>
                      <span className="w-4 h-1.5 bg-white rounded-full"></span>
                    </div>
                  </div>
                  <div
                    className="w-full h-full bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-700"
                    data-alt="Group of diverse professional software developers smiling"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFeqpwNSBffWIfiaI70XHlRbTI1zwsPQVgQgn5HfQiPik5-IXRmjVkJk2JNnvtMc-sQHnW5ctdKzxlFeUx5yMu3g_N4r5fc_O7Pd3WdosmxjXw6ylEAVZaDY7jJQHXNe84PGqk-UIDetLzfFGV5dZLgt3Eu_NkFLIm3tdobqT3FrXJ06xWcmrDiX1C9Ixow9m_cEBGQw24mHUGQq8rwEmr-7VXccmECDFRp-wIbSN4mTdIkL1JYk0oCqh7gk2x8BBD3Q8IPO-egb0")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
              </div>
              <div className="bg-deep-blue rounded-3xl p-16 text-center text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cian/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-coral/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-extrabold mb-6">
                    ¿Listo para transformar tu empresa?
                  </h2>
                  <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
                    Únete a las decenas de PYMEs que ya están escalando sus
                    operaciones con nuestra tecnología de clase mundial.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button className="bg-coral text-white font-extrabold px-10 py-4 rounded-xl hover:bg-[#e65a4d] transition-all shadow-xl hover:translate-y-[-2px] text-lg">
                      Agendar una consulta
                    </button>
                    <button className="bg-transparent border-2 border-white/30 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all text-lg">
                      Ver portafolio
                    </button>
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
