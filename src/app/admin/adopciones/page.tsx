'use client';

type Status = "pendiente" | "aprobada" | "rechazada";

interface AdoptionRequest {
  applicantName: string;
  animalName: string;
  requestDate: string;
  status: Status;
}

const mockAdoptionRequests: AdoptionRequest[] = [
  { applicantName: "Sofía Rodríguez", animalName: "Max", requestDate: "2024-07-26", status: "pendiente" },
  { applicantName: "Carlos López", animalName: "Bella", requestDate: "2024-07-25", status: "aprobada" },
  { applicantName: "Ana García", animalName: "Rocky", requestDate: "2024-07-24", status: "rechazada" },
  { applicantName: "Javier Pérez", animalName: "Luna", requestDate: "2024-07-23", status: "pendiente" },
  { applicantName: "María Sánchez", animalName: "Toby", requestDate: "2024-07-22", status: "aprobada" },
  { applicantName: "Diego Martínez", animalName: "Milo", requestDate: "2024-07-21", status: "pendiente" },
];

const StatusBadge = ({ status }: { status: Status }) => {
  const base = "px-3 py-1 rounded-full text-xs font-medium";

  const variants: Record<Status, string> = {
    pendiente: "bg-yellow-100 text-yellow-800",
    aprobada: "bg-green-100 text-green-800",
    rechazada: "bg-red-100 text-red-800",
  };

  return <span className={`${base} ${variants[status]}`}>{status}</span>;
};

export default function AdopcionesPage() {
  return (
    <div className="flex min-h-screen bg-background-light text-text-light font-display">
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <header className="mb-8">
            <h2 className="text-3xl font-bold text-text-light">Solicitudes de Adopción</h2>
            <p className="text-text-light/70 mt-1">
              Gestiona todas las solicitudes de adopción de animales.
            </p>
          </header>

          {/* Filtros */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-text-light/80">Filtrar por estado:</span>

            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-1.5 text-sm font-medium rounded-full bg-green-100 hover:bg-primary/30 transition-colors">
                Todas
              </button>
              <button className="px-4 py-1.5 text-sm font-medium rounded-full bg-background-light border border-border-light hover:bg-primary/10 transition-colors">
                Pendiente
              </button>
              <button className="px-4 py-1.5 text-sm font-medium rounded-full bg-background-light border border-border-light hover:bg-primary/10 transition-colors">
                Aprobada
              </button>
              <button className="px-4 py-1.5 text-sm font-medium rounded-full bg-background-light border border-border-light hover:bg-primary/10 transition-colors">
                Rechazada
              </button>
            </div>
          </div>

          {/* Tabla */}
          <div className="bg-card-light rounded-xl shadow-sm overflow-hidden border border-border-light">
            <div className="overflow-x-auto">
              <table className="w-full text-left">

                <thead className="bg-background-light border-b border-border-light">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-text-light/60">
                      Nombre del Solicitante
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-text-light/60">
                      Nombre del Animal
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-text-light/60">
                      Fecha de Solicitud
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-text-light/60">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-text-light/60 text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border-light">
                  {mockAdoptionRequests.map((req, index) => (
                    <tr key={index} className="hover:bg-background-light transition-colors cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{req.applicantName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{req.animalName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-text-light/80">{req.requestDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={req.status} /></td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-primary hover:underline">Ver Detalles</a>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
