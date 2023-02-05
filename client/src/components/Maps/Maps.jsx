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
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Maps.css";
import bharatAvatar from "./bharat.png";
import L from "leaflet";

// --- ---------------------------------- ---

const Maps = (props) => {
    const { selectPosition } = props;
    const locationSelection = [selectPosition?.lat, selectPosition?.lon];
    // Berlin coordinates
    const position = [27.7172, 85.324];

    // --- (6) Create a custom marker ---
    const customIcon = new Icon({
        iconUrl: bharatAvatar,
        iconSize: [20, 20],
        // iconAnchor: [1, 1],
        popupAnchor: [-0, -16],
    });

    return (
        <section className="map-component">
            {/* --- (5) Add leaflet map container --- */}
            <div className="map">
                <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // --- (7) Alternative map style (attribution and url copied from the leaflet extras website) ---
                        // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                        // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                        // --- -------------------------------------------------------------------------------------- ---
                    />
                    {selectPosition && (
                        <Marker position={locationSelection} icon={customIcon}>
                            <Popup>
                                <h1>Bharat Adhikari</h1>
                                <p>
                                    <a
                                        href="tel:9846877670"
                                        style={{ textDecoration: "none" }}
                                    >
                                        📞 9846877670
                                    </a>
                                </p>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
                {/* --- ---------------------------- --- */}
            </div>
        </section>
    );
};

export default Maps;
