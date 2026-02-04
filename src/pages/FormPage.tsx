export default function FormPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
        <div className="layout-container flex h-full grow flex-col">
          <main className="flex flex-1 flex-col items-center">
            <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1 px-6 md:px-10 py-12">
              <div className="flex flex-wrap justify-between gap-3 mb-12">
                <div className="flex min-w-72 flex-col gap-4">
                  <h1 className="text-slate-900 dark:text-white text-5xl font-extrabold leading-tight tracking-tight">
                    Hablemos de tu{" "}
                    <span className="text-[var(--primary-cian)]">
                      próximo proyecto
                    </span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl border-l-4 border-[var(--accent-coral)] pl-6 py-2">
                    Estamos listos para ayudarte a escalar tu PYME con software
                    a medida. Cuéntanos tu idea y nuestro equipo se pondrá en
                    contacto contigo en menos de 24 horas.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                  <h3 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight pb-8">
                    Envíanos un mensaje
                  </h3>
                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">
                          Nombre completo
                        </label>
                        <input
                          className="form-input w-full rounded-xl text-slate-900 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-4 text-base focus:border-[var(--primary-cian)] focus:ring-2 focus:ring-[var(--primary-cian)]/20 transition-all placeholder:text-slate-400"
                          placeholder="Ej. Juan Pérez"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">
                          Empresa
                        </label>
                        <input
                          className="form-input w-full rounded-xl text-slate-900 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-4 text-base focus:border-[var(--primary-cian)] focus:ring-2 focus:ring-[var(--primary-cian)]/20 transition-all placeholder:text-slate-400"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">
                          Correo electrónico
                        </label>
                        <input
                          className="form-input w-full rounded-xl text-slate-900 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-4 text-base focus:border-[var(--primary-cian)] focus:ring-2 focus:ring-[var(--primary-cian)]/20 transition-all placeholder:text-slate-400"
                          placeholder="juan@empresa.com"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">
                          Teléfono
                        </label>
                        <input
                          className="form-input w-full rounded-xl text-slate-900 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-4 text-base focus:border-[var(--primary-cian)] focus:ring-2 focus:ring-[var(--primary-cian)]/20 transition-all placeholder:text-slate-400"
                          placeholder="+52 ..."
                          type="tel"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">
                        Interés Principal
                      </label>
                      <select className="form-select w-full rounded-xl text-slate-900 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-12 px-4 text-base focus:border-[var(--primary-cian)] focus:ring-2 focus:ring-[var(--primary-cian)]/20 transition-all">
                        <option value="">Selecciona una opción</option>
                        <option value="custom-software">
                          Desarrollo de Software a Medida
                        </option>
                        <option value="app-mobile">
                          Aplicación Móvil (iOS/Android)
                        </option>
                        <option value="web-dev">
                          Plataforma Web / E-commerce
                        </option>
                        <option value="cloud">
                          Soluciones en la Nube / DevOps
                        </option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-700 dark:text-slate-300 text-sm font-bold">
                        Mensaje
                      </label>
                      <textarea
                        className="form-textarea w-full rounded-xl text-slate-900 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 min-h-[140px] px-4 py-3 text-base focus:border-[var(--primary-cian)] focus:ring-2 focus:ring-[var(--primary-cian)]/20 transition-all placeholder:text-slate-400"
                        placeholder="Cuéntanos brevemente sobre los retos de tu proyecto..."
                      ></textarea>
                    </div>
                    <button
                      className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-[var(--accent-coral)] text-white text-base font-bold leading-normal tracking-wide hover:brightness-110 transition-all shadow-lg hover:shadow-[var(--accent-coral)]/20 mt-4"
                      type="submit"
                    >
                      Enviar solicitud de consulta
                    </button>
                  </form>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-8">
                  <div className="bg-[var(--primary-dark)] p-8 rounded-2xl border border-[var(--primary-dark)] shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 size-40 bg-white/5 rounded-full"></div>
                    <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                      ¿Quieres una respuesta rápida?
                    </h4>
                    <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                      Agenda una llamada de descubrimiento de 30 minutos
                      directamente con uno de nuestros consultores expertos.
                    </p>
                    <button className="flex w-full items-center justify-center gap-3 bg-[var(--accent-coral)] text-white rounded-xl h-14 px-6 font-bold hover:brightness-110 transition-all shadow-lg relative z-10">
                      <span className="material-symbols-outlined">
                        calendar_today
                      </span>
                      Agendar llamada en Calendly
                    </button>
                  </div>
                  <div className="flex flex-col gap-8 px-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-8 h-1 bg-[var(--primary-cian)] rounded-full"></span>
                      Información de contacto
                    </h4>
                    <div className="flex items-start gap-5 group">
                      <div className="bg-[var(--primary-cian)]/10 p-3.5 rounded-2xl text-[var(--primary-cian)] group-hover:bg-[var(--primary-cian)] group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">
                          mail
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                          Email
                        </p>
                        <p className="text-slate-900 dark:text-white font-bold text-lg">
                          hola@nexosoluciones.lat
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 group">
                      <div className="bg-[var(--primary-cian)]/10 p-3.5 rounded-2xl text-[var(--primary-cian)] group-hover:bg-[var(--primary-cian)] group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">
                          call
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                          Teléfono
                        </p>
                        <p className="text-slate-900 dark:text-white font-bold text-lg">
                          +52 (55) 1234 5678
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 group">
                      <div className="bg-[var(--primary-cian)]/10 p-3.5 rounded-2xl text-[var(--primary-cian)] group-hover:bg-[var(--primary-cian)] group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">
                          location_on
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                          Ubicación
                        </p>
                        <p className="text-slate-900 dark:text-white font-bold text-lg">
                          Ciudad de México, México
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Atención remota a toda Latinoamérica
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-[220px] w-full bg-slate-200 dark:bg-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner group">
                      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center transition-opacity group-hover:opacity-0">
                        <span className="text-slate-400 text-sm font-medium">
                          Cargando mapa...
                        </span>
                      </div>
                      <img
                        alt="Mapa de ubicación"
                        className="w-full h-full object-cover opacity-80 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSK3BNtKFMFr3QfOH1cy3ZCBbHBZav6F_ijXP42QFosMPY5Xy8CiR2lCncCPEAgyvdJn6Uek01I8_fw1FsMHsTmefa5Rkem7OLs1TFRWkNWZJxohEcnHnMJENNnDTTbgoB0Wk-foHWlUU_Wli1-kPJE4dyelpqM072EUdBV3hpZj2IbWgSNQlu8b3aE5MnSa5uG88byBPJwbUsqZwScgupASLTvCvBQuPw__ABWMsfXAx8a1FYDtlXKj0YQoAm8YAPP1xCYfCSId4"
                      />
                      <div className="absolute bottom-4 left-4 bg-white dark:bg-slate-900 px-3 py-1 rounded-full shadow-lg border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] font-bold text-[var(--primary-dark)] dark:text-white flex items-center gap-1">
                          <span className="size-2 rounded-full bg-[var(--accent-coral)] animate-pulse"></span>
                          Nuestra Sede Central
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
