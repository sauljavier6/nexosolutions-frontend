export default function BlogPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex-1 flex flex-col items-center">
            <div className="layout-content-container flex flex-col max-w-[1200px] w-full px-4 md:px-10 py-8">
              <section className="mb-12">
                <div className="@[480px]:gap-8 flex flex-col gap-6 lg:flex-row bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                  <div
                    className="w-full lg:w-3/5 bg-center bg-no-repeat aspect-video bg-cover"
                    data-alt="Modern business office with team working on CRM software"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg20lektczszvfGR9NadJRUfSDzXQSslbMOnJCIRXkXkSN2mlansrPYqbjAvYOqpU-P29KlFtpLh_7-qI0sSNPXrdcz7k4UQAOYSJZKMfnYMY_B4jI-6TUq-wIhZVRrnlxOyRUcQdDtUH_SBenn0CZQbh8caoX6x1dkPN96yVfr46MxbP860qJwnQNa1EuO8wUiTeRpGucVP_OZxgkMoBHJrQeyOs2INJ_KL8H0KDJuB4kwj2xLbRSfIlU_k76rwrHJMsTI4flGGk")`,
                    }}
                  ></div>
                  <div className="flex flex-col gap-6 p-8 lg:w-2/5 justify-center">
                    <div className="flex flex-col gap-3">
                      <span className="text-cyan-accent font-bold text-xs uppercase tracking-wider">
                        Artículo Destacado
                      </span>
                      <h1 className="text-deep-blue dark:text-white text-3xl font-black leading-tight tracking-tight lg:text-4xl">
                        5 señales de que necesitas un CRM a la medida
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                        Descubre cómo un sistema personalizado puede transformar
                        la eficiencia de tu equipo y potenciar tus ventas
                        mediante la automatización inteligente.
                      </p>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-red-600 text-white rounded-lg h-12 px-6 font-bold transition-all w-fit">
                      Leer artículo completo
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </section>

              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
                <h2 className="text-deep-blue dark:text-white text-2xl font-bold">
                  Últimos Artículos y Recursos
                </h2>
                <div className="flex border-b border-gray-200 dark:border-gray-800 gap-6">
                  <a
                    className="border-b-2 border-primary text-deep-blue dark:text-white pb-2 text-sm font-bold"
                    href="#"
                  >
                    Todos
                  </a>
                  <a
                    className="border-b-2 border-transparent text-gray-500 hover:text-cyan-accent pb-2 text-sm font-bold transition-colors"
                    href="#"
                  >
                    Tecnología
                  </a>
                  <a
                    className="border-b-2 border-transparent text-gray-500 hover:text-cyan-accent pb-2 text-sm font-bold transition-colors"
                    href="#"
                  >
                    Software
                  </a>
                  <a
                    className="border-b-2 border-transparent text-gray-500 hover:text-cyan-accent pb-2 text-sm font-bold transition-colors"
                    href="#"
                  >
                    Estrategia
                  </a>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm overflow-hidden"
                        data-alt="Cloud data security concepts with abstract digital icons"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMXAFQLRxEjklrhSQPbVP3XNeeS1PI2XMTPDm92VKzQE6PhTolLpgYMdKZSfo5mopXadShmCU7H9rJiVMRf7aGO0cVFHFrbjgppJn54GqWxlFoMQ5pOdrQjq5VcwqbTPTa2S1_q_gfXiyaG5-RsvY_57YwYF1GSIvhBF147ICawJzS2rbhAQLy6fxNG1xH_OqOlb-R0wU3Gw0L_bRmjD6RgzlFYkbyT7qmxsLjofIr6dXmXBXxZjB9fBRDJDTa1iF4xl7AppCcZyQ")`,
                        }}
                      ></div>
                      <div className="flex flex-col gap-2">
                        <span className="text-cyan-accent text-xs font-bold uppercase">
                          Seguridad
                        </span>
                        <h3 className="text-deep-blue dark:text-white text-xl font-bold group-hover:text-primary transition-colors">
                          Seguridad en la nube para PyMEs
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          Protege los activos más valiosos de tu empresa con
                          protocolos de seguridad de última generación.
                        </p>
                        <a
                          className="text-primary text-sm font-bold flex items-center gap-1 mt-2 hover:underline"
                          href="#"
                        >
                          Leer más{" "}
                          <span className="material-symbols-outlined text-xs">
                            open_in_new
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm overflow-hidden"
                        data-alt="Artificial intelligence brain and futuristic circuit patterns"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAF_-UA5RHjW4hJhyBJPxjqESFMdLPOsRPww_486gJaMuaUJSq_lHSIBCHnE7y56_qMmZfA4leMD_MT8st073NRhX23R3-CBXMVQyPSDFjcWAq662taFJEf3IjnAR0GT_C42cYusVX-2lI9UZQg5OEMKo6hnWWFQaNp9An0WSKI8vWiqUoWwxtRNeQUgoAA-w5aa1zVoLPy467DwSnqpJNM01EoO9MWZ8eadZsqWLOni8bMOuAA_vtX4Z7agcrmZs6pjKbegrv8AMo")`,
                        }}
                      ></div>
                      <div className="flex flex-col gap-2">
                        <span className="text-cyan-accent text-xs font-bold uppercase">
                          Software
                        </span>
                        <h3 className="text-deep-blue dark:text-white text-xl font-bold group-hover:text-primary transition-colors">
                          IA: El futuro del desarrollo
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          Cómo la inteligencia artificial está redefiniendo los
                          ciclos de vida del desarrollo de software corporativo.
                        </p>
                        <a
                          className="text-primary text-sm font-bold flex items-center gap-1 mt-2 hover:underline"
                          href="#"
                        >
                          Leer más{" "}
                          <span className="material-symbols-outlined text-xs">
                            open_in_new
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm overflow-hidden"
                        data-alt="Dashboard showing data visualization and workflow optimization"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyrm4Q_-UD5E96T4chLkSOYdt8VG_j_R3PVDbqM9haqKbWIsMFbYfBrSI8SEZenchIkXOX7YFtIjHDEWW7gk_eZJzKN4X1bYhUC59klfPF2trKOSDrKzC8gmzmMykTa7QPaby2C8cGTjCx64CaoDhPhZTZJzIvYDC2UGglrw8RC3r6i338SVjxVMtY7ypqZzxAk3ntT0xO_jt32Tiuz6yXFfB_F9Us55vI5BHDYVh5n-UINCExakMDNLwmlsOzZ9jRnrm3CACjlUo")`,
                        }}
                      ></div>
                      <div className="flex flex-col gap-2">
                        <span className="text-cyan-accent text-xs font-bold uppercase">
                          Productividad
                        </span>
                        <h3 className="text-deep-blue dark:text-white text-xl font-bold group-hover:text-primary transition-colors">
                          Optimización de flujos de trabajo
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          Metodologías ágiles y herramientas digitales para
                          maximizar el rendimiento operativo.
                        </p>
                        <a
                          className="text-primary text-sm font-bold flex items-center gap-1 mt-2 hover:underline"
                          href="#"
                        >
                          Leer más{" "}
                          <span className="material-symbols-outlined text-xs">
                            open_in_new
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 group">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm overflow-hidden"
                        data-alt="Data migration process illustrated with digital storage icons"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSQETOL-BS_A6bFKDkncUO__BT09yYRxc3zF-MyuZXVIDnLC0hUEjQWal-59Mm8KScCwQEK0JWFCrpFR_MitFY9G5CYXpPLZ6yiwPxR5Mp-Nu8c9LxfwUOmr71yFfOQ0SfywPBJ-VCh8W6ea2wP03wwDAk1Ui3RH7jcBC2ytSI_ec6qcsyQ0QXMWih2tmkQrq1hSJMUTpgHi9Z-LFPkNYZVZS3vz96R5Sy_Z-_zXd1Qa10k9wSxm186P68TWfjw6FrOA_GNQjVHb8")`,
                        }}
                      ></div>
                      <div className="flex flex-col gap-2">
                        <span className="text-cyan-accent text-xs font-bold uppercase">
                          Tecnología
                        </span>
                        <h3 className="text-deep-blue dark:text-white text-xl font-bold group-hover:text-primary transition-colors">
                          Migración de datos sin riesgos
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          Guía paso a paso para mover la infraestructura de tu
                          empresa hacia entornos híbridos.
                        </p>
                        <a
                          className="text-primary text-sm font-bold flex items-center gap-1 mt-2 hover:underline"
                          href="#"
                        >
                          Leer más{" "}
                          <span className="material-symbols-outlined text-xs">
                            open_in_new
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/*<div className="flex justify-center mt-12 gap-2">
                    <button className="size-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded text-deep-blue dark:text-white font-bold bg-white dark:bg-gray-800">
                      1
                    </button>
                    <button className="size-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded text-gray-500 hover:bg-gray-50 transition-colors">
                      2
                    </button>
                    <button className="size-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded text-gray-500 hover:bg-gray-50 transition-colors">
                      3
                    </button>
                    <button className="size-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded text-gray-500 hover:bg-gray-50 transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div> */}
                </div>

                <aside className="w-full lg:w-80 flex flex-col gap-8">
                  <div className="bg-deep-blue p-8 rounded-xl text-white">
                    <h3 className="text-xl font-bold mb-4 text-slate-900">
                      Suscríbete al Newsletter
                    </h3>

                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      Recibe las últimas tendencias en tecnología y software
                      directamente en tu bandeja de entrada cada semana.
                    </p>

                    <form className="flex flex-col gap-4">
                      <input
                        className="w-full rounded-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-accent focus:ring-cyan-accent"
                        placeholder="Tu correo electrónico"
                        type="email"
                      />
                      <button
                        className="bg-primary hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors"
                        type="submit"
                      >
                        Suscribirme ahora
                      </button>
                    </form>
                    <p className="text-[10px] text-gray-400 mt-4 text-center">
                      No compartimos tus datos. Puedes darte de baja en
                      cualquier momento.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-xl">
                    <h3 className="text-deep-blue dark:text-white font-bold mb-4">
                      Temas Populares
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium hover:bg-cyan-accent/20 cursor-pointer transition-colors">
                        #CRM
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium hover:bg-cyan-accent/20 cursor-pointer transition-colors">
                        #SaaS
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium hover:bg-cyan-accent/20 cursor-pointer transition-colors">
                        #DataAnalytics
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium hover:bg-cyan-accent/20 cursor-pointer transition-colors">
                        #UIUX
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium hover:bg-cyan-accent/20 cursor-pointer transition-colors">
                        #CyberSecurity
                      </span>
                      <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium hover:bg-cyan-accent/20 cursor-pointer transition-colors">
                        #Agile
                      </span>
                    </div>
                  </div>

                  <div className="bg-cyan-accent/10 border border-cyan-accent/20 p-6 rounded-xl relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-deep-blue font-bold mb-2">
                        Ebook Gratuito
                      </h3>
                      <p className="text-deep-blue/70 text-sm mb-4">
                        Guía completa de Transformación Digital 2024.
                      </p>
                      <a
                        className="text-deep-blue font-bold text-sm underline"
                        href="#"
                      >
                        Descargar PDF
                      </a>
                    </div>
                    <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-cyan-accent/20 -rotate-12">
                      menu_book
                    </span>
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
