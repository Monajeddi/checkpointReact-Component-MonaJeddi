import React from 'react'
import userImage from '../assets/image.jpg';

const Photo = () => {
    return (
        <div>
  <img src={userImage} className="image" alt="PhotodeProfil" height="200"/>
        </div>
    )
}
export default Photo