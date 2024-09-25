import "./App.css";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useRef } from "react";
function App() {
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
    <div className="text-2xl underline">
      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => {
            inputref.current = ref;
          }}
          onPlacesChanged={handleOnPlacesChange}>
          <input placeholder="enter here"></input>
        </StandaloneSearchBox>
      )}
    </div>
  );
}

export default App;
