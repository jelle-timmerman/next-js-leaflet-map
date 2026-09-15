"use client"

import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import { MapPin, Globe } from "lucide-react"
import { locations, type Location } from "@/lib/locations"
import { cn } from "@/lib/utils"

const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <p className="text-sm text-muted-foreground">Loading map…</p>
    </div>
  ),
})

export default function MapExplorer() {
  const [selected, setSelected] = useState<Location | null>(null)

  const categories = useMemo(
    () => Array.from(new Set(locations.map((l) => l.category))).sort(),
    [],
  )

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center gap-3 border-b px-6 py-4">
        <Globe className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-lg font-semibold leading-none">World Landmarks</h1>
          <p className="text-sm text-muted-foreground">
            {locations.length} locations across {categories.length} categories
          </p>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-80 shrink-0 overflow-y-auto border-r md:block">
          <ul className="divide-y">
            {locations.map((location) => {
              const isActive = selected?.id === location.id
              return (
                <li key={location.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(location)}
                    className={cn(
                      "flex w-full items-start gap-3 px-5 py-4 text-left transition-colors hover:bg-accent",
                      isActive && "bg-accent",
                    )}
                  >
                    <MapPin
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    <span className="space-y-1">
                      <span className="flex items-center gap-2">
                        <span className="font-medium leading-none">{location.name}</span>
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {location.city}, {location.country}
                      </span>
                      <span className="inline-block rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                        {location.category}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        <main className="relative flex-1">
          <LeafletMap locations={locations} selected={selected} onSelect={setSelected} />
        </main>
      </div>
    </div>
  )
}
