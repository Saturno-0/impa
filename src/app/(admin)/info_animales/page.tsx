'use client';

import React from 'react';


// Componente de Enlace de Pestaña (Tab Link)
interface TabLinkProps {
    label: string;
    isActive: boolean;
    // Función que se dispara al hacer clic, para cambiar el estado de la pestaña
    onClick: () => void;
}

const TabLink: React.FC<TabLinkProps> = ({ label, isActive, onClick }) => {
    const activeClasses = "border-primary text-primary border-b-2";
    const inactiveClasses = "border-transparent text-foreground-light/60 dark:text-foreground-dark/60 hover:text-foreground-light dark:hover:text-foreground-dark hover:border-border-light dark:hover:border-border-dark";
    
    // Handler para el clic: previene la navegación por defecto y llama a la función onClick
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        onClick();
    };

    return (
        <a
            className={`whitespace-nowrap py-4 px-1 font-medium text-sm cursor-pointer transition-colors ${isActive ? activeClasses : inactiveClasses}`}
            onClick={handleClick}
            href="#" 
            aria-current={isActive ? 'page' : undefined}
        >
            {label}
        </a>
    );
};

export default function AnimalDetailsPage() {
    
    // Datos mockeados del animal (en producción, vendrían de una API)
    const animalData = {
        name: "Fido",
        species: "Perro",
        breed: "Labrador",
        age: 2,
        gender: "Macho",
        size: "Mediano",
        weight: 25.5,
        healthStatus: "Saludable",
        admissionDate: "2023-01-15",
        location: "Refugio A",
        description: "Un perro amigable y juguetón, ideal para familias activas.",
        adoptionStatus: "Disponible",
    };

    // Estado para manejar qué pestaña está activa (por defecto, Información General)
    const [activeTab, setActiveTab] = React.useState('general');

    return (
        // Se asume que el Layout/Sidebar envuelve esta página
        <div className="flex min-h-screen">
            {/* Aquí iría tu componente <Sidebar activePage="animales" /> */}
            
            <main className="flex-1 p-8 bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <header className="mb-8">
                        <h2 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">
                            Editar Información del Animal
                        </h2>
                    </header>
                    
                    {/* Navegación por Pestañas */}
                    <div className="border-b border-border-light dark:border-border-dark">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                            <TabLink 
                                label="Información General" 
                                isActive={activeTab === 'general'} 
                                onClick={() => setActiveTab('general')}
                            />
                            <TabLink 
                                label="Historial Médico" 
                                isActive={activeTab === 'medical'} 
                                onClick={() => setActiveTab('medical')}
                            />
                            <TabLink 
                                label="Procesos de Adopción" 
                                isActive={activeTab === 'adoption'} 
                                onClick={() => setActiveTab('adoption')}
                            />
                        </nav>
                    </div>

                    {/* Contenido de las Pestañas */}
                    <div className="mt-8">
                        {activeTab === 'general' && (
                            <section>
                                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-6">
                                    Datos del Animal
                                </h3>
                                
                                {/* Formulario de Información General */}
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    
                                    {/* Nombre */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="nombre">Nombre</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="nombre" name="nombre" type="text" defaultValue={animalData.name} placeholder="e.g. Fido" 
                                        />
                                    </div>
                                    
                                    {/* Especie */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="especie">Especie</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="especie" name="especie" type="text" defaultValue={animalData.species} placeholder="e.g. Perro" 
                                        />
                                    </div>
                                    
                                    {/* Raza */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="raza">Raza</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="raza" name="raza" type="text" defaultValue={animalData.breed} placeholder="e.g. Labrador" 
                                        />
                                    </div>

                                    {/* Edad */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="edad">Edad</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="edad" name="edad" type="number" defaultValue={animalData.age} placeholder="e.g. 2" 
                                        />
                                    </div>
                                    
                                    {/* Género */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="genero">Género</label>
                                        <select 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="genero" name="genero" defaultValue={animalData.gender}
                                        >
                                            <option>Macho</option>
                                            <option>Hembra</option>
                                        </select>
                                    </div>

                                    {/* Tamaño */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="tamano">Tamaño</label>
                                        <select 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="tamano" name="tamano" defaultValue={animalData.size}
                                        >
                                            <option>Pequeño</option>
                                            <option>Mediano</option>
                                            <option>Grande</option>
                                        </select>
                                    </div>

                                    {/* Peso */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="peso">Peso (kg)</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="peso" name="peso" type="number" step="0.1" defaultValue={animalData.weight} placeholder="e.g. 25.5" 
                                        />
                                    </div>

                                    {/* Estado de Salud */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="estado-salud">Estado de Salud</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="estado-salud" name="estado-salud" type="text" defaultValue={animalData.healthStatus} placeholder="e.g. Saludable" 
                                        />
                                    </div>
                                    
                                    {/* Fecha de Ingreso */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="fecha-ingreso">Fecha de Ingreso</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="fecha-ingreso" name="fecha-ingreso" type="date" defaultValue={animalData.admissionDate}
                                        />
                                    </div>

                                    {/* Ubicación */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="ubicacion">Ubicación</label>
                                        <input 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="ubicacion" name="ubicacion" type="text" defaultValue={animalData.location} placeholder="e.g. Refugio A" 
                                        />
                                    </div>

                                    {/* Descripción (2 columnas) */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="descripcion">Descripción</label>
                                        <textarea 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="descripcion" name="descripcion" rows={4} defaultValue={animalData.description} placeholder="Un perro amigable y juguetón..."
                                        />
                                    </div>

                                    {/* Estado de Adopción */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80" htmlFor="estado-adopcion">Estado de Adopción</label>
                                        <select 
                                            className="mt-1 block w-full rounded border-border-light dark:border-border-dark 
                                                       bg-surface-light dark:bg-surface-dark/50 
                                                       focus:border-primary focus:ring-primary sm:text-sm" 
                                            id="estado-adopcion" name="estado-adopcion" defaultValue={animalData.adoptionStatus}
                                        >
                                            <option>Disponible</option>
                                            <option>En proceso</option>
                                            <option>Adoptado</option>
                                        </select>
                                    </div>
                                    {/* Espacio en blanco para alinear el grid */}
                                    <div /> 

                                </form>

                                {/* Botones de Acción del Formulario */}
                                <div className="mt-8 pt-5 border-t border-border-light dark:border-border-dark flex justify-end">
                                    <button 
                                        className="bg-surface-light dark:bg-surface-dark/50 py-2 px-4 border border-border-light dark:border-border-dark 
                                                   rounded shadow-sm text-sm font-medium text-foreground-light dark:text-foreground-dark 
                                                   hover:bg-background-light dark:hover:bg-background-dark 
                                                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                                        type="button"
                                    >
                                        Cancelar
                                    </button>
                                    <button 
                                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium 
                                                   rounded text-white bg-primary hover:bg-primary/90 
                                                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                                        type="submit"
                                    >
                                        Guardar Cambios
                                    </button>
                                </div>
                            </section>
                        )}

                        {activeTab === 'medical' && (
                            <section>
                                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-6">
                                    Historial Médico
                                </h3>
                                <p className="text-foreground-light/70 dark:text-foreground-dark/70">
                                    Contenido para el historial médico del animal.
                                </p>
                            </section>
                        )}
                        
                        {activeTab === 'adoption' && (
                            <section>
                                <h3 className="text-xl font-semibold text-foreground-light dark:text-foreground-dark mb-6">
                                    Procesos de Adopción
                                </h3>
                                <p className="text-foreground-light/70 dark:text-foreground-dark/70">
                                    Contenido para los procesos de adopción y solicitantes.
                                </p>
                            </section>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}