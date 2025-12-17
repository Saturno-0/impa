'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
type AnimalStatus = 'Disponible' | 'Adoptado' | 'En Acogida';

interface AnimalRecord {
    name: string;
    species: string;
    breed: string;
    admissionDate: string;
    status: AnimalStatus;
}

const mockAnimalRecords: AnimalRecord[] = [
    { name: 'Max', species: 'Perro', breed: 'Labrador', admissionDate: '2023-01-15', status: 'Disponible' },
    { name: 'Bella', species: 'Gato', breed: 'Siamés', admissionDate: '2023-02-20', status: 'Adoptado' },
    { name: 'Rocky', species: 'Perro', breed: 'Bulldog', admissionDate: '2023-03-10', status: 'En Acogida' },
    { name: 'Misty', species: 'Gato', breed: 'Persa', admissionDate: '2023-04-05', status: 'Disponible' },
    { name: 'Buddy', species: 'Perro', breed: 'Golden Retriever', admissionDate: '2023-05-12', status: 'Adoptado' },
];

const AnimalStatusBadge: React.FC<{ status: AnimalStatus }> = ({ status }) => {
    const base = "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full";
    let variantClasses = "";

    if (status === 'Adoptado') {
        variantClasses = "bg-primary/20"; // Ajusté un poco los colores por defecto para visibilidad
    } else if (status === 'En Acogida') {
        variantClasses = "bg-primary/20";
    } else {
        variantClasses = "bg-primary/20";
    }

    return <span className={`${base} ${variantClasses}`}>{status}</span>;
};

export default function AnimalesPage() {
    // 1. Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 2. Estado para el formulario
    const [formData, setFormData] = useState<AnimalRecord>({
        name: '',
        species: '',
        breed: '',
        admissionDate: new Date().toISOString().split('T')[0], // Fecha de hoy por defecto
        status: 'Disponible'
    });

    // Manejar cambios en los inputs
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Manejar el envío del formulario
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Datos a guardar:", formData);
        // Aquí iría tu lógica para guardar en BD o actualizar el estado de la lista
        setIsModalOpen(false); // Cerrar modal al guardar
        // Resetear formulario (opcional)
        setFormData({
            name: '', species: '', breed: '', admissionDate: '', status: 'Disponible'
        });
    };

    return (
        <main className="flex-1 p-6 lg:p-8 bg-background-light dark:bg-background-dark relative">
            <div className="max-w-7xl mx-auto">

                {/* Header y Botón de Acción */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">Animales</h2>

                    <button
                        onClick={() => setIsModalOpen(true)}
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
                                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">{animal.name}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">{animal.species}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">{animal.breed}</td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">{animal.admissionDate}</td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <AnimalStatusBadge status={animal.status} />
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            {/* Asumiendo que 'index' es el ID temporal, o animal.id si lo tienes */}
                                            <Link
                                                href={`/admin_animales/${index}`}
                                                className="text-primary hover:opacity-80 font-semibold text-sm"
                                            >
                                                Ver/Editar
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* --- MODAL --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop (Fondo oscuro) */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsModalOpen(false)}
                    ></div>

                    {/* Contenido del Modal */}
                    <div className="relative bg-background-light dark:bg-background-dark rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border border-subtle-light dark:border-subtle-dark">

                        {/* Header del Modal */}
                        <div className="px-6 py-4 border-b border-subtle-light dark:border-subtle-dark flex justify-between items-center bg-surface-light dark:bg-surface-dark">
                            <h3 className="text-xl font-bold text-text-light dark:text-text-dark">Registrar Nuevo Animal</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-placeholder-light hover:text-text-light dark:text-placeholder-dark dark:hover:text-text-dark"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        {/* Formulario */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">

                            {/* Nombre */}
                            <div>
                                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary text-text-light dark:text-text-dark px-4 py-2"
                                    placeholder="Ej. Firulais"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Especie */}
                                <div>
                                    <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Especie</label>
                                    <input
                                        type="text"
                                        name="species"
                                        required
                                        value={formData.species}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary text-text-light dark:text-text-dark px-4 py-2"
                                        placeholder="Ej. Perro"
                                    />
                                </div>
                                {/* Raza */}
                                <div>
                                    <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Raza</label>
                                    <input
                                        type="text"
                                        name="breed"
                                        value={formData.breed}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary text-text-light dark:text-text-dark px-4 py-2"
                                        placeholder="Ej. Mestizo"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* Fecha */}
                                <div>
                                    <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Fecha de Ingreso</label>
                                    <input
                                        type="date"
                                        name="admissionDate"
                                        required
                                        value={formData.admissionDate}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary text-text-light dark:text-text-dark px-4 py-2"
                                    />
                                </div>
                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">Estado</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-subtle-light/40 dark:bg-subtle-dark/40 border-subtle-light dark:border-subtle-dark focus:ring-2 focus:ring-primary/50 focus:border-primary text-text-light dark:text-text-dark px-4 py-2"
                                    >
                                        <option value="Disponible">Disponible</option>
                                        <option value="Adoptado">Adoptado</option>
                                        <option value="En Acogida">En Acogida</option>
                                    </select>
                                </div>
                            </div>

                            {/* Footer del Modal (Botones) */}
                            <div className="flex justify-end gap-3 pt-4 mt-2 border-t border-subtle-light dark:border-subtle-dark">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-text-light dark:text-text-dark hover:bg-subtle-light dark:hover:bg-subtle-dark transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary hover:opacity-90 transition-opacity shadow-sm"
                                >
                                    Guardar Animal
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}