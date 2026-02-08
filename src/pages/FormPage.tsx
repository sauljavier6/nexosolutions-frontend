import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

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
                  <AnimatePresence mode="wait">
                    {!success ? (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-6"
                      >
                        <h3 className="text-slate-900 dark:text-white text-2xl font-bold pb-4">
                          Envíanos un mensaje
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ej. Juan Pérez"
                            className="form-input w-full rounded-xl h-12 px-4"
                          />

                          <input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nombre de tu empresa"
                            className="form-input w-full rounded-xl h-12 px-4"
                          />
                        </div>

                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="juan@empresa.com"
                          className="form-input w-full rounded-xl h-12 px-4"
                        />

                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Cuéntanos tu proyecto"
                          className="form-textarea w-full rounded-xl px-4 py-3"
                        />

                        <button
                          type="submit"
                          disabled={loading}
                          className="flex w-full items-center justify-center rounded-xl h-14 bg-red-600 hover:bg-red-700 text-white font-bold transition-all"
                        >
                          {loading && (
                            <Loader2 className="animate-spin mr-2" size={16} />
                          )}
                          {loading ? "Enviando..." : "Enviar solicitud"}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                      >
                        <CheckCircle
                          size={60}
                          className="mx-auto mb-6 text-green-500"
                        />
                        <h3 className="text-2xl font-bold mb-2">
                          ¡Mensaje enviado!
                        </h3>
                        <p className="text-slate-500">
                          Te contactaremos en menos de 24 horas.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8">
                  <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full"></div>

                    <h4 className="text-xl font-bold text-white mb-3 relative z-10">
                      ¿Quieres una respuesta rápida?
                    </h4>

                    <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                      Agenda una llamada de descubrimiento de 30 minutos
                      directamente con uno de nuestros consultores expertos.
                    </p>

                    <button className="flex w-full items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white rounded-xl h-14 px-6 font-bold transition-all shadow-lg relative z-10">
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
