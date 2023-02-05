function App() {
    const [start, setStart] = useState([51.505, -0.09]);
    const [end, setEnd] = useState([51.5, -0.1]);

    return (
        <Map center={start} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={start}>
                <Popup>Start</Popup>
            </Marker>
            <Marker position={end}>
                <Popup>End</Popup>
            </Marker>
            <RoutingMachine start={start} end={end} withLeaflet={withLeaflet} />
        </Map>
    );
}
