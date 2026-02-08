export default function SolutionsPage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Soluciones Tecnológicas para tu Negocio
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-10 opacity-90">
            Automatizamos, optimizamos y digitalizamos tu empresa con software
            moderno, seguro y escalable.
          </p>
          <button className="bg-white text-blue-700 font-extrabold px-8 py-4 rounded-lg hover:scale-105 transition">
            Cotizar ahora
          </button>
        </div>
      </section>

      {/* ================= SOLUCIONES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Nuestras Soluciones
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Todo lo que tu empresa necesita en un solo proveedor tecnológico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* POS */}
            <Card
              title="Punto de Venta (POS)"
              img="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              text="Control de ventas, inventario, facturación y reportes."
              color="bg-blue-600"
            />

            {/* Sistemas Web */}
            <Card
              title="Sistemas Web"
              img="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              text="Software a la medida para automatizar procesos."
              color="bg-emerald-600"
            />

            {/* Ecommerce */}
            <Card
              title="Ecommerce"
              img="https://images.unsplash.com/photo-1542744095-291d1f67b221"
              text="Tiendas en línea con pagos, envíos y catálogo."
              color="bg-red-600"
            />

            {/* Landing */}
            <Card
              title="Landing Pages"
              img="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              text="Páginas de alta conversión para campañas."
              color="bg-purple-600"
            />

            {/* Automatizaciones */}
            <Card
              title="Automatizaciones"
              img="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              text="Bots, integraciones y flujos automáticos."
              color="bg-orange-600"
            />

            {/* Facturación */}
            <Card
              title="Sistemas de Facturación"
              img="https://images.unsplash.com/photo-1581091870627-3af0b5d1c1f7?auto=format&fit=crop&w=1200&q=80"
              text="CFDI, reportes fiscales y control financiero."
              color="bg-cyan-600"
            />

            {/* Hosting */}
            <Card
              title="Hosting Empresarial"
              img="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              text="Servidores rápidos, seguros y monitoreados."
              color="bg-indigo-600"
            />

            {/* Bases de datos */}
            <Card
              title="Bases de Datos"
              img="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              text="Diseño, optimización y respaldo de datos."
              color="bg-teal-600"
            />

            {/* Dominios */}
            <Card
              title="Gestión de Dominios"
              img="https://images.unsplash.com/photo-1518770660439-4636190af475"
              text="Registro, renovación y configuración DNS."
              color="bg-pink-600"
            />

            {/* Cloud */}
            <Card
              title="Infraestructura Cloud"
              img="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              text="AWS, Azure, Google Cloud y DevOps."
              color="bg-slate-700"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            ¿Listo para escalar tu empresa?
          </h2>
          <p className="text-slate-300 mb-10">
            Un solo proveedor. Todas tus soluciones tecnológicas.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg font-bold">
            Agenda una consultoría
          </button>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTE CARD ================= */
function Card({ title, img, text, color }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col">
      <div
        className="h-40 rounded-xl bg-cover bg-center mb-6"
        style={{ backgroundImage: `url(${img})` }}
      />
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 mb-6 flex-grow">{text}</p>
      <button
        className={`${color} hover:opacity-90 text-white font-bold py-3 rounded-lg`}
      >
        Solicitar información
      </button>
    </div>
  );
}
