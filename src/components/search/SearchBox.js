import {
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useRef, useState } from "react";
import "./SearchBox.css";

export default function SearchBox() {
  const inputref = useRef(null);
  const [location, setLocation] = useState("");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBU7Bg3ZG8pWsoUfG1nUrXg2IHpQyj8WNM",
    libraries: ["places"],
  });
  console.log(isLoaded);
  const handleOnPlacesChange = () => {
    let address = inputref.current.getPlaces();
    address.map((add) => {
      setLocation(add.address_components[0].long_name);
      
    });
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=bdc6d1ba112642c39ae155600242409&q=" +
        location
    )
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="container h-screen flex flex-col items-center mx-auto ">
      <h1 className="text-4xl text-text ">Weather App</h1>
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => {
            inputref.current = ref;
          }}
          onPlacesChanged={handleOnPlacesChange}
        >
          <input
            type="text"
            className="mt-10 px-4 py-3 w-[450px] rounded-md outline-none"
            placeholder="location..."
          />
        </StandaloneSearchBox>
      )}
      <button className="text-text bg-accent py-2 px-4 rounded-lg mt-6 cursor-pointer">
        Search
      </button>
    </div>
  );
}
