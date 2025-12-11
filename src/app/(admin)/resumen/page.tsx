// src/components/DashboardSummary.tsx (o app/page.tsx si es la página principal)

import React from 'react';

// 1. Definición de tipos para las métricas del resumen
interface DashboardMetric {
    title: string;
    value: number;
}

// 2. Componente reutilizable para las tarjetas de métricas
const MetricCard: React.FC<DashboardMetric> = ({ title, value }) => {
    return (
        <div
            className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 
                       border border-border-light dark:border-border-dark 
                       shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
            <h3 className="text-base font-medium text-foreground-light/60 dark:text-foreground-dark/60">
                {title}
            </h3>
            <p className="text-4xl font-bold text-primary mt-2">
                {value.toString()}
            </p>
        </div>
    );
};

// 3. Datos mockeados para el componente
const mockMetrics: DashboardMetric[] = [
    { title: 'Nuevos Animales Registrados', value: 25 },
    { title: 'Solicitudes de Adopción Pendientes', value: 12 },
    { title: 'Reportes de Maltrato sin Revisar', value: 8 },
    { title: 'Nuevas Solicitudes de Servicios', value: 15 },
];

// 4. Componente principal del Dashboard
const DashboardSummary: React.FC = () => {
    return (
        <main className="flex-1 p-6 lg:p-8"> {/* Usamos p-6/p-8 para mantener consistencia con el componente anterior */}
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">
                        Panel de Administración
                    </h1>
                    <p className="text-foreground-light/70 dark:text-foreground-dark/70 mt-1">
                        Una vista general de la actividad reciente en IMPA.
                    </p>
                </header>

                {/* Sección de Resumen */}
                <div>
                    <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
                        Resumen
                    </h2>
                    
                    {/* Grid de Métricas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {mockMetrics.map((metric) => (
                            <MetricCard 
                                key={metric.title}
                                title={metric.title} 
                                value={metric.value} 
                            />
                        ))}
                    </div>
                </div>
                
                {/* Aquí irían otras secciones del dashboard (gráficos, listas, etc.) */}
            </div>
        </main>
    );
};

export default DashboardSummary;