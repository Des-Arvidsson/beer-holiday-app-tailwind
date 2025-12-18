"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BEERS = ["IPA", "Lager", "Stout", "Pilsner", "Wheat Beer", "Pale Ale"];

const BEER_IMAGES: Record<string, string> = {
  IPA: "/images/ipa.png",
  Lager: "/images/lager.png",
  Stout: "/images/stout.png",
  Pilsner: "/images/pilsner.png",
  "Wheat Beer": "/images/wheat.png",
  "Pale Ale": "/images/paleale.png",
};

export default function EmployeeCard({
  employee,
}: {
  employee: { id: number; name: string; title: string; department: string };
}) {
  const [beer, setBeer] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Load from backend memory on mount
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const res = await fetch(`/api/employee-beer?employeeId=${employee.id}`, {
        cache: "no-store",
      });

      if (!res.ok) return;
      const data = await res.json();

      if (cancelled) return;
      if (data?.beer) setBeer(data.beer);
      if (data?.updatedAt)
        setLastUpdated(new Date(data.updatedAt).toLocaleString());
    })();

    return () => {
      cancelled = true;
    };
  }, [employee.id]);

  const handleChange = async (value: string) => {
    setBeer(value);
    setSaving(true);

    const res = await fetch("/api/employee-beer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employeeId: employee.id, beer: value }),
    });

    setSaving(false);

    if (!res.ok) return;
    const data = await res.json();
    setLastUpdated(new Date(data.updatedAt).toLocaleString());
  };

  return (
    <div className="group bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col border border-gray-100 hover:-translate-y-1">
      {/* Employee Info */}
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          {employee.name}
        </h2>
        <p className="text-sm text-gray-500">{employee.title}</p>
      </div>

      {/* Beer selection */}
      <div className="mt-auto">
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
          Favorite Brew
        </label>

        <select
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400
                     transition disabled:opacity-60"
          value={beer ?? ""}
          disabled={saving}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="" disabled>
            Choose wisely
          </option>
          {BEERS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
{beer ? (
  <div className="mt-5 flex items-center gap-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-4 border border-amber-100 min-h-[96px]">
    <Image
      src={BEER_IMAGES[beer]}
      alt={beer}
      width={56}
      height={56}
      className="rounded-lg drop-shadow-sm"
    />
    <div className="flex-1">
      <p className="text-sm text-gray-500">Committed to</p>
      <p className="font-semibold text-lg text-gray-900">{beer}</p>
    </div>
    {saving && <span className="text-xs text-gray-500">Saving…</span>}
  </div>
) : (
  <div
    className="
      mt-5 min-h-[96px]
      flex items-center justify-center
      rounded-xl border border-dashed border-gray-200
      bg-gray-50/60
      text-center
      opacity-70
    "
  >
    <div className="text-center">
  <p className="text-sm font-medium text-gray-600">
    This profile appears to be… undecided.
  </p>
  <p className="text-xs text-gray-400 mt-1">
    A thoughtfully chosen brew would help.
  </p>
</div>

  </div>
)}

      
      </div>
    </div>
  );
}
