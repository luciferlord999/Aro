import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BassURl from './Api/Api';
// import './TestingOur.css'

function TestingOurAppliance() {
  const [post, setPost] = useState(null);



  useEffect(() => {
    axios.get(`/web-api/all-shop-category`).then((response) => {
      setPost(response.data.data);

    });



    // axios.get(`/web-api/all-shop-category`).then((response) => {
    //   setPost(response.data.data);
    // });
  }, []);
  return (
    <>


      <div className="containertr">
        {
          post?.map((data, index) => {
            return (
              <>
                <div className="cardtr">
                  <div className="card-headertr">
                    <img src={BassURl + data?.image} alt="user" />
                  </div>
                  <div className="card-bodytr">


                    <h5 className='Heading-6' style={{ textTransform: " uppercase" }}>
                      {data?.category_title}
                    </h5>




                    <div className="usertr">
                     &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; 
                      <div className="user-infotr">
                        <a href="/our-apliances/air-purifier">View </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })

        }


      </div>

      {/* wrapper*/}





















    </>
  )
}

export default TestingOurAppliance