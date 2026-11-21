export default function PresentationsPage() {
  const items = [
    { member: "Noelle Lee", title: "Beauty Products Feature", date: "2026-11-12", type: "5-min" },
    { member: "Angel Lee", title: "Personal IP & New Media", date: "2026-11-05", type: "5-min" },
    { member: "Jeff Hon", title: "Employee Benefits", date: "2026-10-29", type: "5-min" },
    { member: "Paul Mak", title: "Outdoor Experience Training", date: "2026-10-22", type: "Gains Profile" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Presentation Archive</h1>
      <div className="bg-white rounded-xl shadow divide-y">
        {items.map((p, i) => (
          <div key={i} className="p-4 flex justify-between">
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-gray-500">{p.member} • {p.date}</p>
            </div>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full self-center">{p.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
