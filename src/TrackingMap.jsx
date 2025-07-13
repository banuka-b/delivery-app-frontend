// components/TrackingMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function TrackingMap() {
  const position = [7.2906, 80.6337]; // Kandy, Sri Lanka

  return (
    <MapContainer center={position} zoom={13} style={{ height: '320px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={position}>
        <Popup>Delivery Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default TrackingMap;
