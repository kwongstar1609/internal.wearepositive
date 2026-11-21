const tasks = [
  { team: "ST", task: "Organise 5-min presentation rehearsal", assignee: "ST Sub-com", status: "In Progress", due: "2026-12-05" },
  { team: "VH", task: "Prepare seating plan", assignee: "Visitor Hosts", status: "Pending", due: "2026-12-03" },
  { team: "MC", task: "Review new applications", assignee: "VP + MCC", status: "Pending", due: "2026-12-02" },
  { team: "CGC", task: "Post MSP workshop reminder", assignee: "CGC", status: "Done", due: "2026-11-25" },
  { team: "Green Light", task: "Follow up Yellow members", assignee: "GL Coordinator", status: "In Progress", due: "2026-12-10" },
];

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tasks</h1>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Team</th>
              <th className="text-left p-4">Task</th>
              <th className="text-left p-4">Assignee</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Due</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr key={i} className="border-t">
                <td className="p-4 font-medium">{t.team}</td>
                <td className="p-4">{t.task}</td>
                <td className="p-4">{t.assignee}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    t.status === "Done" ? "bg-green-100 text-green-800" :
                    t.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                    "bg-yellow-100 text-yellow-800"
                  }`}>
                    {t.status}
                  </span>
                </td>
                <td className="p-4 text-sm">{t.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
