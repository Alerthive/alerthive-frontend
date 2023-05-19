import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const DynamicMap: React.FC = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiY29ucXV4aW9uIiwiYSI6ImNsaHU4bDZzZDFlMzQzaG81NTZ4b2sxbWgifQ.ulvIy-r_njw_VdXatUOR-g";

        const map = new mapboxgl.Map({
            container: mapContainerRef.current as HTMLDivElement,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-72.5983, -38.7396],
            zoom: 12,
            attributionControl: false,
        });

        // Actualizar el tamaño del mapa al cambiar el tamaño de la ventana
        const handleResize = () => {
            if (map) {
                map.resize();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                width: "60%",
                height: "400px",
                border: "10px solid #000000",
            }}
        >
            <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
};

export default DynamicMap;