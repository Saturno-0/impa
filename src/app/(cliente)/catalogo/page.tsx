import React from 'react';

export default function Home() {
    // Datos extraídos de tu HTML para mantener el código limpio
    const animals = [
        { name: "Max", desc: "Perro, Labrador, Macho", img: "https://cdn.pixabay.com/photo/2017/03/29/10/35/animal-2184791_1280.jpg" },
        { name: "Bella", desc: "Gato, Siamés, Hembra", img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800&auto=format&fit=crop" },
        { name: "Rocky", desc: "Perro, Bulldog, Macho", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop" },
        { name: "Luna", desc: "Gato, Persa, Hembra", img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop" },
        { name: "Charlie", desc: "Perro, Beagle, Macho", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop" },
        { name: "Daisy", desc: "Perro, Golden Retriever, Hembra", img: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=800&auto=format&fit=crop" },
        { name: "Cooper", desc: "Perro, Poodle, Macho", img: "https://tse3.mm.bing.net/th/id/OIP.IDxxFBmQBo_9YZODaPFUxwHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { name: "Lucy", desc: "Gato, Maine Coon, Hembra", img: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=800&auto=format&fit=crop" },
        { name: "Buddy", desc: "Perro, Boxer, Macho", img: "https://media.istockphoto.com/id/1257560195/es/foto/un-perro-b%C3%B3xer-de-pura-raza-escuchando-con-una-inclinaci%C3%B3n-de-la-cabeza.jpg?s=612x612&w=0&k=20&c=VLUs77e8tm2kHXpWQKNn4Wu3HicM-qOkl32Mfg9L7U0=" },
        { name: "Molly", desc: "Perro, Dachshund, Hembra", img: "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?q=80&w=800&auto=format&fit=crop" },
        { name: "Oliver", desc: "Perro, Husky, Macho", img: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?q=80&w=800&auto=format&fit=crop" },
        { name: "Chloe", desc: "Gato, Ragdoll, Hembra", img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=800&auto=format&fit=crop" },
    ];

    return (
        <main className="flex-grow bg-background-light dark:bg-background-dark min-h-screen">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">

                    {/* Título y Descripción */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold tracking-tighter text-[#112111] dark:text-background-light sm:text-5xl font-display">
                            Animales Disponibles
                        </h1>
                        <p className="mt-4 text-lg text-[#112111]/70 dark:text-background-light/70 font-display">
                            Conoce a nuestros amigos peludos que buscan un hogar amoroso. Cada uno tiene una historia única y está listo para ser parte de tu familia.
                        </p>
                    </div>

                    {/* Botones de Filtro */}
                    <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                        {["Especie", "Raza", "Sexo"].map((filter) => (
                            <button
                                key={filter}

                                className="flex h-10 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4 text-sm font-medium text-[#112111] hover:bg-primary/30 dark:bg-primary/30 dark:text-background-light dark:hover:bg-primary/40 transition-all shadow"
                            >
                                <span>{filter}</span>
                                <span className="material-symbols-outlined text-lg"> expand_more </span>
                            </button>
                        ))}
                    </div>

                    {/* Grid de Animales */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
                        {animals.map((animal, index) => (
                            <div
                                key={index}
                                className="group flex cursor-pointer flex-col gap-3 rounded-lg bg-background-light dark:bg-background-dark p-2 transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="aspect-square w-full overflow-hidden rounded">
                                    <div
                                        className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url("${animal.img}")`, // <--- CAMBIO AQUÍ
                                        }}
                                    ></div>
                                </div>
                                <div>
                                    <p className="text-base font-bold text-[#112111] dark:text-background-light font-display">
                                        {animal.name}
                                    </p>
                                    <p className="text-sm text-[#112111]/70 dark:text-background-light/70 font-display">
                                        {animal.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}