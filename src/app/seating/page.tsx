export default function SeatingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Seating Plans</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-600 mb-4">Visual floor plan tool coming in next update.</p>
        <p className="text-sm text-gray-500">Current venue: 萬怡酒店 (fixed for 6 months)</p>
        <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">Table 1<br/>Visitors</div>
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">Table 2<br/>MS Category</div>
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">Table 3<br/>CS Category</div>
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">Table 4<br/>FR Category</div>
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">Table 5<br/>Visitors</div>
          <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg">Stage / AV</div>
        </div>
      </div>
    </div>
  );
}
