export default function HomePage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#1e293b] dark:text-slate-200 transition-colors duration-300">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">

        <main className="flex-grow">
          <section className="mx-auto max-w-[1280px] px-6 lg:px-20 py-20 @container">
            <div className="flex flex-col gap-12 @[864px]:flex-row items-center">
              <div className="flex flex-col gap-8 flex-1 text-left">
                <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-primary dark:text-white @[480px]:text-6xl">
                  Conectamos y{" "}
                  <span className="text-accent-cyan">potenciamos</span> tu
                  negocio
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-[540px] leading-relaxed">
                  Soluciones a medida de CRM, ERP y NetSuite diseñadas para
                  escalar tu PYME en Latinoamérica con tecnología de vanguardia
                  e integración total.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-cta-coral hover:bg-[#d94343] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-cta-coral/20 transition-all">
                    Hablemos de tu proyecto
                  </button>
                  <button className="border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-primary dark:text-white px-8 py-4 rounded-xl text-base font-bold transition-all">
                    Ver casos de éxito
                  </button>
                </div>
              </div>
              <div
                className="w-full flex-1 aspect-square bg-center bg-no-repeat bg-cover rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800"
                data-alt="Ilustración 3D de red empresarial conectada"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdO6Bc-yRXw2uo7GrhP3f_UJjqZ89ulNmMPcAYNcQ3PHnoKDWkIZ10fX1Ir12erpfQcJP5Qi8K4_i45O4LpRpuXfEQwaeLiXMmmK2eyTE_2flMY-F06VENSg_A2fchr-mMgxtvUwgkC2jchc_DF_rPHVh5jBSiL3hj3X9Q-H6v20uVURBL7eI1KUw-xzCMc1TdA2FB9JuYK3He0tYs07FBZ-njAPtYQx46AiTo_r8Wd832nmX3zRMIJwcQuBRsF97H1AbyukkN-U4")',
                }}
              ></div>
            </div>
          </section>
          <section className="bg-white dark:bg-slate-900 py-12 border-y border-slate-100 dark:border-slate-800">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
              <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-10">
                Nuestras Alianzas &amp; Tecnologías
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-2 font-bold text-xl text-primary dark:text-white">
                  <span className="material-symbols-outlined text-accent-cyan">
                    cloud
                  </span>{" "}
                  NetSuite
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-primary dark:text-white">
                  <span className="material-symbols-outlined text-accent-cyan">
                    account_balance
                  </span>{" "}
                  SAT API
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-primary dark:text-white">
                  <span className="material-symbols-outlined text-accent-cyan">
                    api
                  </span>{" "}
                  Custom APIs
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-primary dark:text-white">
                  <span className="material-symbols-outlined text-accent-cyan">
                    database
                  </span>{" "}
                  ERP Connect
                </div>
                <div className="flex items-center gap-2 font-bold text-xl text-primary dark:text-white">
                  <span className="material-symbols-outlined text-accent-cyan">
                    security
                  </span>{" "}
                  Auth0
                </div>
              </div>
            </div>
          </section>
          <section className="mx-auto max-w-[1280px] px-6 lg:px-20 py-24">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-4xl font-black tracking-tight text-primary dark:text-white">
                Servicios Especializados
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-accent-cyan to-primary mt-6 rounded-full mx-auto md:mx-0"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 bg-accent-cyan/10 rounded-2xl flex items-center justify-center text-accent-cyan mb-8 group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    groups
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">
                  CRM Estratégico
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  Gestión de relaciones comerciales diseñada para optimizar cada
                  etapa del embudo de ventas.
                </p>
                <a
                  className="text-accent-cyan text-sm font-bold flex items-center gap-1 group/link"
                  href="#"
                >
                  Saber más{" "}
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 bg-accent-cyan/10 rounded-2xl flex items-center justify-center text-accent-cyan mb-8 group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    corporate_fare
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">
                  Oracle NetSuite
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  Implementación y personalización de NetSuite para un control
                  total de tu operación.
                </p>
                <a
                  className="text-accent-cyan text-sm font-bold flex items-center gap-1 group/link"
                  href="#"
                >
                  Saber más{" "}
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 bg-accent-cyan/10 rounded-2xl flex items-center justify-center text-accent-cyan mb-8 group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    point_of_sale
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">
                  Sistemas POS
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  Soluciones de punto de venta integradas con inventario y
                  facturación electrónica en tiempo real.
                </p>
                <a
                  className="text-accent-cyan text-sm font-bold flex items-center gap-1 group/link"
                  href="#"
                >
                  Saber más{" "}
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 bg-accent-cyan/10 rounded-2xl flex items-center justify-center text-accent-cyan mb-8 group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    web
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary dark:text-white">
                  Desarrollo Web
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  Plataformas escalables con las últimas tecnologías para tu
                  negocio digital.
                </p>
                <a
                  className="text-accent-cyan text-sm font-bold flex items-center gap-1 group/link"
                  href="#"
                >
                  Saber más{" "}
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section className="bg-slate-50 dark:bg-slate-900/50 py-28">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-cyan/10 rounded-full blur-3xl"></div>
                <div
                  className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-slate-800"
                  data-alt="Panel de control analítico moderno"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPdfKhbIXf1dmintj0kHHFMqEkWUmDYBj3dwi-0R4ChfqE8bOQ-3efAksMWisVkB2OZfjVnbvG39jS133mhn_9aMg2X4ic0F4ftmAgMF5DVsXsaQeTMMwUyOIm8zpKfGPTF_iIMJE0xibfXhFAAqD7W0aVNCWq40kHhWQ9_IbdPrzFisLztbnhPwwdETY8JrcTlBwTJYqyKTTTAFV1sMr1FhQcpLi0PLKcmgPXDENsEbWJBSSxJf8HuW09ou9fx3hHuShxRjjD91A")',
                  }}
                ></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cta-coral/10 rounded-full blur-2xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-cta-coral font-black uppercase tracking-widest text-sm">
                  ¿Por qué elegirnos?
                </span>
                <h2 className="text-4xl font-black mt-6 mb-10 leading-[1.2] text-primary dark:text-white">
                  Digitalización sin fricciones para el mercado Latinoamericano
                </h2>
                <ul className="space-y-8">
                  <li className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                      <span className="material-symbols-outlined text-xl font-bold">
                        check
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary dark:text-white">
                        Localización Fiscal Total
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Nuestras soluciones cumplen con todas las normativas del
                        SAT y entidades tributarias locales.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                      <span className="material-symbols-outlined text-xl font-bold">
                        check
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary dark:text-white">
                        Soporte 24/7 en tu idioma
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Equipo técnico disponible siempre para garantizar la
                        continuidad operativa de tu empresa.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                      <span className="material-symbols-outlined text-xl font-bold">
                        check
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary dark:text-white">
                        Escalabilidad Garantizada
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Software que crece contigo, desde una pequeña oficina
                        hasta operaciones multinacionales.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mx-auto max-w-[1280px] px-6 lg:px-20 py-24">
            <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white text-center flex flex-col items-center gap-10 shadow-3xl shadow-primary/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/20 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta-coral/20 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
              <h2 className="text-4xl lg:text-6xl font-black relative z-10 leading-tight">
                ¿Listo para transformar tu empresa?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl relative z-10 font-medium">
                Agenda una consultoría gratuita hoy mismo y descubre cómo
                nuestras soluciones pueden automatizar tus procesos y aumentar
                tu rentabilidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full sm:w-auto">
                <button className="bg-cta-coral hover:bg-[#d94343] text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-cta-coral/40 transition-all hover:scale-105">
                  Agendar consultoría
                </button>
                <button className="bg-white/5 hover:bg-white/10 border-2 border-white/20 backdrop-blur-md px-12 py-5 rounded-2xl font-black text-lg transition-all">
                  Ver demostración
                </button>
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}
