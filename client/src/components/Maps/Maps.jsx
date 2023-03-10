import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";
import "./Maps.css";
import RoutingMachine from "./RoutingMachine";

const Maps = ({ start, end }) => {
    const locationSelection = [start, end];

    return (
        <section className="map-component">
            <div className="map bharat">
                <MapContainer
                    center={[17.5, 72.08]}
                    zoom={6}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {start[0] && (
                        <>
                            <RoutingMachine start={start} end={end} />
                        </>
                    )}
                </MapContainer>
                {/* --- ---------------------------- --- */}
            </div>
        </section>
    );
};

export default Maps;
