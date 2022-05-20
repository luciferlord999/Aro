import React from 'react'
import SkeletonOurApp from './SkeletonOurApp'

function SkeletonOurAppWrap(props) {
  return (

      <>
            <div className='skeleton-wrapper'>
                  <SkeletonOurApp type="thumbnail"/>
            </div>
      </>
   
  )
}

export default SkeletonOurAppWrap