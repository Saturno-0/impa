// app/servicios/page.tsx
'use client';

import React from 'react';

// --- TIPOS Y DATOS ---
type RequestStatus = 'Pendiente' | 'Aprobada' | 'Rechazada';
interface ServiceRequest {
    id: number;
    applicantName: string;
    requestDate: string;
    status: RequestStatus;
}

const mockSterilizationRequests: ServiceRequest[] = [
    { id: 1, applicantName: 'Sofía Ramírez', requestDate: '2024-07-26', status: 'Pendiente' },
    { id: 2, applicantName: 'Carlos Mendoza', requestDate: '2024-07-25', status: 'Aprobada' },
    { id: 3, applicantName: 'Ana López', requestDate: '2024-07-24', status: 'Rechazada' },
];

const mockTalkRequests: ServiceRequest[] = [
    { id: 1, applicantName: 'Ricardo Torres', requestDate: '2024-07-26', status: 'Pendiente' },
    { id: 2, applicantName: 'Laura Sánchez', requestDate: '2024-07-25', status: 'Aprobada' },
    { id: 3, applicantName: 'Javier Pérez', requestDate: '2024-07-24', status: 'Rechazada' },
];

// --- COMPONENTES REUTILIZABLES ---
const RequestStatusBadge: React.FC<{ status: RequestStatus }> = ({ status }) => {
    const baseClasses = "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full";
    let variantClasses = "";
    switch (status) {
        case 'Pendiente': variantClasses = "bg-yellow-100"; break;
        case 'Aprobada': variantClasses = "bg-green-100"; break;
        case 'Rechazada': variantClasses = "bg-red-100"; break;
    }
    return <span className={`${baseClasses} ${variantClasses}`}>{status}</span>;
};

interface ServiceTableProps {
    title: string;
    data: ServiceRequest[];
}

const ServiceTable: React.FC<ServiceTableProps> = ({ title, data }) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark mb-4">{title}</h2>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-background-light dark:bg-background-dark/50">
                            <tr>
                                {['ID', 'Nombre del solicitante', 'Fecha de solicitud', 'Estado', 'Acciones'].map((header) => (
                                    <th key={header} className={`px-6 py-3 text-xs font-medium text-foreground-light/60 dark:text-foreground-dark/60 uppercase tracking-wider ${header === 'Acciones' ? 'text-right' : ''}`} scope="col">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            {data.map((request) => (
                                <tr key={request.id} className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground-light dark:text-foreground-dark">{request.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">{request.applicantName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground-light/80 dark:text-foreground-dark/80">{request.requestDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm"><RequestStatusBadge status={request.status} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                                        <a className="text-primary hover:text-primary/80" href={`/servicios/${request.id}`}>Ver detalles</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};


// --- PÁGINA PRINCIPAL ---
export default function ServicesPage() {
    return (
        <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-foreground-light dark:text-foreground-dark">Solicitudes</h1>
                </header>
                
                <ServiceTable title="Esterilizaciones" data={mockSterilizationRequests} />
                <ServiceTable title="Pláticas" data={mockTalkRequests} />
            </div>
        </main>
    );
}