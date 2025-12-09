import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450779333149-639293618a6c?q=80&w=2070&auto=format&fit=crop")' }}
          >
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Adopta, Reporta, Ayuda</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Tu apoyo hace la diferencia en la vida de los animales. Adopta, reporta el maltrato y ayuda a crear un mundo
              mejor para ellos.
            </p>
            <button
              className="mt-8 inline-flex items-center justify-center rounded-full h-12 px-8 bg-primary text-background-dark text-base font-bold hover:bg-primary/90 transition-colors"
            >
              Conoce más
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="group flex flex-col items-center text-center">
                <div
                  className="w-full aspect-square rounded-lg bg-cover bg-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570018144715-43110363d70a?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Adopción</h3>
              </div>
              {/* Service 2 */}
              <div className="group flex flex-col items-center text-center">
                <div
                  className="w-full aspect-square rounded-lg bg-cover bg-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505628346881-b72e2780457f?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Reportar Maltrato</h3>
              </div>
              {/* Service 3 */}
              <div className="group flex flex-col items-center text-center">
                <div
                  className="w-full aspect-square rounded-lg bg-cover bg-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Solicitar Esterilización</h3>
              </div>
              {/* Service 4 */}
              <div className="group flex flex-col items-center text-center">
                <div
                  className="w-full aspect-square rounded-lg bg-cover bg-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532202802379-df93d543bac3?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Pláticas de Concientización</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Adoption Section */}
        <section className="bg-background-light dark:bg-background-dark py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-text-light dark:text-text-dark">Animales en Adopción</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Pet Card 1 */}
              <div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                <div 
                  className="w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-text-light dark:text-text-dark">Max</p>
                  <p className="text-sm text-muted-light dark:text-muted-dark">Amigable y juguetón</p>
                </div>
              </div>
              {/* Pet Card 2 */}
              <div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                <div 
                  className="w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529778873920-4da4926a7071?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-text-light dark:text-text-dark">Bella</p>
                  <p className="text-sm text-muted-light dark:text-muted-dark">Cariñosa y tranquila</p>
                </div>
              </div>
              {/* Pet Card 3 */}
              <div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                <div 
                  className="w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-text-light dark:text-text-dark">Rocky</p>
                  <p className="text-sm text-muted-light dark:text-muted-dark">Energético y leal</p>
                </div>
              </div>
              {/* Pet Card 4 */}
              <div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
                <div 
                  className="w-full aspect-square bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1000&auto=format&fit=crop")' }}
                >
                </div>
                <div className="p-4">
                  <p className="text-lg font-bold text-text-light dark:text-text-dark">Luna</p>
                  <p className="text-sm text-muted-light dark:text-muted-dark">Independiente y curiosa</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}