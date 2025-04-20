import React from 'react'
import './GalleryItem.css'

const GalleryItem = ({item}) => {
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
      <img src={item.media} alt="" />
    </div>
  )
}

export default GalleryItem
