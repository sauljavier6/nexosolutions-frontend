import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      <div className="relative flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col items-center">
          <div className="w-full max-w-[1100px] px-6 py-16 flex flex-col gap-14">
            <div className="flex flex-col gap-4 border-l-4 border-primary-cyan pl-6">
              <h1 className="text-deep-blue dark:text-white text-5xl font-extrabold leading-tight tracking-tighter font-display">
                Nuestros Servicios
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-2xl">
                Soluciones tecnológicas de alto impacto para PYMEs en
                Latinoamérica. Impulsamos su transformación digital con
                precisión y eficiencia corporativa.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 rounded-2xl bg-white dark:bg-slate-800/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                <div className="flex flex-[3_3_0px] flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary-cyan">
                      <span className="material-symbols-outlined font-bold">
                        group
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-[0.2em]">
                        Gestión Comercial
                      </span>
                    </div>
                    <h3 className="text-deep-blue dark:text-white text-2xl font-extrabold font-display">
                      CRM Personalizado
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Gestione la relación con sus clientes de manera eficiente.
                      Centralice datos, automatice seguimientos de leads y
                      mejore su tasa de conversión con herramientas adaptadas
                      100% a su flujo de trabajo específico. Incluye tableros de
                      control en tiempo real.
                    </p>
                  </div>
                  <button className="flex min-w-[160px] items-center justify-center rounded-lg h-12 px-6 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase tracking-wider w-fit transition-all shadow-md active:scale-95">
                    Solicitar información
                  </button>
                </div>
                <div
                  className="w-full md:w-2/5 bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-inner border-4 border-slate-50 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUBWhJFZATEM2sKNp-MP9CeYr-OiFB-3-RQphyFAq2oxPtT8SCQeDfdHe6KNkXhTbreu9F9pcxK7am3JOBnbp0QEYqURXD5HFN4j5UeYMorvpMFyBAHv9gwJ4w3Kh49ONhSIA_dm7380AAk-2AGoaNGH99t9w1V8lc_VdD3XMdbcPHoAgWmCPxsIHhZah30m5f0eq2J3XIO8s4dKLcNryfuBIsUz6hftxXMNHOPxauqrEcNaB0JUjzI0EkPS5Ov_RxNqiogrLqdi0")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 rounded-2xl bg-white dark:bg-slate-800/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                <div className="flex flex-[3_3_0px] flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary-cyan">
                      <span className="material-symbols-outlined font-bold">
                        account_balance
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-[0.2em]">
                        Recursos Empresariales
                      </span>
                    </div>
                    <h3 className="text-deep-blue dark:text-white text-2xl font-extrabold font-display">
                      Sistemas ERP
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Optimice sus recursos empresariales con una plataforma
                      unificada. Control de inventarios multisede, gestión
                      financiera, cuentas por cobrar y pagar. Una solución
                      robusta que crece junto a su empresa.
                    </p>
                  </div>
                  <button className="flex min-w-[160px] items-center justify-center rounded-lg h-12 px-6 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase tracking-wider w-fit transition-all shadow-md active:scale-95">
                    <span>Solicitar información</span>
                  </button>
                </div>
                <div
                  className="w-full md:w-2/5 bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-inner border-4 border-slate-50 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvZ0dGkBGTLLy37jJTkFDPQqb93DAHGU9TybrcU1SeqYSHTLgDhsXCtAG17buh13za4t1G56kdaqc69SxGrT0w3TUfuVs0GHGw-HGGDKFqHGtdikHdx30z0QRYr1R7VXKfDSOyTbYrD21rJuSuZHOtt4bbECX7hlnT7MGk-Q499jl4HnCXIrwhyBP03LHOtQ9WsOjqYo50iYLytDD9Q3u4SIJGqeKlooRtviF2fnP2U4XOzKdlujkeYku05iP6dL_8xXMciphHCmU")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 rounded-2xl bg-gradient-to-br from-[#0b1c2d] to-[#123456] p-10 shadow-2xl text-white relative overflow-hidden group">
                {/* Efecto luz */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                {/* Contenido */}
                <div className="flex flex-col justify-between gap-8 relative z-10 md:w-3/5">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="material-symbols-outlined font-bold">
                        cloud_sync
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-[0.3em]">
                        SERVICIO DESTACADO
                      </span>
                    </div>

                    <h3 className="text-3xl font-black leading-tight tracking-tight">
                      Integración Oracle NetSuite
                    </h3>

                    <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                      Sincronización experta con la nube líder. Conectamos sus
                      sistemas actuales y plataformas de e-commerce con Oracle
                      NetSuite para una visibilidad total y automática en tiempo
                      real.
                    </p>
                  </div>

                  <button className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase tracking-widest w-fit transition-all shadow-lg hover:scale-105">
                    Consultar con un Experto
                  </button>
                </div>

                {/* Imagen */}
                <div
                  className="w-full md:w-2/5 aspect-video bg-cover bg-center rounded-xl shadow-2xl border-4 border-white/20 relative z-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7xwaaHHz2v12ICf3t33HHSu-NzJ4hfrhUZfNxmWp1CHiH-4_ex93eQeRs3zsv2NwuyoRmmzQ4RjYmH-rzR7uL62i_t7uBfwXAtxEgIO5ynBUwNTT9d4rWHxL4qhF9wZhBJljHuuuIc5jBmDVHkYbtlJam6arkFqKKsaaVx2G4bq9lZqL-l97L6_OCAl6Nf8NW95Pxc8MMvJQwUGKIYVDzR5LB9P3d4aq6rm1iJRYbA-2d4vq6xygID4MZ-TtYS6SWvtWpq1TjNQs")',
                  }}
                ></div>
              </div>

              <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 rounded-2xl bg-white dark:bg-slate-800/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                <div className="flex flex-[3_3_0px] flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary-cyan">
                      <span className="material-symbols-outlined font-bold">
                        point_of_sale
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-[0.2em]">
                        Punto de Venta
                      </span>
                    </div>
                    <h3 className="text-deep-blue dark:text-white text-2xl font-extrabold font-display">
                      POS &amp; Facturación Electrónica
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Cumpla con todas las normativas legales vigentes. Nuestro
                      punto de venta permite una facturación ágil, gestión de
                      turnos y emisión de facturas electrónicas directas,
                      reduciendo errores.
                    </p>
                  </div>
                  <button className="flex min-w-[160px] items-center justify-center rounded-lg h-12 px-6 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase tracking-wider w-fit transition-all shadow-md active:scale-95">
                    <span>Solicitar información</span>
                  </button>
                </div>
                <div
                  className="w-full md:w-2/5 bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-inner border-4 border-slate-50 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 rounded-2xl bg-white dark:bg-slate-800/50 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                <div className="flex flex-[3_3_0px] flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary-cyan">
                      <span className="material-symbols-outlined font-bold">
                        code
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-[0.2em]">
                        Software Engineering
                      </span>
                    </div>
                    <h3 className="text-deep-blue dark:text-white text-2xl font-extrabold font-display">
                      Desarrollo Web a la Medida
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Cuando las soluciones estándar no son suficientes. Creamos
                      aplicaciones web progresivas (PWA) y plataformas
                      complejas. Enfoque total en UX/UI y rendimiento
                      excepcional.
                    </p>
                  </div>
                  <button className="flex min-w-[160px] items-center justify-center rounded-lg h-12 px-6 bg-red-600 hover:bg-red-700 text-white text-sm font-black uppercase tracking-wider w-fit transition-all shadow-md active:scale-95">
                    <span>Solicitar información</span>
                  </button>
                </div>
                <div
                  className="w-full md:w-2/5 bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-inner border-4 border-slate-50 dark:border-slate-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9IKmuWxU9ut-77Fih_i9Tayyw6ofXFTHh2YJetNWR4t7pLszIbYPxktb2Axgn8Xa4r5K9W467SZE5wwL9ojYGG8CcmTZ3CDyJ9hHzEXs45rg6agor7hyUOINXmV3wq-LWGOm11j60z9p2a3c0rr5mySVsj3d7pm754NKY792M2OgYH71-JKy1jbeq5yH_28SA2I8iP0oMn3LbD5o_Dzb1pY6-nR2w_BVijYqaV3y6x8F4UfS8hR1weOOn-8FPiHrH2eQ7SK18pXg")',
                  }}
                ></div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center gap-8 p-12 rounded-[2rem] bg-gradient-to-br from-[#0b1c2d] to-[#102a43] text-white text-center relative overflow-hidden shadow-2xl">
              {/* textura */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

              <h4 className="text-3xl md:text-4xl font-extrabold relative z-10">
                ¿Listo para transformar su negocio?
              </h4>

              <p className="text-white/80 text-lg max-w-xl relative z-10">
                Nuestros consultores están listos para analizar sus necesidades
                y proponer la mejor estrategia tecnológica personalizada.
              </p>

              <div className="flex gap-4 relative z-10">
                <button onClick={() => navigate("/contacto")} className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 px-10 rounded-xl transition-all shadow-lg hover:scale-105">
                  Agendar Consultoría Gratuita
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
