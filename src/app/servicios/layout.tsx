// app/servicios/layout.tsx
import React from 'react';
import SidebarServicios from './SidebarServicios'; // Importación relativa

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen font-display bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
            <SidebarServicios /> 
            {children}
        </div>
    );
}