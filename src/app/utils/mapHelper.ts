import maplibregl from 'maplibre-gl';

export const initializeMap = (
  container: HTMLElement,
  zoom: number,
  initialCoords: [number, number],
  disableRotate = true,
  copiesWorldRendering = true
): maplibregl.Map => {
  const map = new maplibregl.Map({
    container: container,
    style: `https://api.maptiler.com/maps/satellite/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`,
    center: initialCoords, // Центр карты
    zoom: zoom // Начальный зум карты
  });

  if (disableRotate) {
    // Отключение вращения
    map.dragRotate.disable();
    map.keyboard.disable();
    map.touchZoomRotate.disableRotation();
  }

  if (copiesWorldRendering) {
    // Рендеринг копий мира
    map.setRenderWorldCopies(false);
    map.panTo(map.getCenter());
  }

  return map;
};

export const registerFlyToMe = (coords: [number, number], zoom: number, map: maplibregl.Map) => {
  const myHome = document.getElementById('goHome');

  myHome!.addEventListener('click', () => {
    map.flyTo({
      center: coords,
      zoom: zoom,
      essential: true
    });
  });
};

export const initMyHomeMarker = (coords: [number, number], map: maplibregl.Map) => {
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          message: "Hello, it's me Andry",
          iconSize: [30, 30]
        },
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
    ]
  };

  geojson.features.forEach((marker) => {
    // Создаем DOM-элемент для маркера
    const el = document.createElement('div');
    el.className = 'marker';

    // Стилизация маркера
    el.style.backgroundImage = `url(https://picsum.photos/${marker.properties.iconSize.join('/')}/)`;
    el.style.borderRadius = '50%';
    el.style.cursor = 'pointer';
    el.style.width = `${marker.properties.iconSize[0]}px`;
    el.style.height = `${marker.properties.iconSize[1]}px`;

    // Центрируем маркер с помощью translate
    el.style.transform = 'translate(-50%, -50%)';

    el.addEventListener('click', () => {
      window.alert(marker.properties.message);
    });

    // Добавляем маркер на карту с использованием корректной системы координат
    new maplibregl.Marker({ element: el })
      .setLngLat(marker.geometry.coordinates) // Привязка к координатам на карте
      .addTo(map);
  });
};
