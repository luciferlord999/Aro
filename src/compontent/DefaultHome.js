import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";

import Banner from "./Content/Banner";
import Content from "./Content/Content";
// import Footer from "./Footer/Footer";
import CartItem from "../compontent/CartItem";
import { useStateValue } from "./StateProvider";
import CartItemsAp from "./CartItemsAp";
import CartItemsAir from "../Pages/CartItemsAir";
import Pss from "./Content/Pss";
import Footers from "../Pages/ProductDetails/Footers";
import LoadingBox from "../compontent/LoadingBox";
import SkeletonOurApp from "../Skeleton/SkeletonOurApp";
import axios from "axios";
import { API_key } from "../Api/Api";
import { API_endpoint } from "../Api/Api";
import Error from "../Pages/Error";
import Home from "./Home";

function DefaultHome() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitutde] = useState("");
    const [location, sectLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.watchPosition((position) => {
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
            });
    }, [latitude, longitude]);

    return (
        <>
            {location?.name == "Lucknow" ? (
                <>
                    <Home />
                </>
            ) : (
                // <div>
                //   <h1>hello</h1>
                //   <h1></h1>
                // </div>
                <>
                    <Navbar />
                    <Banner   />
                    {/* <Error/> */}
                    
                    <div className="section-full content-inner-2" style={{marginTop:"120px"}}>
                        <div className="container">
                            <div className>
                                <div className="error-page">
                                    <span className="error-no animate-character">PLEASE ALLOW YOUR LOCATION</span>
                                    <span className="error-title text-center">
                                        WE <br /> ARE  <br />  NOW IN LUCKNOW
                                    </span>
                                </div>
                                <div className="error-page-search"></div>
                            </div>
                        </div>
                    </div>











                    <Footers />
                </>
            )}
        </>
    );
}

export default DefaultHome;
