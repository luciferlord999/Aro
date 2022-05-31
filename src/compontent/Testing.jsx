import React from 'react'

function Testing() {
  return (
   <>
    <div className="content-block">
        <div
          className="category-bx  bg-white shadow-lg p-3 mb-5 bg-white rounded"
          style={{ marginTop: "160px", height: "220px" }}
        >
          {!loader ? (
            posets?.map((get, index) => {
              return (
                <>
                  <a
                    href="listing-left-sidebar.html"
                    className="category"
                    key={index}
                  >
                    <img src={BassURl + get.service_img} alt="" />
                    <p>{get.service_title}</p>
                  </a>
                </>
              );
            })
          ) : (
            <IconSkeleton />
          )}
        </div>
        {/* Featured Destinations */}
        <div className="section-full bg-white mt-10 content-inner shadow-lg p-3 mb-5 bg-white rounded">
          <div className="container ">
            <div
              className="section-head text-black text-center "
              style={{ marginTop: "35px" }}
            >
              <h2 className="box-title"> OUR SERVICE </h2>
              <div className="dlab-separator bg-primary" />
            </div>
            <ServiceSlider />
          </div>
        </div>
        {/* Featured Destinations End */}
        {/* Our Services */}

        <OurAppliance />

        {/* <Appliances/> */}

        {/* Our Services */}
        {/* Why Choose Us */}

        {/* Why Chose Us End */}
        {/* Our Portfolio */}

        {/* Our Portfolio END */}
        {/* Featured Destinations */}
        <Products />

        {/* Featured Destinations End */}
        <Caro />

        {/* Featured Destinations */}

        {/* Featured Destinations End */}
      </div></>
  )
}

export default Testing