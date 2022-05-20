import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

const ScrollTop = () => {
      const{  y : pageYOffset} = useWindowScroll();
      const [visible , setVisiblity]=useState(false);

      useEffect(() => {
            if(pageYOffset >400){
                  setVisiblity(true);

            }else{ 
                  setVisiblity(true);

            }
            return () => {
                  setVisiblity(false);
            };
      }, [pageYOffset]);

      const scrollToTop=()=> window.scrollTo({top:0, behavior:"smooth"})










      if(!visible){

            return false;

      }
  return (
    <div className='scroll-top cursor-pointer text-center'>
      
    </div>
  )
}

export default ScrollTop

