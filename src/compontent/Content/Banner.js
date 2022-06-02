import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_key } from "../../Api/Api";
import { API_endpoint } from "../../Api/Api";

function Banner(props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitutde] = useState("");
  const [location, sectLocation] = useState(null);
  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitutde(position.coords.longitude);
      // console.log(position.coords);
    });

  }, []);

  function handleEvent() {
    axios
      .get(
        `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`
      )
      .then((response) => {
        sectLocation(response.data);
      });

    alert("hello")





  }
  return (
    <>
      <div className="page-content bg-white">
        <div className="dlab-bnr-inr dlab-bnr-inr-md overlay-primary">
          <div className="container">
            {/* <div className="dlab-bnr-inr-entry align-m dlab-home bg">
              <img src="/images/banner/bnr.png)" alt="" />
              <div className="bnr-content">
                <h2>
                  <strong>&nbsp; &nbsp; &nbsp;</strong>.
                </h2>
              </div>
            </div> */}
            <div className="search-filter filter-style1">
              <form>
                <div className="input-group">
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  /> */}

                  <input

                    className="form-control"
                    value={location?.name}
                    placeholder={"Lucknow"}
                  />

                  {/* <div className="form-control">
                    <select className="bs-select-hidden">
                      <option>Select Category</option>
                      <option>Construction</option>
                      <option>Corodinator</option>
                      <option>Employer</option>
                      <option>Financial Career</option>
                      <option>Marketing</option>
                      <option>Supporting</option>
                      <option>Teaching</option>
                    </select>
                    
                  </div> */}
                  <div className="input-group-prepend">
                    <button
                      type="button"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="right"
                      data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      className="site-button"

                      onClick={handleEvent}



                    >
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
