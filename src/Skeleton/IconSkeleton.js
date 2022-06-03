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
        // baseColor="#606269"
        // highlightColor="rgb(93 160 241 / 38%)"
        borderRadius="0.5rem"
        duration={2}
      >
        {posets?.map((data, index) => {
          return (
            <>
              <div  style={{    marginTop: "30px"}}>
                <a
                style={{marginRight:"175px"}}
                 
               
                
                 
                >
                  <Skeleton height={"95px"} width={"170px"} />
                 
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
