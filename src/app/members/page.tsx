const members = [
  { name: "Hettina Cheng", category: "MS", score: 95, status: "Green" },
  { name: "Eva Yu", category: "MS", score: 90, status: "Green" },
  { name: "Benny Chan", category: "CS", score: 90, status: "Green" },
  { name: "Jeff Ho", category: "MS", score: 90, status: "Green" },
  { name: "Andrew Kwong", category: "IT", score: 70, status: "Green" },
  { name: "Sam Sze", category: "IT", score: 40, status: "Yellow" },
  { name: "Noelle Lee", category: "LF", score: 65, status: "Yellow" },
  { name: "Rony Suen", category: "CS", score: 80, status: "Green" },
];

export default function MembersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Members</h1>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Category</th>
              <th className="text-left p-4">Score</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-t">
                <td className="p-4 font-medium">{m.name}</td>
                <td className="p-4">{m.category}</td>
                <td className="p-4">{m.score}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    m.status === "Green" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {m.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
