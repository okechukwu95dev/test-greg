import React,{useState} from 'react'
import currentImage from '../assets/DNA/image1.png'
// import ImageSlider from '../common/Components/ImageSlider'
import { DnaSliderData } from '../Data/DnaData'

const Dna = ({toggled}) => {
  const [dna, setDna] = useState(currentImage);
  const [currentDna, setCurrentDna] = useState(0);
  const length = DnaSliderData.length;


  const loggit = () => {
    setCurrentDna(currentDna === length - 1 ? 0 : currentDna + 1);
    setDna(DnaSliderData[currentDna === length - 1 ? 0 : currentDna + 1].image)
  }

  return (
    <>
        <div className='Dna downsize'>
    <img src={dna} alt="currentImage" />
        {/* {
            toggled ?
            <ImageSlider SliderData={DnaSliderData}/>
            :null
        } */}
      
    </div>

    <button  className='mybutton' onClick={loggit}>DNA</button>

    </>

  )
}

export default Dna
