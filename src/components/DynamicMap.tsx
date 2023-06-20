import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const DynamicMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [map, setMap] = useState<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY29ucXV4aW9uIiwiYSI6ImNsaHU4bDZzZDFlMzQzaG81NTZ4b2sxbWgifQ.ulvIy-r_njw_VdXatUOR-g";

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.width <= 900 && map) {
      map.resize();
    } else if (windowSize.width > 900 && !map && mapContainerRef.current) {
      const newMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-72.5983, -38.7396],
        zoom: 12,
        attributionControl: false,
      });
      setMap(newMap);
    }
  }, [windowSize.width, map]);

  const containerStyle = {
    width: windowSize.width < 900 ? "80%" : "60%",
    height: windowSize.width < 900 ? "400px" : "300px",
    border: "6px solid #000000",
    borderRadius: "10px",
    margin: windowSize.width < 900 ? "auto" : "0",
  };

  return (
    <div style={containerStyle}>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default DynamicMap;
