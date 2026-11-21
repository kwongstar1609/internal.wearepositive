"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Dashboard", icon: "📊" },
  { href: "/calendar", label: "Calendar", icon: "📅" },
  { href: "/members", label: "Members", icon: "👥" },
  { href: "/tasks", label: "Tasks", icon: "✅" },
  { href: "/traffic-lights", label: "Traffic Lights", icon: "🚦" },
  { href: "/presentations", label: "Presentations", icon: "🎤" },
  { href: "/seating", label: "Seating Plans", icon: "🪑" },
  { href: "/activities", label: "Activities", icon: "🎉" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-red-800 text-white flex flex-col">
      <div className="p-6 border-b border-red-700">
        <h1 className="text-xl font-bold">BNI Positive</h1>
        <p className="text-sm text-red-200">LT Operations System</p>
      </div>
      <nav className="flex-1 p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${
              pathname === item.href
                ? "bg-red-700 text-white"
                : "text-red-100 hover:bg-red-700"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-red-700 text-sm text-red-200">
        Phase 1 MVP • wearepositive.hk
      </div>
    </aside>
  );
}
