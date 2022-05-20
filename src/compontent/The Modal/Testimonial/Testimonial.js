import React from "react";

function Testimonial() {
  return (
    <>
      {/* Our Portfolio */}
      <div className="section-full content-inner bg-gray shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="box-title">WHAT OUR USERS SAY</h2>
            <div className="dlab-separator bg-primary" />
          </div>

          <div className="container">
            
            <div className="row">
              <div className="col-lg-4">
                <div className="single-choose-right shadow-sm mb-5 bg-white rounded ">
                  <i className="fa fa-thumbs-up" />
                  <h3>Service Reliability</h3>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eir mod tempor invidunt ut labore et.
                  </p>
                </div>
                <div className="single-choose-right shadow-sm mb-5 bg-white rounded">
                  <i className="flaticon-refresh" />
                  <h3>Flexibility</h3>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eir mod tempor invidunt ut labore et.
                  </p>
                </div>
                
              </div>
              <div className="col-lg-4">
                <div
                  className="choose-image"
                  style={{
                    backgroundImage:
                      "url(/images/d.png )",
                  }}
                >
                  <div className="square-shape">
                    <img
                      src="https://themes.envytheme.com/tycon/wp-content/themes/tycon/assets/images/choose/shape.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-choose-left shadow-sm  mb-5 bg-white rounded">
                  <i className="flaticon-slider-tool" />
                  <h3>Quality Control</h3>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eir mod tempor invidunt ut labore et.
                  </p>{" "}
                </div>
                <div className="single-choose-left shadow-sm  mb-5 bg-white rounded">
                  <i className="flaticon-user-1" />
                  <h3>Staff, You'll Like</h3>
                  <p className="p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eir mod tempor invidunt ut labore et.
                  </p>{" "}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Portfolio END */}
      {/* <!-- Online Community -->
			<div class="section-full bg-white content-inner-2 bg-img-fix overlay-black-dark owl-out" style="background-image:url(images/background/bg1.jpg); background-position: left bottom;">
                <div class="container">
					<div class="section-head text-center text-white">
						<h2 class="box-title">What Our Users Say</h2>
						<div class="dlab-separator bg-primary"></div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<div class="row">
								<div id="owl-demo" class="testimonial-one owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3 btn-white owl-dots-primary-big style-2">
									<div class="item">
										<div class="testimonial-2 testimonial-bg">
											<div class="testimonial-text">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
											</div>
											<div class="testimonial-detail clearfix">
												<div class="testimonial-pic quote-left radius shadow"><img src="images/testimonials/pic1.jpg" width="100" height="100" alt=""></div>
												<strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Client</span> 
											</div>
										</div>
									</div>
									<div class="item">
										<div class="testimonial-2 testimonial-bg">
											<div class="testimonial-text">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
											</div>
											<div class="testimonial-detail clearfix">
												<div class="testimonial-pic quote-left radius shadow"><img src="images/testimonials/pic2.jpg" width="100" height="100" alt=""></div>
												<strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Client</span> 
											</div>
										</div>
									</div>
									<div class="item">
										<div class="testimonial-2 testimonial-bg">
											<div class="testimonial-text">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
											</div>
											<div class="testimonial-detail clearfix">
												<div class="testimonial-pic quote-left radius shadow"><img src="images/testimonials/pic3.jpg" width="100" height="100" alt=""></div>
												<strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Client</span> 
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Online Community End --> */}
    </>
  );
}

export default Testimonial;
