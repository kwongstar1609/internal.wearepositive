export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Members" value="96" subtitle="Chapter size" />
        <StatCard title="Green Lights" value="50" subtitle="70–100 pts" color="green" />
        <StatCard title="Pending Tasks" value="12" subtitle="Across LT teams" color="yellow" />
        <StatCard title="This Week Events" value="4" subtitle="Meetings + activities" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <QuickAction label="Schedule next 5-min presentation" />
            <QuickAction label="Update seating plan" />
            <QuickAction label="Review Traffic Lights" />
            <QuickAction label="Add chapter activity" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>• MSP workshop registration open (Dec 1)</li>
            <li>• 3 new visitor ratings submitted</li>
            <li>• Rehearsal group for next week created</li>
            <li>• Traffic Lights report imported (May 2026)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, color = "blue" }: { title: string; value: string; subtitle: string; color?: string }) {
  const colors: Record<string, string> = {
    green: "border-l-4 border-green-500",
    yellow: "border-l-4 border-yellow-500",
    blue: "border-l-4 border-blue-500",
  };
  return (
    <div className={`bg-white rounded-xl shadow p-6 ${colors[color]}`}>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-red-50 rounded-lg text-sm font-medium transition">
      {label}
    </button>
  );
}
