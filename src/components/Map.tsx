import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type MapProps = {
  address: string;
};

function Map({ address }: MapProps) {
  const mapRef = useRef(null);

  return <div style={{ height: "400px" }} ref={mapRef} />;
}
export default Map;
