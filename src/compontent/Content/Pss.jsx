import axios from "axios";
import React, { useEffect, useState } from "react";
import "./test.css";

function Pss() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`/web-api/all-shop-category`).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  return (
    <>
     
    </>
  );
}

export default Pss;
