// src/app/admin/animales/[id]/page.tsx
import React from 'react';
import Link from 'next/link';

export default function EditarAnimalPage({ params }: { params: { id: string } }) {
    // Nota: 'params.id' contendría el ID del animal (ej. "1", "2") para buscarlo en la BD.

    return (
        <div className="flex min-h-screen bg-background-light font-display text-gray-800 ">


            {/* CONTENIDO PRINCIPAL */}
            <main className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Editar Información del Animal</h2>
                    </header>

                    {/* TABS DE NAVEGACIÓN */}
                    <div className="border-b border-gray-200">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                            <a className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                Información General
                            </a>
                            <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                Historial Médico
                            </a>
                            <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                Procesos de Adopción
                            </a>
                        </nav>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-900">Datos del Animal</h3>

                        {/* FORMULARIO */}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="nombre">Nombre</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="nombre" name="nombre" placeholder="e.g. Fido" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="especie">Especie</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="especie" name="especie" placeholder="e.g. Perro" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="raza">Raza</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="raza" name="raza" placeholder="e.g. Labrador" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="edad">Edad</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="edad" name="edad" placeholder="e.g. 2" type="number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="genero">Género</label>
                                <select className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="genero" name="genero">
                                    <option>Macho</option>
                                    <option>Hembra</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="tamano">Tamaño</label>
                                <select className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="tamano" name="tamano">
                                    <option>Pequeño</option>
                                    <option>Mediano</option>
                                    <option>Grande</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="peso">Peso (kg)</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="peso" name="peso" placeholder="e.g. 25.5" step="0.1" type="number" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="estado-salud">Estado de Salud</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="estado-salud" name="estado-salud" placeholder="e.g. Saludable" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="fecha-ingreso">Fecha de Ingreso</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="fecha-ingreso" name="fecha-ingreso" type="date" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="ubicacion">Ubicación</label>
                                <input className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="ubicacion" name="ubicacion" placeholder="e.g. Refugio A" type="text" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="descripcion">Descripción</label>
                                <textarea className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="descripcion" name="descripcion" placeholder="Un perro amigable y juguetón..." rows={4}></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="estado-adopcion">Estado de Adopción</label>
                                <select className="mt-1 block w-full rounded border-gray-300 bg-white/50 focus:border-primary focus:ring-primary sm:text-sm p-2" id="estado-adopcion" name="estado-adopcion">
                                    <option>Disponible</option>
                                    <option>En proceso</option>
                                    <option>Adoptado</option>
                                </select>
                            </div>
                        </form>

                        <div className="mt-8 pt-5 border-t border-gray-200 flex justify-end gap-3">
                            <Link href="/admin_animales">
                                <button className="bg-white/50 py-2 px-4 border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="button">
                                    Cancelar
                                </button>
                            </Link>
                            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}