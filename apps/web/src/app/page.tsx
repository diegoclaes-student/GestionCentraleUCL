import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
          Centrale UCL Manager
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Plateforme de gestion d'association étudiante
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-2">Gestion des membres</h3>
            <p className="text-gray-600 mb-4">
              Gérez les membres, leurs rôles et leurs adhésions
            </p>
            <Link 
              href="/members" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Voir les membres
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-2">Événements</h3>
            <p className="text-gray-600 mb-4">
              Créez et gérez vos événements avec billetterie
            </p>
            <Link 
              href="/events" 
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Voir les événements
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-lg font-semibold mb-2">Tableau de bord</h3>
            <p className="text-gray-600 mb-4">
              Suivez les statistiques et KPI de votre association
            </p>
            <Link 
              href="/dashboard" 
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Voir le dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}