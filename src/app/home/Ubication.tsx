'use client'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import Image from 'next/image';
import { MapPin, Navigation, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

// Función para crear íconos redondos con borde blanco
const createRoundIcon = (imageUrl: string) =>
  new L.DivIcon({
    className: "custom-icon",
    html: `<div style="
      width: 60px; 
      height: 60px; 
      border-radius: 50%; 
      overflow: hidden; 
      border: 4px solid white;
      display: flex; 
      align-items: center; 
      justify-content: center;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    ">
      <img src='${imageUrl}' style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />
    </div>`
  });

// Íconos redondos con borde blanco
const projectIcon = createRoundIcon("/torres.png");
const bogotaIcon = createRoundIcon("/map/bogota.jpg");
const ibagueIcon = createRoundIcon("/map/ibague.jpg");
const neivaIcon = createRoundIcon("/map/neiva.jpg");

// Coordenadas actualizadas
const projectLocation: LatLngTuple = [3.715663, -74.884566];
const bogota: LatLngTuple = [4.7110, -74.0721];
const ibague: LatLngTuple = [4.4389, -75.2322];
const neiva: LatLngTuple = [2.9273, -75.2819];

// Rutas mejoradas con caminos reales y hasta la ciudad
const routes = [
  {
    from: bogota,
    to: projectLocation,
    waypoints: [
      [4.4389, -74.5322] as LatLngTuple,
      [4.2000, -74.6000] as LatLngTuple,
      [3.9000, -74.7500] as LatLngTuple,
      projectLocation
    ],
    text: "Bogotá → Prado (210 km)"
  },
  {
    from: ibague,
    to: projectLocation,
    waypoints: [
      [4.3000, -74.7000] as LatLngTuple,
      projectLocation
    ],
    text: "Ibagué → Prado (110 km)"
  },
  {
    from: neiva,
    to: projectLocation,
    waypoints: [
      [3.5000, -75.0000] as LatLngTuple,
      [3.6500, -74.9000] as LatLngTuple,
      projectLocation
    ],
    text: "Neiva → Prado (170 km)"
  }
];

// Add city data for the side panel
const cities = [
  {
    name: "Bogotá",
    distance: "210 km",
    description: "Capital de Colombia, conectada por vía terrestre",
    color: "blue",
    image: "/map/bogota.jpg"
  },
  {
    name: "Ibagué",
    distance: "110 km",
    description: "Capital musical de Colombia, la ruta más corta",
    color: "green",
    image: "/map/ibague.jpg"
  },
  {
    name: "Neiva",
    distance: "170 km",
    description: "Capital del Huila, acceso sur al proyecto",
    color: "red",
    image: "/map/neiva.jpg"
  }
];

// Componente para controlar el zoom
function ZoomControl() {
  const map = useMap();
  
  return (
    <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
      <button
        onClick={() => map.zoomIn()}
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
      >
        <Plus size={20} className="text-[#1B3C59]" />
      </button>
      <button
        onClick={() => map.zoomOut()}
        className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
      >
        <Minus size={20} className="text-[#1B3C59]" />
      </button>
    </div>
  );
}

export default function Ubication() {
  return (
    <div className="bg-blue-50 py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1B3C59]">
            Ubicación Privilegiada
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-700">
            Descubre una inversión única en el corazón de Colombia. 
            A solo minutos de las principales ciudades y rodeado de naturaleza excepcional.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/#contacto"
              className="inline-flex items-center px-6 py-3 bg-[#1B3C59] text-white rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl"
            >
              Agendar Visita
              <MapPin className="ml-2" size={20} />
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex items-center px-6 py-3 border-2 border-[#1B3C59] text-[#1B3C59] rounded-lg hover:bg-[#1B3C59] hover:text-white transition-all"
            >
              Solicitar Información
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 pt-4 md:gap-12">
          {/* Ajuste del mapa para mobile */}
          <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
            <MapContainer
              center={projectLocation}
              zoom={13}
              className="h-full w-full"
              zoomControl={false}
            >
              {/* TileLayer para vista satelital */}
              <TileLayer 
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" 
                attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; World Imagery'
              />

              {/* Marcador del proyecto con ícono redondo */}
              <Marker position={projectLocation} icon={projectIcon}>
                <Popup>
                  <div className="text-lg font-semibold text-green-800">
                    <MapPin className="inline-block mr-1 text-green-700" size={18} />
                    Prado Lake View
                  </div>
                  <p className="text-sm text-gray-600">
                    Ubicación exacta en la Represa de Prado, Tolima. Un destino ideal para vivir y disfrutar.
                  </p>
                  <Image 
                    src="/torres.png" 
                    alt="Prado Lake View" 
                    width={300}
                    height={128}
                    className="w-full h-32 rounded-md mt-2 object-cover"
                  />
                </Popup>
              </Marker>

              {/* Marcadores de ciudades cercanas con imágenes en los iconos */}
              <Marker position={bogota} icon={bogotaIcon}>
                <Popup>
                  <div className="text-lg font-semibold text-blue-700">Bogotá</div>
                  <p className="text-sm text-gray-600">
                    <Navigation className="inline-block mr-1 text-gray-500" size={16} />
                    210 km de distancia
                  </p>
                  <Image 
                    src="/map/bogota.jpg" 
                    alt="Bogotá" 
                    width={300}
                    height={128}
                    className="w-full h-32 rounded-md mt-2 object-cover"
                  />
                </Popup>
              </Marker>

              <Marker position={ibague} icon={ibagueIcon}>
                <Popup>
                  <div className="text-lg font-semibold text-green-700">Ibagué</div>
                  <p className="text-sm text-gray-600">
                    <Navigation className="inline-block mr-1 text-gray-500" size={16} />
                    110 km de distancia
                  </p>
                  <Image 
                    src="/map/ibague.jpg" 
                    alt="Ibagué" 
                    width={300}
                    height={128}
                    className="w-full h-32 rounded-md mt-2 object-cover"
                  />
                </Popup>
              </Marker>

              <Marker position={neiva} icon={neivaIcon}>
                <Popup>
                  <div className="text-lg font-semibold text-red-700">Neiva</div>
                  <p className="text-sm text-gray-600">
                    <Navigation className="inline-block mr-1 text-gray-500" size={16} />
                    170 km de distancia
                  </p>
                  <Image 
                    src="/map/neiva.jpg" 
                    alt="Neiva" 
                    width={300}
                    height={128}
                    className="w-full h-32 rounded-md mt-2 object-cover"
                  />
                </Popup>
              </Marker>

              {/* Rutas mejoradas con carreteras realistas y color blanco */}
              {routes.map((route, index) => (
                <Polyline key={index} positions={[route.from, ...route.waypoints]} color="white" weight={4} opacity={0.9}>
                  <Popup>
                    <p className="text-sm font-semibold">{route.text}</p>
                  </Popup>
                </Polyline>
              ))}

              {/* ZoomControl dentro del MapContainer */}
              <ZoomControl />
            </MapContainer>
          </div>

          {/* Panel de Ciudades - Ajustado para mejor visualización en mobile */}
          <div className="w-full space-y-6">
            {cities.map((city, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 md:w-20 md:h-20 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#1B3C59]">{city.name}</h4>
                    <p className="text-gray-600">
                      <Navigation className="inline-block mr-1 text-[#1B3C59]" size={16} />
                      {city.distance}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{city.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#2A5A85] text-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-xl mb-2">¿Por qué invertir aquí?</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Ubicación estratégica con alta valorización
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Fácil acceso desde principales ciudades
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  Entorno natural privilegiado
                </li>
              </ul>
              <Link
                href="/#contacto"
                className="mt-4 inline-block w-full text-center py-3 bg-white text-[#1B3C59] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
