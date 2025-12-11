// app/(admin)/layout.tsx

// Importamos el Sidebar que ahora maneja su estado internamente
import Sidebar from "@/components/SidebarAdmin"; 
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // Nota: Usamos las clases de color personalizadas
  return (
    <div className="flex min-h-screen font-display bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">

      {/* Sidebar - Se llama sin ningún prop activePage */}
      <Sidebar /> 

      {/* Contenido del lado derecho */}
      <main className="flex-1 p-6 lg:p-8">
        {children}
      </main>

    </div>
  );
}