// app/servicios/SidebarServicios.tsx
'use client'; 

import React from 'react';
import { Home, FileText, Calendar, Users, Settings, HelpCircle, PawPrint } from 'lucide-react'; 
import Link from 'next/link';

// 1. DEFINICIÓN DEL TIPO UNIÓN (Cubre todos los enlaces)
type SidebarRoute = 'inicio' | 'solicitudes' | 'calendario' | 'usuarios' | 'configuracion' | 'ayuda'; 

interface NavLinkProps {
    href: string;
    label: string;
    Icon: React.ElementType;
    isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, Icon, isActive }) => {
    // Clases de estilo basadas en tus tokens de Tailwind (primary, foreground, etc.)
    const activeClasses = "bg-primary/20 dark:bg-primary/30 text-primary font-bold";
    const inactiveClasses = "text-foreground-light/70 dark:text-foreground-dark/70 hover:bg-primary/10 dark:hover:bg-primary/20";
    
    return (
        <Link 
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${isActive ? activeClasses : inactiveClasses}`} 
            href={href}
        >
            <Icon size={20} className="mr-3" />
            <span>{label}</span>
        </Link>
    );
};

export default function SidebarServicios() {
    // Simulamos el estado activo (puedes usar usePathname() si lo integras)
    const activeRoute: SidebarRoute = "solicitudes"; 
    
    // Lista de ítems de navegación PRINCIPAL
    const navItems: { href: string, label: string, Icon: React.ElementType, key: SidebarRoute }[] = [
        { href: "/", label: "Inicio", Icon: Home, key: 'inicio' },
        { href: "/servicios", label: "Solicitudes", Icon: FileText, key: 'solicitudes' },
        { href: "#", label: "Calendario", Icon: Calendar, key: 'calendario' },
        { href: "#", label: "Usuarios", Icon: Users, key: 'usuarios' },
    ];
    
    // Lista de ítems de pie de página
    const footerItems: { href: string, label: string, Icon: React.ElementType, key: SidebarRoute }[] = [
        { href: "#", label: "Configuración", Icon: Settings, key: 'configuracion' },
        { href: "#", label: "Ayuda y Feedback", Icon: HelpCircle, key: 'ayuda' },
    ];
    
    return (
        <aside className="flex flex-col w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex-shrink-0">
            
            {/* Título y Logo */}
            <div className="flex items-center justify-start p-6 border-b border-border-light dark:border-border-dark">
                <PawPrint className="text-primary text-3xl mr-3" size={24} />
                <h1 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">IMPA</h1>
            </div>
            
            {/* Navegación Principal */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map(item => (
                    <NavLink
                        key={item.key}
                        href={item.href}
                        label={item.label}
                        Icon={item.Icon}
                        isActive={activeRoute === item.key} 
                    />
                ))}
            </nav>
            
            {/* Pie de página (Configuración y Ayuda) */}
            <div className="px-4 py-6 border-t border-border-light dark:border-border-dark">
                {footerItems.map(item => (
                    <NavLink
                        key={item.key}
                        href={item.href}
                        label={item.label}
                        Icon={item.Icon}
                        isActive={activeRoute === item.key} // Se compara correctamente
                    />
                ))}
            </div>
        </aside>
    );
}