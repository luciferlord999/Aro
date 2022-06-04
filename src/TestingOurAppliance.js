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


      <div className="containertr">
        {
          post?.map((data, index) => {
            return (
              <>
                <div className="cardtr">
                  <div className="card-headertr">
                    <img src={BassURl + data?.product_image} alt="user" />
                  </div>
                  <div className="card-bodytr">






                    <div className='item-details'>


                      <div className='item-title'>
                        <h5 className='Heading-7 product-names' style={{ textTransform: " uppercase" }}>
                          {data?.product_title}
                        </h5>










                      </div>
                      <div className="rate">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half" />
                        <i className="font-small ml-1 text-muted">
                          (4.0)
                        </i>
                      </div>




                      <div className='items-action'>

                        <div className='rate'>

                          <span className='rupee remove-before'>
                            <span style={{ fontSize: "14px" }}>MRP:{data.product_price
                              .toString()
                              .replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                              )}</span>
                          </span>

                        </div>

                        <div className='action-add'>


                          <div className='action-slider'>
                            <button className='add-to-carts addCartBtn-home' data-cat="TOP TRENDING PRODUCT"
                              data-base_amt={data?.product_price} data-text={data?.product_title}>
                              Add To Cart


                            </button>
                          </div>







                        </div>



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