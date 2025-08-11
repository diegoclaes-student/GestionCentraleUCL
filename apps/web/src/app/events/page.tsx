export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestion des événements</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Créer un événement
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Soirée d'intégration 2024</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Publié
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Grande soirée pour accueillir les nouveaux membres de l'association.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>📅 15 février 2024, 19h00</div>
              <div>📍 Salle des fêtes de l'école</div>
              <div>🎫 85/150 places vendues</div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                Gérer
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Check-in
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Conférence Tech 2024</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Brouillon
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Conférence sur les nouvelles technologies et l'innovation.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div>📅 20 mars 2024, 14h00</div>
              <div>📍 Amphithéâtre principal</div>
              <div>🎫 Configuration en cours</div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700">
                Configurer
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                Publier
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-dashed border-gray-300">
          <div className="p-6 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nouvel événement</h3>
            <p className="text-gray-500 text-sm mb-4">
              Créez un nouvel événement avec billetterie
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Commencer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}