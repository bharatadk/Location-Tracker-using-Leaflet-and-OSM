import useGeolocation from "react-hook-geolocation";

const GeoLocationJS = () => {
    const geolocation = useGeolocation();

    return !geolocation.error ? geolocation : console.log("error");
};
export default GeoLocationJS;
