"use client";

import { useState } from "react";

export default function TrafficLightsPage() {
  const [attendance, setAttendance] = useState(25);
  const [referrals, setReferrals] = useState(20);
  const [visitors, setVisitors] = useState(15);
  const [oneToOne, setOneToOne] = useState(10);
  const [training, setTraining] = useState(10);
  const [tyfcb, setTyfcb] = useState(15);

  const total = attendance + referrals + visitors + oneToOne + training + tyfcb;
  const color = total >= 70 ? "Green" : total >= 50 ? "Yellow" : total >= 30 ? "Red" : "Black";

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Traffic Lights Calculator</h1>
      <p className="text-gray-500 mb-6">Sample projection based on 6-month rolling scores (configurable later)</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <ScoreInput label="Attendance (max 15)" value={attendance} onChange={setAttendance} max={15} />
          <ScoreInput label="Referrals (max 20)" value={referrals} onChange={setReferrals} max={20} />
          <ScoreInput label="Visitors (max 20)" value={visitors} onChange={setVisitors} max={20} />
          <ScoreInput label="1-2-1s (max 10)" value={oneToOne} onChange={setOneToOne} max={10} />
          <ScoreInput label="Training / CEU (max 10)" value={training} onChange={setTraining} max={10} />
          <ScoreInput label="TYFCB (max 15)" value={tyfcb} onChange={setTyfcb} max={15} />
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 mb-2">Projected Score</p>
          <p className="text-6xl font-bold">{total}</p>
          <p className={`text-2xl font-semibold mt-2 ${
            color === "Green" ? "text-green-600" :
            color === "Yellow" ? "text-yellow-600" :
            color === "Red" ? "text-red-600" : "text-gray-600"
          }`}>
            {color}
          </p>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Target: 70+ for Green Light<br />
            Adjust scores to see what is needed next month
          </p>
        </div>
      </div>
    </div>
  );
}

function ScoreInput({ label, value, onChange, max }: { label: string; value: number; onChange: (v: number) => void; max: number }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <span className="text-sm text-gray-500">{value} / {max}</span>
    </div>
  );
}
