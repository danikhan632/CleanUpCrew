import React, { useState,useEffect } from "react"
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
function picture(imageurl) {
  return (
    <LazyLoadImage 
            width="100%"
            height="auto"
            src={imageurl} />
  )
}

export default picture;