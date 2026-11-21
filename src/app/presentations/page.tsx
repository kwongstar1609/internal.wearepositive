const presentations = [
  { member: "Noelle Lee", title: "Beauty Products – 5 min Feature", date: "2026-11-12", type: "5-min" },
  { member: "Angel Lee", title: "Personal IP & New Media", date: "2026-11-05", type: "5-min" },
  { member: "Jeff Hon", title: "Employee Benefits & Travel Insurance", date: "2026-10-29", type: "5-min" },
  { member: "Paul Mak", title: "Outdoor Experience Training Centre", date: "2026-10-22", type: "Gains Profile" },
  { member: "Rony Suen", title: "Charitable Social Enterprise", date: "2026-10-15", type: "5-min" },
];

export default function PresentationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Presentation Archive</h1>
      <p className="text-gray-500 mb-6">Past 5-min presentations and Gains Profiles. Audio/video clips can be added later.</p>
      <div className="bg-white rounded-xl shadow divide-y">
        {presentations.map((p, i) => (
          <div key={i} className="p-4 flex justify-between items-center">
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-gray-500">{p.member} • {p.date}</p>
            </div>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">{p.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
