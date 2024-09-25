import {
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useRef } from "react";

export default function SearchBox() {
    const inputref = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBU7Bg3ZG8pWsoUfG1nUrXg2IHpQyj8WNM",
    libraries: ["places"],
  });
  console.log(isLoaded);
  const handleOnPlacesChange = () => {
    let address = inputref.current.getPlaces();
    address.map((add) => {
      console.log(add.address_components[0].long_name);
    });
  };
  return (
    <div className="p-10">
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => {
            inputref.current = ref;
          }}
          onPlacesChanged={handleOnPlacesChange}
        >
          <input placeholder="enter here"></input>
        </StandaloneSearchBox>
      )}
    </div>
  );
}
