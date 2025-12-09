'use client'; // <--- IMPORTANTE: Necesario para que funcione el menú móvil

import React, { useState } from 'react';
import Link from 'next/link'; // Usamos el Link nativo de Next.js

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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

                {/* Desktop Menu - Usando Link de Next.js */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors">Inicio</Link>
                    <Link href="/adopciones" className="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors">Adopciones</Link>
                    <Link href="/servicios" className="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors">Servicios</Link>
                    <Link href="/reportes" className="text-sm font-medium text-primary dark:text-primary">Reportes</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-lg bg-subtle-light dark:bg-subtle-dark text-text-light dark:text-text-dark"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-subtle-light dark:border-subtle-dark bg-background-light dark:bg-background-dark">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <Link href="/" className="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors">Inicio</Link>
                        <Link href="/adopciones" className="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors">Adopciones</Link>
                        <Link href="/servicios" className="text-sm font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors">Servicios</Link>
                        <Link href="/reportes" className="text-sm font-medium text-primary dark:text-primary">Reportes</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;