import { Map } from 'maplibre-gl';
import React, { useEffect, useRef } from 'react';

import { initializeMap, initMyHomeMarker, registerFlyToMe } from '../../../utils/mapHelper';

const MapLibre: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initalCoords: [number, number] = [31.0922, 46.6239];
    const initialZoom: number = 17;

    const map = initializeMap(mapContainerRef.current, initialZoom, initalCoords);
    mapRef.current = map;

    initMyHomeMarker(initalCoords, map);
    registerFlyToMe(initalCoords, initialZoom, map);

    return () => map.remove();
  }, []);

  return (
    <>
      <div ref={mapContainerRef} style={{ width: '100%', height: '400px', overflow: 'hidden' }} />
    </>
  );
};

export default MapLibre;
