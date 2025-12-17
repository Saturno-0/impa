import React from 'react';
import Navbar from '@/components/Navbar'; // Asumiendo esta ruta
import Footer from '@/components/Footer'; // Asumiendo esta ruta

export default function ReporteMaltratoPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen flex flex-col">

            <main className="flex-grow container mx-auto px-6 py-12 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-5xl">
                            Reportar Maltrato Animal
                        </h2>
                        <p className="mt-4 text-lg text-placeholder-light dark:text-placeholder-dark">
                            Tu reporte es anónimo y crucial para ayudar a quienes no tienen voz.
                        </p>
                    </div>

                    <form className="space-y-6 bg-background-light dark:bg-background-dark p-8 rounded-lg border border-subtle-light dark:border-subtle-dark shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium pb-2" htmlFor="nombre_reportante">
                                    Nombre del Reportante (Opcional)
                                </label>
                                <input
                                    className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark text-text-light dark:text-text-dark px-4 py-3 text-base transition appearance-none"
                                    id="nombre_reportante"
                                    placeholder="Tu nombre"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium pb-2" htmlFor="asunto">
                                    Asunto
                                </label>
                                <input
                                    className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark text-text-light dark:text-text-dark px-4 py-3 text-base transition appearance-none"
                                    id="asunto"
                                    placeholder="Breve resumen del caso"
                                    required
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium pb-2" htmlFor="direccion">
                                    Dirección del Incidente
                                </label>
                                <input
                                    className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark text-text-light dark:text-text-dark px-4 py-3 text-base transition appearance-none"
                                    id="direccion"
                                    placeholder="Calle y número"
                                    required
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium pb-2" htmlFor="colonia">
                                    Colonia
                                </label>
                                <input
                                    className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark text-text-light dark:text-text-dark px-4 py-3 text-base transition appearance-none"
                                    id="colonia"
                                    placeholder="Barrio o zona"
                                    required
                                    type="text"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium pb-2" htmlFor="detalles_caso">
                                Detalles del Caso
                            </label>
                            <textarea
                                className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark text-text-light dark:text-text-dark px-4 py-3 text-base transition"
                                id="detalles_caso"
                                placeholder="Describe la situación con el mayor detalle posible: tipo de animal, condición, frecuencia del maltrato, etc."
                                required
                                rows={5}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium pb-2" htmlFor="nivel_gravedad">
                                Nivel de Gravedad
                            </label>
                            <select
                                className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary text-text-light dark:text-text-dark px-4 py-3 text-base transition appearance-none"
                                id="nivel_gravedad"
                                required
                                defaultValue=""
                            >
                                <option disabled value="">
                                    Selecciona la gravedad
                                </option>
                                <option value="leve">Leve (ej. negligencia, falta de agua/comida)</option>
                                <option value="moderado">Moderado (ej. animal atado permanentemente, agresión visible)</option>
                                <option value="grave">Grave (ej. heridas abiertas, animal en peligro inminente)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium pb-2">
                                Evidencia Fotográfica (Opcional)
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg border-subtle-light dark:border-subtle-dark hover:border-primary/50 transition relative">
                                <div className="space-y-1 text-center">
                                    <svg
                                        aria-hidden="true"
                                        className="mx-auto h-12 w-12 text-placeholder-light dark:text-placeholder-dark"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-placeholder-light dark:text-placeholder-dark justify-center">
                                        <label
                                            className="relative cursor-pointer bg-background-light dark:bg-background-dark rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                                            htmlFor="file-upload"
                                        >
                                            <span>Sube un archivo</span>
                                            <input
                                                className="sr-only"
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                            />
                                        </label>
                                        <p className="pl-1">o arrastra y suelta</p>
                                    </div>
                                    <p className="text-xs text-placeholder-light dark:text-placeholder-dark">
                                        PNG, JPG, GIF hasta 10MB
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                className="w-full md:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:ring-offset-background-dark transition-all duration-300 ease-in-out"
                                type="submit"
                            >
                                Enviar Reporte
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}