"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import type { Location } from "@/lib/locations"

// Fix default marker icons (Leaflet expects image files at fixed paths).
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

function FlyToSelected({ location }: { location: Location | null }) {
  const map = useMap()
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 6, { duration: 1.25 })
    }
  }, [location, map])
  return null
}

type LeafletMapProps = {
  locations: Location[]
  selected: Location | null
  onSelect: (location: Location) => void
}

export default function LeafletMap({ locations, selected, onSelect }: LeafletMapProps) {
  return (
    <MapContainer
      center={[25, 10]}
      zoom={2}
      minZoom={2}
      scrollWheelZoom
      worldCopyJump
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={markerIcon}
          eventHandlers={{ click: () => onSelect(location) }}
        >
          <Popup>
            <div className="space-y-1">
              <p className="font-semibold text-sm">{location.name}</p>
              <p className="text-xs text-neutral-500">
                {location.city}, {location.country}
              </p>
              <p className="text-xs">{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      <FlyToSelected location={selected} />
    </MapContainer>
  )
}
