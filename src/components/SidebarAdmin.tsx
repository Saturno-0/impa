// src/components/Sidebar.tsx
'use client'; 

import React from 'react';
import { usePathname } from 'next/navigation'; // <-- Importación clave
import Link from 'next/link';

// 1. Tipado de los ítems de navegación (usando el tipo LucideIcon de lucide-react)
interface NavItem {
    href: string;
    label: string;
    // La clave es usada para el mapeo, aunque usemos el href para la ruta
    activeKey: 'inicio' | 'animales' | 'adopciones' | 'reportes' | 'servicios' | 'configuracion';
}

const navItems: NavItem[] = [
    { href: '/resumen', label: 'Inicio', activeKey: 'inicio' },
    { href: '/animales', label: 'Animales',  activeKey: 'animales' },
    { href: '/adopciones', label: 'Adopciones', activeKey: 'adopciones' },
    { href: '/reportes_admin', label: 'Reportes', activeKey: 'reportes' },
    { href: '/servicios_admin', label: 'Servicios', activeKey: 'servicios' },
];


export default function Sidebar() {
    const pathname = usePathname(); // <-- Obtenemos la ruta actual

    // Función para determinar si un enlace está activo basándose en la ruta
    const isActive = (href: string) => {
        // Lógica: Si el path es exactamente la href O si es la raíz ('/') y el path es '/'
        if (href === '/') {
            // Manejar la ruta raíz /
            return pathname === '/';
        }
        // Manejar otras rutas (ej. /animales o /animales/[id])
        return pathname.startsWith(href);
    };

    return (
        <aside className="w-64 bg-surface-light dark:bg-surface-dark flex flex-col border-r border-border-light dark:border-border-dark flex-shrink-0">
            {/* Logo y Título */}
            <div className="p-6 flex items-center gap-3">
                <h1 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">IMPA</h1>
            </div>

            {/* Navegación Principal */}
            <nav className="flex-1 px-4 py-2 space-y-2">
                {navItems.map((item) => {
                    const active = isActive(item.href);
                    
                    return (
                        <Link 
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors 
                                ${active 
                                    ? 'bg-primary/20 dark:bg-primary/30 text-primary font-semibold' 
                                    : 'text-foreground-light/70 dark:text-foreground-dark/70 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-foreground-light dark:hover:text-foreground-dark'
                                }
                            `}
                        >
                            
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}