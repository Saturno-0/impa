'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Función auxiliar para determinar las clases del enlace
    const getLinkClasses = (href: string) => {
        const isActive = pathname === href;

        return isActive
            ? "text-sm font-medium text-primary dark:text-primary transition-colors"
            : "text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors";
    };

    // Clase auxiliar para el botón de engranaje (no necesita texto, solo hover)
    const getGearButtonClasses = (href: string) => {
        const isActive = pathname === href;
        return isActive
            ? "text-primary dark:text-primary p-2 rounded-lg hover:bg-subtle-light dark:hover:bg-subtle-dark transition-colors"
            : "text-text-light dark:text-text-dark hover:text-primary p-2 rounded-lg hover:bg-subtle-light dark:hover:bg-subtle-dark transition-colors";
    };

    return (
        <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-10 border-b border-subtle-light dark:border-subtle-dark font-display">
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo y Título */}
                <div className="flex items-center gap-3">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
                    </svg>
                    <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">IMPA</h1>
                </div>

                {/* Contenedor principal del menú y botón de configuración */}
                <div className="flex items-center gap-8">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className={getLinkClasses('/')}>Inicio</Link>
                        <Link href="/catalogo" className={getLinkClasses('/catalogo')}>Catalogo</Link>
                        <Link href="/servicios" className={getLinkClasses('/servicios')}>Servicios</Link>
                        <Link href="/reportes" className={getLinkClasses('/reportes')}>Reportes</Link>
                    </div>

                    {/* Botón de Engranaje (Solo en Desktop) */}
                    <Link href="/resumen" className="hidden md:block">
                        <button
                            title="Resumen / Configuración"
                            className={getGearButtonClasses('/resumen')}
                        >
                            {/* Icono de engranaje (Configuración) */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </button>
                    </Link>

                    {/* Mobile Menu Button (Se mantiene para mostrar el menú desplegable) */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-lg bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-subtle-light dark:border-subtle-dark bg-background-light dark:bg-background-dark">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <Link href="/" className={getLinkClasses('/')}>Inicio</Link>
                        <Link href="/catalogo" className={getLinkClasses('/catalogo')}>Catalogo</Link>
                        <Link href="/servicios" className={getLinkClasses('/servicios')}>Servicios</Link>
                        <Link href="/reportes" className={getLinkClasses('/reportes')}>Reportes</Link>
                        {/* Botón de Engranaje en Mobile también */}
                        <Link href="/resumen" className={getLinkClasses('/resumen')}>
                            <span className="flex items-center gap-2">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.732c.841-.217 1.715-.38 2.606-.455.309.117.585.342.76.621.17.275.207.601.112.897-.2.63-.443 1.253-.703 1.868-.236.568-.48.975-.544 1.156-.058.172-.047.362.035.531.08.17.227.318.408.423.238.136.502.247.78.337.858.267 1.76.438 2.68.513.68.058 1.353.078 2.016.052.126.331.258.647.387.954.125.3.242.602.35.908.106.307.159.62.159.932 0 .313-.053.626-.159.933-.107.306-.224.607-.35.908-.129.307-.261.623-.387.954-.66-.026-1.333-.046-2.016.012-.92.075-1.822.246-2.68.513-.278.09-.542.2-.78.337-.181.105-.328.253-.408.423-.082.169-.093.359-.035.531.064.181.308.588.544 1.156.26.615.503 1.238.703 1.868.095.296.058.622-.112.897-.175.279-.451.504-.76.621-.891-.075-1.765-.238-2.606-.455-1.01.26-2.062.4-3.136.402h-.103c-1.074-.002-2.126-.142-3.136-.402-.841.217-1.715.38-2.606.455-.309-.117-.585-.342-.76-.621-.17-.275-.207-.601-.112-.897.2-.63.443-1.253.703-1.868.236-.568.48-.975.544-1.156.058-.172.047-.362-.035-.531-.08-.17-.227-.318-.408-.423-.238-.136-.502-.247-.78.337-.858-.267-1.76-.438-2.68-.513-.68-.058-1.353-.078-2.016-.052-.126-.331-.258-.647-.387-.954-.125-.3-.242-.602-.35-.908-.106-.307-.159-.62-.159-.932 0-.313.053-.626.159-.933.107-.306.224-.607.35-.908.129-.307.261-.623.387-.954.66-.026 1.333-.046 2.016.012.92.075 1.822.246 2.68.513.278.09.542.2.78.337.181.105.328.253.408.423.082.169.093.359.035.531-.064.181-.308.588-.544 1.156-.26.615-.503 1.238-.703 1.868-.095.296-.058.622.112.897.175.279.451.504.76.621.891-.075 1.765-.238 2.606-.455 1.01.26 2.062.4 3.136.402h.103c1.074.002 2.126-.142 3.136-.402Z" />
                                </svg>
                                Resumen
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;