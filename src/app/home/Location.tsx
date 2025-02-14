"use client";
import { Plus, Minus } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Componente para controles de zoom
function ZoomControls() {
  const map = useMap();

  const handleZoomIn = () => {
    map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    map.setZoom(map.getZoom() - 1);
  };

  return (
    <div className="absolute top-4 right-4 z-[400] flex flex-col gap-2">
      <button 
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Acercar mapa"
        onClick={handleZoomIn}
      >
        <Plus size={24} aria-hidden="true" />
      </button>

      <button 
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Alejar mapa"
        onClick={handleZoomOut}
      >
        <Minus size={24} aria-hidden="true" />
      </button>
    </div>
  );
}

// Configuración de iconos personalizados
const customIcon = new L.Icon({
  iconUrl: '/torres.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: 'rounded-full'
});

const cityIcon = new L.Icon({
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
  className: 'rounded-full'
});

export default function Location() {
  const position: [number, number] = [3.7559, -74.9091]; // Coordenadas de Prado

  return (
    <section id="ubicacion" aria-label="Ubicación del proyecto" className="relative">
      <MapContainer 
        center={position} 
        zoom={13} 
        className="w-full h-[600px]"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Marcador principal */}
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-lg">Prado Lake View</h3>
              <p className="text-sm text-gray-600">Tu próximo hogar con vista al embalse</p>
            </div>
          </Popup>
        </Marker>

        {/* Marcadores de ciudades */}
        <Marker 
          position={[4.6097, -74.0817]} 
          icon={new L.Icon({...cityIcon, iconUrl: '/map/bogota.jpg'})}
        >
          <Popup>Bogotá - 4 horas</Popup>
        </Marker>

        <Marker 
          position={[4.4389, -75.2322]} 
          icon={new L.Icon({...cityIcon, iconUrl: '/map/ibague.jpg'})}
        >
          <Popup>Ibagué - 2 horas</Popup>
        </Marker>

        <Marker 
          position={[2.9273, -75.2819]} 
          icon={new L.Icon({...cityIcon, iconUrl: '/map/neiva.jpg'})}
        >
          <Popup>Neiva - 1.5 horas</Popup>
        </Marker>

        <ZoomControls />
      </MapContainer>
    </section>
  );
} 