"use client"; // Importante: Necesario porque usamos useState para la interactividad

import React, { useState } from 'react';

export default function ServiciosPage() {
  // Estado para controlar qué formulario se muestra (equivalente al x-data de Alpine)
  const [service, setService] = useState<'sterilizacion' | 'platicas'>('sterilizacion');

  // Clases comunes para los inputs para no repetir tanto código
  const inputClass = "w-full bg-background-light dark:bg-background-dark border border-primary/30 dark:border-primary/40 rounded-lg focus:ring-primary focus:border-primary p-2 outline-none transition-colors";
  
  // Estilo para la flecha verde personalizada del select (extraído de tu HTML original)
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2317cf17' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: "right 0.5rem center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1.5em 1.5em",
    paddingRight: "2.5rem",
    appearance: "none" as const, // TypeScript necesita saber que es un valor válido
    WebkitAppearance: "none" as const,
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#112111] dark:text-white mb-8 font-display">
          ¿Qué servicio te interesa?
        </h2>

        {/* Botones de selección (Toggle) */}
        <div className="flex justify-center gap-4 mb-10 p-1 bg-primary/10 dark:bg-primary/20 rounded-lg">
          <button
            onClick={() => setService('sterilizacion')}
            className={`w-full text-center font-semibold py-2 px-4 rounded-md transition-colors duration-300 ${
              service === 'sterilizacion'
                ? 'bg-primary text-background-dark'
                : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5'
            }`}
          >
            Esterilización
          </button>
          <button
            onClick={() => setService('platicas')}
            className={`w-full text-center font-semibold py-2 px-4 rounded-md transition-colors duration-300 ${
              service === 'platicas'
                ? 'bg-primary text-background-dark'
                : 'text-gray-700 dark:text-gray-300 hover:bg-primary/5'
            }`}
          >
            Pláticas de Concientización
          </button>
        </div>

        {/* Formulario de Esterilización */}
        {service === 'sterilizacion' && (
          <form className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 font-display" htmlFor="species">Especie</label>
                <select className={inputClass} style={selectStyle} id="species" name="species" defaultValue="">
                  <option disabled value="">Selecciona una especie</option>
                  <option>Perro</option>
                  <option>Gato</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 font-display" htmlFor="sex">Sexo</label>
                <select className={inputClass} style={selectStyle} id="sex" name="sex" defaultValue="">
                  <option disabled value="">Selecciona el sexo</option>
                  <option>Macho</option>
                  <option>Hembra</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 font-display" htmlFor="breed">Raza</label>
                <input className={inputClass} id="breed" name="breed" placeholder="Ej. Mestizo" type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 font-display" htmlFor="age">Edad</label>
                <input className={inputClass} id="age" name="age" placeholder="Ej. 2 años" type="text" />
              </div>
            </div>

            <div className="space-y-4">
              {/* Radio Groups con diseño personalizado */}
              {[
                { label: "¿Está gestante?", name: "pregnant" },
                { label: "¿Es callejero?", name: "stray" },
                { label: "¿Está en celo?", name: "in_heat" }
              ].map((field) => (
                <fieldset key={field.name}>
                  <legend className="text-sm font-medium mb-2 font-display">{field.label}</legend>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 p-3 border border-primary/30 dark:border-primary/40 rounded-lg cursor-pointer has-[:checked]:bg-primary/20 has-[:checked]:border-primary transition-colors hover:bg-primary/5">
                      <input className="accent-primary w-4 h-4" name={field.name} type="radio" value="yes" />
                      <span className="font-display">Sí</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-primary/30 dark:border-primary/40 rounded-lg cursor-pointer has-[:checked]:bg-primary/20 has-[:checked]:border-primary transition-colors hover:bg-primary/5">
                      <input className="accent-primary w-4 h-4" name={field.name} type="radio" value="no" />
                      <span className="font-display">No</span>
                    </label>
                  </div>
                </fieldset>
              ))}
            </div>
          </form>
        )}

        {/* Formulario de Pláticas */}
        {service === 'platicas' && (
          <form className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-medium mb-1 font-display" htmlFor="applicant_name">Nombre del solicitante</label>
              <input className={inputClass} id="applicant_name" name="applicant_name" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 font-display" htmlFor="place_type">Tipo de lugar</label>
              <select className={inputClass} style={selectStyle} id="place_type" name="place_type" defaultValue="Escuela">
                <option>Escuela</option>
                <option>Empresa</option>
                <option>Comunidad</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 font-display" htmlFor="people_count">Número de personas (aprox.)</label>
              <input className={inputClass} id="people_count" name="people_count" type="number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 font-display" htmlFor="location">Lugar (Dirección)</label>
              <input className={inputClass} id="location" name="location" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 font-display" htmlFor="tentative_date">Fecha tentativa</label>
              <input className={inputClass} id="tentative_date" name="tentative_date" type="date" />
            </div>
          </form>
        )}

        {/* Botón de envío (común para ambos) */}
        <div className="mt-10 flex justify-end">
          <button className="bg-primary text-background-dark font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors w-full md:w-auto shadow-md">
            Enviar Solicitud
          </button>
        </div>
      </div>
    </main>
  );
}