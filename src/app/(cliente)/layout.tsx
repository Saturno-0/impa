// app/(admin)/layout.tsx

// Importamos el Sidebar que ahora maneja su estado internamente
import Navbar from "@/components/Navbar";
import React from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Nota: Usamos las clases de color personalizadas
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
          {children} {/* Aquí se renderiza tu page.tsx */}
        </div>
    );
}

