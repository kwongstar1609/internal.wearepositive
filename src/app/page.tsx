export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-red-800 mb-4">BNI Positive LT System</h1>
      <p className="text-xl text-gray-700 mb-8">Dashboard is now working.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
          <div className="text-4xl font-bold">96</div>
          <div className="text-gray-500">Members</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
          <div className="text-4xl font-bold">50</div>
          <div className="text-gray-500">Green Lights</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-yellow-500">
          <div className="text-4xl font-bold">12</div>
          <div className="text-gray-500">Pending Tasks</div>
        </div>
      </div>
      <p className="mt-10 text-gray-500">Navigation and full features will be restored once this base version is confirmed working.</p>
    </div>
  );
}
