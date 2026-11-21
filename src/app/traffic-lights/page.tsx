"use client";

import { useState } from "react";

export default function TrafficLightsPage() {
  const [attendance, setAttendance] = useState(10);
  const [referrals, setReferrals] = useState(20);
  const [visitors, setVisitors] = useState(15);
  const [oneToOne, setOneToOne] = useState(15);
  const [training, setTraining] = useState(8);
  const [tyfcb, setTyfcb] = useState(5);

  const total = attendance + referrals + visitors + oneToOne + training + tyfcb;
  const color = total >= 70 ? "Green" : total >= 50 ? "Yellow" : total >= 30 ? "Red" : "Black";

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Traffic Lights Calculator</h1>
      <p className="text-gray-500 mb-6">Adjust the scores to see current / projected status</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6 space-y-5">
          <Slider label="Attendance (max 15)" value={attendance} set={setAttendance} max={15} />
          <Slider label="Referrals (max 25)" value={referrals} set={setReferrals} max={25} />
          <Slider label="Visitors (max 25)" value={visitors} set={setVisitors} max={25} />
          <Slider label="1-2-1s (max 20)" value={oneToOne} set={setOneToOne} max={20} />
          <Slider label="Training / CEU (max 10)" value={training} set={setTraining} max={10} />
          <Slider label="TYFCB (max 5)" value={tyfcb} set={setTyfcb} max={5} />
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Current Score</p>
          <p className="text-7xl font-bold my-2">{total}</p>
          <p className={`text-3xl font-semibold ${
            color === "Green" ? "text-green-600" : color === "Yellow" ? "text-yellow-600" : "text-red-600"
          }`}>{color}</p>
          <p className="text-sm text-gray-400 mt-4 text-center">Green = 70+ points</p>
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, set, max }: { label: string; value: number; set: (n: number) => void; max: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}/{max}</span>
      </div>
      <input type="range" min={0} max={max} value={value} onChange={(e) => set(Number(e.target.value))} className="w-full" />
    </div>
  );
}
