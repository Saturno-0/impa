// app/(admin)/animales/page.tsx
'use client';

import React from 'react';

// 1. Definición de tipos para el estado del animal
type AnimalStatus = 'Disponible' | 'Adoptado' | 'En Acogida';

// 2. Definición de tipos para un registro de animal
interface AnimalRecord {
    name: string;
    species: string;
    breed: string;
    admissionDate: string;
    status: AnimalStatus;
}

// 3. Datos de ejemplo basados en el HTML
const mockAnimalRecords: AnimalRecord[] = [
    { name: 'Max', species: 'Perro', breed: 'Labrador', admissionDate: '2023-01-15', status: 'Disponible' },
    { name: 'Bella', species: 'Gato', breed: 'Siamés', admissionDate: '2023-02-20', status: 'Adoptado' },
    { name: 'Rocky', species: 'Perro', breed: 'Bulldog', admissionDate: '2023-03-10', status: 'En Acogida' },
    { name: 'Misty', species: 'Gato', breed: 'Persa', admissionDate: '2023-04-05', status: 'Disponible' },
    { name: 'Buddy', species: 'Perro', breed: 'Golden Retriever', admissionDate: '2023-05-12', status: 'Adoptado' },
];

// 4. Componente para el badge de estado del animal
const AnimalStatusBadge: React.FC<{ status: AnimalStatus }> = ({ status }) => {
    // Clase base para el badge
    const base = "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full";
    let variantClasses = "";

    // Lógica para variar el color del badge según el estado.
    // Usaremos primary/20 o /30 para el fondo, y foreground para el texto,
    // ya que el HTML original usa un solo color para todos los estados,
    // pero podemos diferenciarlo si es necesario.
    if (status === 'Adoptado') {
        // Podríamos usar verde o un color neutro
        variantClasses = "bg-primary/20  ";
    } else if (status === 'En Acogida') {
        variantClasses = "bg-primary/20";
    } else {
        // Disponible (usa el estilo del HTML original, primary/20)
        variantClasses = "bg-primary/20";
    }


    return <span className={`${base} ${variantClasses}`}>{status}</span>;
};


// 5. Componente de la página principal
export default function AnimalesPage() {
    return (
        // El contenedor principal asume que la barra lateral (Sidebar) ya está manejada
        // externamente en un layout o que se debe incluir aquí.
        // Aquí solo incluiremos el contenido principal (<main>).

        // Nota: Las clases de color se mapean a tu configuración personalizada.
        <main className="flex-1 p-6 lg:p-8 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                
                {/* Header y Botón de Acción */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">Animales</h2>
                    
                    <button 
                        className="flex items-center justify-center gap-2 mt-4 md:mt-0 
                                   px-4 py-2 rounded-lg bg-primary text-white font-bold 
                                   shadow-md hover:opacity-90 transition-opacity"
                    >
                        <span>Añadir Nuevo Animal</span>
                    </button>
                </div>

                {/* Contenedor de la Tabla */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 sm:p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px] text-foreground-light dark:text-foreground-dark">
                            
                            <thead>
                                <tr className="border-b border-border-light dark:border-border-dark">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground-light/60 dark:text-foreground-dark/60 uppercase tracking-wider">Nombre</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground-light/60 dark:text-foreground-dark/60 uppercase tracking-wider">Especie</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground-light/60 dark:text-foreground-dark/60 uppercase tracking-wider">Raza</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground-light/60 dark:text-foreground-dark/60 uppercase tracking-wider">Fecha de Ingreso</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground-light/60 dark:text-foreground-dark/60 uppercase tracking-wider">Estado Actual</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground-light/60 dark:text-foreground-dark/60 uppercase tracking-wider">Acciones</th>
                                </tr>
                            </thead>
                            
                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                {mockAnimalRecords.map((animal, index) => (
                                    <tr key={index} className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                                            {animal.name}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">
                                            {animal.species}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">
                                            {animal.breed}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">
                                            {animal.admissionDate}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <AnimalStatusBadge status={animal.status} />
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <button className="text-primary hover:opacity-80 font-semibold text-sm">
                                                Ver/Editar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}