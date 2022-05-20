import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function IconSkeleton() {
  const [posets, setPosets] = useState(null);

  useEffect(() => {
    axios.get(`/web-api/all-service-category`).then((response) => {
      setPosets(response.data.data);
    });

    // axios.get(`/web-api/all-shop-category`).then((response) => {
    //   setPost(response.data.data);
    // });
  }, []);

  return (
    <>
      <SkeletonTheme
        baseColor="#c0e8ff"
        highlightColor="rgb(93 160 241 / 38%)"
        borderRadius="0.5rem"
        duration={2}
      >
        {posets?.map((data, index) => {
          return (
            <>
              <div  style={{    marginTop: "30px"}}>
                <a
                style={{marginRight:"180px"}}
                 
               
                
                 
                >
                  <Skeleton height={"120px"} width={"165px"} />
                 
                  &nbsp;
                </a>
              </div>
            </>
          );
        })}
      

       
      </SkeletonTheme>
    </>
  );
}

export default IconSkeleton;
