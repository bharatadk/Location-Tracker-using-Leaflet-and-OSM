import Navbar from "../Navbar/Navbar";
import Markerwhatever from "../Maps/Markerwhatever";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Circle = () => {
  

    const [currentPosition, setCurrentPosition] = useState([27.7172, 85.324]);
    const [bbox, setBbox] = useState([]);

    return (
        <section className="map-component">
            <div className="map">
                <MapContainer
                    center={currentPosition}
                    zoom={6}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        <>
                            <Markerwhatever
                                currentPosition={currentPosition}
                                setCurrentPosition={setCurrentPosition}
                            />
                        </>
                    }
                </MapContainer>
                {/* --- ---------------------------- --- */}
            </div>
            <Navbar />
        </section>
    );
};
export default Circle;
