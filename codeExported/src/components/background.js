import React,{useState} from 'react'
import currentImage from '../assets/BACKGROUND/image1.png'
import { BackgroundSliderData } from '../Data/BackgroundData'

const Background = () => {

  const [background, setBackground] = useState(currentImage);
  const [currentBG, setCurrentBG] = useState(0);
  const length = BackgroundSliderData.length;

  const loggit = () => {
    setCurrentBG(currentBG === length - 1 ? 0 : currentBG + 1);
    setBackground(BackgroundSliderData[currentBG === length - 1 ? 0 : currentBG + 1].image)
  }
  
  return (
    <>
        <div className='Background downsize'>
      <img src={background} alt="currentImage" />
    </div>
    <button   className='mybutton' onClick={loggit}>BACKGROUND</button>
    </>

  )
}

export default Background
