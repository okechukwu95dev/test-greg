import React,{useState} from 'react'
import currentImage from '../assets/VISION/image1.png'
import { VisionSliderData } from '../Data/VisionData'

// redux functions
import { useSelector, useDispatch } from 'react-redux'
import { setGlobalVision } from '../Redux/Features/VisionSlice'


const Vision = () => {


  //INITIAL STATE AND SLIDER FUNCTIONS
  const [vision, setVision] = useState(currentImage);
  const [currentVision, setCurrentVision] = useState(0);
  const length = VisionSliderData.data.length;

  //REDUX FUNCTIONS 
  const globalVision = useSelector((state) => state.vision.currentVision)
  const dispatch = useDispatch()
  const setGlobalState = () =>{
    dispatch(setGlobalVision(vision))
  }



  // FUNCTION TO CHANGE ON CLICK
  const loggit = () => {
    setCurrentVision(currentVision === length - 1 ? 0 : currentVision + 1);
    setVision(VisionSliderData.data[currentVision === length - 1 ? 0 : currentVision + 1].image)
    dispatch(setGlobalVision(vision))
    console.log(globalVision)
    
    console.log(globalVision)
  }
  return (
    <>
      <div className='Vision downsize'>
        <img src={vision} alt="currentImage" />
      </div>

    <button className='mybutton' onClick={loggit}>VISION</button>
    </>
  )
}

export default Vision
