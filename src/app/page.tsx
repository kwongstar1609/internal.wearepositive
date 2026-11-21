export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-red-800 mb-4">BNI Positive LT System</h1>
      <p className="text-lg text-gray-700 mb-6">Dashboard is loading correctly.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
          <div className="text-3xl font-bold">96</div>
          <div className="text-sm text-gray-500">Members</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <div className="text-3xl font-bold">50</div>
          <div className="text-sm text-gray-500">Green Lights</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
          <div className="text-3xl font-bold">12</div>
          <div className="text-sm text-gray-500">Pending Tasks</div>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-500">Use the sidebar to navigate to Calendar, Members, Tasks, and Traffic Lights.</p>
    </div>
  );
}
