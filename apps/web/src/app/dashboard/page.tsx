export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Membres actifs</h3>
          <p className="text-3xl font-bold text-blue-600">142</p>
          <p className="text-sm text-gray-500">+5 ce mois</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Événements à venir</h3>
          <p className="text-3xl font-bold text-green-600">3</p>
          <p className="text-sm text-gray-500">Dans les 30 jours</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Taux de cotisation</h3>
          <p className="text-3xl font-bold text-purple-600">87%</p>
          <p className="text-sm text-gray-500">2024-2025</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenus ce mois</h3>
          <p className="text-3xl font-bold text-orange-600">€2,450</p>
          <p className="text-sm text-gray-500">+12% vs mois dernier</p>
        </div>
      </div>
    </div>
  );
}