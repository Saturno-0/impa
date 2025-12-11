import React from "react";

const SidebarAdmin = () => {
  return (
    <aside className="w-64 bg-white flex flex-col border-r border-gray-200 ">
      <div className="p-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl">pets</span>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">IMPA</h1>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-2">
        <a
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/20 dark:bg-primary/30 text-primary font-semibold"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span>Inicio</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300"
          href="#"
        >
          <span className="material-symbols-outlined">pets</span>
          <span>Animales</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300"
          href="#"
        >
          <span className="material-symbols-outlined">favorite</span>
          <span>Adopciones</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300"
          href="#"
        >
          <span className="material-symbols-outlined">flag</span>
          <span>Reportes</span>
        </a>

        <a
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300"
          href="#"
        >
          <span className="material-symbols-outlined">medical_services</span>
          <span>Servicios</span>
        </a>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <a
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-700 dark:text-gray-300"
          href="#"
        >
          <span className="material-symbols-outlined">settings</span>
          <span>Configuración</span>
        </a>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
