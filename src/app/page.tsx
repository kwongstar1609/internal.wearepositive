export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500">
          <p className="text-sm text-gray-500">Total Members</p>
          <p className="text-3xl font-bold mt-1">96</p>
          <p className="text-xs text-gray-400 mt-1">Chapter size</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">
          <p className="text-sm text-gray-500">Green Lights</p>
          <p className="text-3xl font-bold mt-1">50</p>
          <p className="text-xs text-gray-400 mt-1">70–100 pts</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-yellow-500">
          <p className="text-sm text-gray-500">Pending Tasks</p>
          <p className="text-3xl font-bold mt-1">12</p>
          <p className="text-xs text-gray-400 mt-1">Across LT teams</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-500">
          <p className="text-sm text-gray-500">This Week Events</p>
          <p className="text-3xl font-bold mt-1">4</p>
          <p className="text-xs text-gray-400 mt-1">Meetings + activities</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Welcome to BNI Positive LT System</h2>
        <p className="text-gray-600">Phase 1 MVP is live. Use the sidebar to explore Calendar, Members, Tasks, Traffic Lights, and more.</p>
      </div>
    </div>
  );
}
