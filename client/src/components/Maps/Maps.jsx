// import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
// import { MAP_API } from "../../config.js";
// import Loader from "../Loader/Loader";

// const Maps = () => {
//     const center = { lat: 27.7172, lng: 85.324 };
//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: MAP_API,
//     });

//     return (
//         <>
//             {!isLoaded ? (
//                 <div>
//                     <Loader />
//                 </div>
//             ) : (
//                 <div>
//                     <GoogleMap
//                         center={center}
//                         zoom={15}
//                         mapContainerStyle={{ width: "100%", height: "100%" }}
//                     ></GoogleMap>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Maps;

// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";
import "./Maps.css";
import bharatAvatar from "./bharat.png";
import Markerwhatever from "./Markerwhatever";
import RoutingMachine from "./RoutingMachine";

const Maps = (props) => {
    const { selectPosition } = props;
    const locationSelection = [selectPosition?.lat, selectPosition?.lon];
    // Berlin coordinates

    // --- (6) Create a custom marker ---
    const customIcon = new Icon({
        iconUrl: bharatAvatar,
        iconSize: [20, 20],
        // iconAnchor: [1, 1],
        popupAnchor: [-0, -16],
    });

    const [position, setPosition] = useState([27.7172, 85.324]);
    const [bbox, setBbox] = useState([]);

    const findPath = true;
    const [start, setStart] = useState([51.505, -0.09]);
    const [end, setEnd] = useState([51.5, -0.1]);

    return (
        <section className="map-component">
            {/* --- (5) Add leaflet map container --- */}
            <div className="map">
                <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {findPath ? (
                        <>
                            <RoutingMachine start={start} end={end} />
                        </>
                    ) : (
                        <Markerwhatever
                            position={position}
                            customIcon={customIcon}
                            setPosition={setPosition}
                        />
                    )}
                </MapContainer>
                {/* --- ---------------------------- --- */}
            </div>
        </section>
    );
};

export default Maps;
