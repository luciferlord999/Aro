import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_key } from "../Api/Api";
import { API_endpoint } from "../Api/Api";

function Location() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitutde] = useState("");
  const [location, sectLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitutde(position.coords.longitude);
      console.log(position.coords);
    });
    axios
      .get(
        `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
      )
      .then((response) => {
        sectLocation(response.data);
        // console.log(response.data)
      });
  }, [latitude, longitude]);

  return (
    <>({location?.name ? "Lucknow"(console.log("hello sir")) : "hello"})</>
  );
}

export default Location;
