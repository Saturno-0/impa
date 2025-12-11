'use client';

import React from 'react';

// 1. Definición de tipos para la gravedad del reporte
type ReportSeverity = 'Alta' | 'Media' | 'Baja';

// 2. Definición de tipos para un reporte de maltrato
interface AbuseReport {
    subject: string;
    severity: ReportSeverity;
    reportDate: string;
    reporterName: string;
}

// 3. Datos de ejemplo basados en el HTML
const mockAbuseReports: AbuseReport[] = [
    { subject: 'Maltrato en vivienda', severity: 'Alta', reportDate: '2024-07-26', reporterName: 'Sofía Ramírez' },
    { subject: 'Abandono de mascota', severity: 'Media', reportDate: '2024-07-25', reporterName: 'Carlos Mendoza' },
    { subject: 'Animal herido en la calle', severity: 'Alta', reportDate: '2024-07-24', reporterName: 'Ana Torres' },
    { subject: 'Maltrato en la vía pública', severity: 'Media', reportDate: '2024-07-23', reporterName: 'Luis García' },
    { subject: 'Animal sin agua ni comida', severity: 'Baja', reportDate: '2024-07-22', reporterName: 'María López' },
    { subject: 'Maltrato en transporte', severity: 'Alta', reportDate: '2024-07-21', reporterName: 'Jorge Pérez' },
    { subject: 'Animal encerrado en coche', severity: 'Media', reportDate: '2024-07-20', reporterName: 'Laura Sánchez' },
    { subject: 'Maltrato en establecimiento', severity: 'Alta', reportDate: '2024-07-19', reporterName: 'Ricardo Gómez' },
];

// 4. Componente para el badge de gravedad
const SeverityBadge: React.FC<{ severity: ReportSeverity }> = ({ severity }) => {
    const baseClasses = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";
    let variantClasses = "";

    // Asignación de colores según la gravedad, basada en los estilos del HTML
    switch (severity) {
        case 'Alta':
            // Rojo
            variantClasses = "bg-red-100";
            break;
        case 'Media':
            // Amarillo
            variantClasses = "bg-yellow-100";
            break;
        case 'Baja':
            // Verde
            variantClasses = "bg-green-100";
            break;
    }

    return <span className={`${baseClasses} ${variantClasses}`}>{severity}</span>;
};


// 5. Componente de la página principal
export default function MaltratosPage() {
    return (
        <div className="flex min-h-screen">
            {/* Aquí iría tu componente <Sidebar /> */}
            <main className="flex-1 p-8 bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <h2 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark mb-6">
                        Reportes de Maltrato
                    </h2>
                    
                    {/* Contenedor de la Tabla */}
                    <div className="bg-surface-light dark:bg-surface-dark shadow-lg rounded-xl overflow-hidden border border-border-light dark:border-border-dark">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                
                                {/* Encabezado de la Tabla */}
                                <thead className="text-xs uppercase bg-background-light dark:bg-background-dark/50 text-primary/80 dark:text-primary/70">
                                    <tr>
                                        <th className="px-6 py-3" scope="col">Asunto</th>
                                        <th className="px-6 py-3" scope="col">Gravedad</th>
                                        <th className="px-6 py-3" scope="col">Fecha de Reporte</th>
                                        <th className="px-6 py-3" scope="col">Nombre del Reportante</th>
                                        {/* Podrías añadir una columna de acciones si la hubiera */}
                                    </tr>
                                </thead>
                                
                                {/* Cuerpo de la Tabla */}
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    {mockAbuseReports.map((report, index) => (
                                        <tr 
                                            key={index} 
                                            className="border-b border-primary/10 dark:border-primary/20 hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer"
                                            // En un entorno real, al hacer clic aquí se navegaría al detalle del reporte
                                            onClick={() => console.log(`Ver detalles del reporte ${report.subject}`)}
                                        >
                                            <td className="px-6 py-4 font-medium text-foreground-light dark:text-foreground-dark">
                                                {report.subject}
                                            </td>
                                            <td className="px-6 py-4">
                                                <SeverityBadge severity={report.severity} />
                                            </td>
                                            <td className="px-6 py-4 text-foreground-light/70 dark:text-foreground-dark/70">
                                                {report.reportDate}
                                            </td>
                                            <td className="px-6 py-4 text-foreground-light/70 dark:text-foreground-dark/70">
                                                {report.reporterName}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}