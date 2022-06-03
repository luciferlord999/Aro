import React, { useState, useEffect } from "react";

function Caro() {
  const [banner, setBanner] = useState([]);

  // Banner Api call

  useEffect(() => {
    const getbanner = async () => {
      const res = await fetch("http://3.110.38.250/web-api/banner", {
        method: "GET",
        mode: "cors"
      });
      const getbanner = await res.json();

      setBanner(await getbanner);

    };
    getbanner();
  }, []);


  



  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel" 
       
      >
        <div className="carousel-inner  shadow-lg p-3 mt-5 bg-white rounded  ">
          {banner.code == 200
            ? banner.data.map((ban, index) => {

              return (
                <div
                  key={index}
                  className={
                    index == 0 ? "carousel-item active" : "carousel-item "
                  }
                >
                  <img
                    className="d-block w-100"
                    src={"http://3.110.38.250/" + ban.banner_url}
                    alt="First slide"

                    style={{ height: "500px" }}


                  />
                </div>
              );
            })
            : banner.msg}
        </div>
      </div>
    </>
  );
}

export default Caro;
