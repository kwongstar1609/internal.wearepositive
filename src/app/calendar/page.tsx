"use client";

import { useState } from "react";

const events = [
  { date: "2026-12-01", title: "MSP Member Success Program", type: "training", color: "bg-blue-500" },
  { date: "2026-12-04", title: "MC Follow Up Workshop", type: "training", color: "bg-blue-500" },
  { date: "2026-12-03", title: "Weekly Chapter Meeting", type: "meeting", color: "bg-red-600" },
  { date: "2026-12-05", title: "ST Rehearsal (5-min presentations)", type: "rehearsal", color: "bg-purple-500" },
  { date: "2026-12-06", title: "Team Dinner – CS Group", type: "social", color: "bg-green-500" },
  { date: "2026-12-10", title: "Visitor Day", type: "meeting", color: "bg-red-600" },
  { date: "2026-12-15", title: "Andrew Kwong Birthday", type: "birthday", color: "bg-pink-500" },
];

export default function CalendarPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? events : events.filter((e) => e.type === filter);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Central Calendar</h1>
      <div className="flex gap-2 mb-6 flex-wrap">
        {["all", "training", "meeting", "rehearsal", "social", "birthday"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
              filter === f ? "bg-red-700 text-white" : "bg-white text-gray-700 border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow divide-y">
        {filtered.map((event, i) => (
          <div key={i} className="p-4 flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${event.color}`} />
            <div className="flex-1">
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-gray-500">{event.date} • {event.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
