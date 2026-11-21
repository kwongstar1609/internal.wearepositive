export default function ActivitiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Chapter Activities</h1>
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-600 mb-4">Central archive for past and future activities, photos, and templates.</p>
        <ul className="space-y-3">
          <li className="p-3 bg-gray-50 rounded">MSP Workshop – Dec 1, 2026 (南洋酒店)</li>
          <li className="p-3 bg-gray-50 rounded">MC Follow Up Workshop – Dec 4, 2026</li>
          <li className="p-3 bg-gray-50 rounded">VIP Visit – SEYO (Sep 2026)</li>
          <li className="p-3 bg-gray-50 rounded">Member Testimonial Video Contest 2026</li>
        </ul>
      </div>
    </div>
  );
}
