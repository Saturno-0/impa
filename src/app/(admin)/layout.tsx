import SidebarAdmin from "@/components/SidebarAdmin";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background-light text-text-light font-display">

      {/* Sidebar izquierdo */}
      <SidebarAdmin />

      {/* Contenido del lado derecho */}
      <main className="flex-1 p-6 lg:p-8">
        {children}
      </main>

    </div>
  );
}
