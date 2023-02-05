import React from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

const Markerwhatever = ({ customIcon, position, setPosition }) => {
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            const timer = setTimeout(() => {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
                const radius = e.accuracy;
                const circle = L.circle(e.latlng, radius);
                circle.addTo(map);
                setBbox(e.bounds.toBBoxString().split(","));
            }, 5000);
            return () => clearTimeout(timer);
        });
    }, []);

    return (
        <Marker
            icon={customIcon}
            position={position}
            eventHandlers={{
                click: (e) => {
                    map.flyTo(e.latlng, 14);
                },
            }}
        >
            <Popup>
                <h1>Bharat Adhikari</h1>
                <p>
                    <a href="tel:9846877670" style={{ textDecoration: "none" }}>
                        📞 9846877670
                    </a>
                </p>
            </Popup>
        </Marker>
    );
};

export default Markerwhatever;
