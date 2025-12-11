"use client";

import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useRef, useEffect, useSyncExternalStore } from "react";

import dynamic from "next/dynamic";

// Custom hook for client-side mounting detection without useEffect setState
const emptySubscribe = () => () => {};
const useIsMounted = () => useSyncExternalStore(emptySubscribe, () => true, () => false);

// Dynamic import for Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.CircleMarker),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("react-leaflet").then((mod) => mod.Tooltip),
  { ssr: false }
);

const areas = [
  { name: "Miami-Dade", lat: 25.7617, lng: -80.1918 },
  { name: "Broward", lat: 26.1224, lng: -80.1373 },
  { name: "West Palm Beach", lat: 26.7153, lng: -80.0534 },
  { name: "Boca Raton", lat: 26.3683, lng: -80.1289 },
  { name: "Naples", lat: 26.1420, lng: -81.7948 },
  { name: "Fort Myers", lat: 26.6406, lng: -81.8723 },
  { name: "Sarasota", lat: 27.3364, lng: -82.5307 },
  { name: "Tampa", lat: 27.9506, lng: -82.4572 },
  { name: "Jacksonville", lat: 30.3322, lng: -81.6557 },
  { name: "Orlando", lat: 28.5383, lng: -81.3792 },
  { name: "Savannah", lat: 32.0809, lng: -81.0912 },
  { name: "Charlotte", lat: 35.2271, lng: -80.8431 },
];

// Marker interface for type safety
interface MarkerRef {
  openTooltip: () => void;
  closeTooltip: () => void;
}

export const ServiceAreas = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const isMounted = useIsMounted();
  const markerRefs = useRef<Map<string, MarkerRef>>(new Map());

  useEffect(() => {
    markerRefs.current.forEach((marker, name) => {
      if (marker) {
        if (name === hoveredArea) {
          marker.openTooltip();
        } else {
          marker.closeTooltip();
        }
      }
    });
  }, [hoveredArea]);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                Service Coverage
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Areas We <span className="text-accent">Serve</span>
            </h2>

            <p className="text-xl text-muted-foreground font-body">
              Covering cities from South Florida to North Carolina
            </p>
          </header>

          {/* Description */}
          <div className={`text-center mb-12 space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground font-body">
              We have worked around the clock to meet our client&apos;s needs.
            </p>
            <p className="text-lg text-foreground font-semibold font-body">
              Serving more than 36 different companies and 98 locations.
            </p>
          </div>

          {/* Map */}
          <div className={`mb-12 rounded-2xl overflow-hidden border border-border shadow-lg transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {isMounted && (
              <MapContainer
                center={[29.5, -81.5]}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: "450px", width: "100%" }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {areas.map((area) => {
                  const isHovered = hoveredArea === area.name;
                  return (
                    <CircleMarker
                      key={area.name}
                      center={[area.lat, area.lng]}
                      radius={isHovered ? 16 : 10}
                      pathOptions={{
                        fillColor: isHovered ? "#5A8A96" : "#6BA3B0",
                        fillOpacity: isHovered ? 1 : 0.8,
                        color: "#fff",
                        weight: isHovered ? 3 : 2,
                      }}
                      ref={(ref) => {
                        if (ref) {
                          markerRefs.current.set(area.name, ref);
                        }
                      }}
                      eventHandlers={{
                        mouseover: () => setHoveredArea(area.name),
                        mouseout: () => setHoveredArea(null),
                      }}
                    >
                      <Tooltip
                        direction="top"
                        offset={[0, -10]}
                        className="custom-tooltip"
                      >
                        <div className="px-3 py-2 font-semibold text-sm">
                          {area.name}
                        </div>
                      </Tooltip>
                    </CircleMarker>
                  );
                })}
              </MapContainer>
            )}
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => {
              const isHovered = hoveredArea === area.name;
              return (
                <article
                  key={area.name}
                  className={`bg-card border rounded-lg px-2 py-1.5 text-center cursor-pointer transition-all duration-300 ${
                    isHovered
                      ? 'border-accent shadow-md -translate-y-0.5 bg-accent/5'
                      : 'border-border hover:border-accent hover:shadow-md hover:-translate-y-0.5'
                  } ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms', animationFillMode: 'forwards' }}
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                >
                  <MapPin className={`w-4 h-4 mx-auto mb-0.5 transition-transform duration-300 ${isHovered ? 'text-accent scale-125' : 'text-accent'}`} aria-hidden="true" />
                  <span className="font-display font-medium text-foreground text-xs">{area.name}</span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
