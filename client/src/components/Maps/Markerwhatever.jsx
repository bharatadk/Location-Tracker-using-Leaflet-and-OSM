import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import bharatAvatar from "./bharat.png";
import { Icon } from "leaflet";
import GeolocationJS from "../Maps/GeoLocationJS";
import { io } from "socket.io-client";
const serverUrl = "http://localhost:3000";

const customIcon = new Icon({
    iconUrl: bharatAvatar,
    iconSize: [50, 50],
    // iconAnchor: [1, 1],
    popupAnchor: [-0, -16],
});
function LocationMarkers() {
    const initialMarkers = [
        [28, 84],
        [17, 72],
        [19, 78],
    ];
    const [markers, setMarkers] = useState(initialMarkers);

    // const map = useMapEvents({
    //     click(e) {
    //         markers.push(e.latlng);
    //         setMarkers((prevValue) => [...prevValue, e.latlng]);
    //     },
    // });

    const socket = useRef();

    // useEffect(() => {
    //     let timer1 = setTimeout(() => {
    //         socket.current = io("ws://localhost:8080");

    //         socket.current.on("getUsers", (data) => {
    //             let arr = [];
    //             console.log(data);
    //             if (data.length > 0) {
    //                 data.forEach((user) => {
    //                     arr.push([user.userObj.coordinates]);
    //                 });
    //             }

    //             setMarkers(arr);
    //         });
    //     }, 3000);

    //     return () => {
    //         clearTimeout(timer1);
    //     };
    // }, []);

    useEffect(() => {
        socket.current = io("ws://localhost:8080");
        const user = {
            username: localStorage.getItem("username"),
            coordinates: localStorage.getItem("coordinates"),
        };
        socket.current.emit("addUser", user);
    });

    return (
        <React.Fragment>
            {markers.map((marker) => (
                <Marker
                    icon={customIcon}
                    position={marker}
                    key={marker[0].toString()}
                >
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
            ))}
        </React.Fragment>
    );
}
const Markerwhatever = ({
    customIcon,
    currentPosition,
    setCurrentPosition,
}) => {
    const [bbox, setBbox] = useState([]);

    const map = useMap();
    useEffect(() => {
        map.locate().on("locationfound", function (e) {
            const timer = setTimeout(() => {
                setCurrentPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
                const radius = e.accuracy;
                const circle = L.circle(e.latlng, radius);
                circle.addTo(map);
                setBbox(e.bounds.toBBoxString().split(","));
            }, 5000);
            return () => clearTimeout(timer);
        });
    }, [currentPosition]);

    return (
        <>
            {" "}
            <MapContainer center={[17.5, 72.08]} zoom={6}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarkers />
            </MapContainer>
            {/* <Marker
                icon={customIcon}
                position={currentPosition}
                eventHandlers={{
                    click: (e) => {
                        map.flyTo(e.latlng, 14);
                    },
                }}
            >
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
            </Marker> */}
        </>
    );
};

export default Markerwhatever;
