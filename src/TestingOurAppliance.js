import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BassURl from './Api/Api';
import parse from 'html-react-parser';
// import './TestingOur.css'

function TestingOurAppliance() {


  const [post, setPost] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    axios.get(`/web-api/top-product`).then((response) => {
      setPost(response.data.data);

    });
  }, []);



  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === 'remove') {
        return <></>;
      }
    },
  };



  return (
    <>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-xl-3'></div>
          <div className='col-lg-9 col-xl-9'>
            <div className='row'>
              <div className='service-page-section'>
                <div className='service-page-list-wrap'>
                  <div className='service-page-info'>
                    <figure>
                      <a href="">
                        <img src="http://3.110.38.250/assets/uploads/category/thumbnail_images/16519221705.png" alt="img-description" />
                      </a>
                    </figure>

                    <div className='ro-btnarea ro-sm-btn'>
                      <button className='ro-pb'><span>ADD TO CART</span> <i classname='fa fa-cart'></i></button>

                    </div>

                  </div>

                  <div className='ro-service-info'>
                    <div className='ro-service-details'>
                      <h4>hello</h4>



                    </div>



                    <div className='ro-servicefeature_star'>
                      <span className='ro-serviceRating_stars'>
                        <span></span>

                      </span>



                      <div className='ro-totalreview'>
                      <span>
                        "4.5"
                      </span>
                      <em>user review</em>

                    </div>



                    </div>

                    <div className='ro-service-description'>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod error nostrum tempore aut ducimus odio excepturi numquam in provident eos magnam dolorum quaerat blanditiis voluptatibus neque aperiam, inventore modi! Esse.</p>

                    </div>




                   













                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>







      {/* wrapper*/}





















    </>
  )
}

export default TestingOurAppliance