import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import ImageGrid from './ImageGrid';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas'

import { VisionSliderData } from '../../Data/VisionData';
import { BackgroundSliderData } from '../../Data/BackgroundData';
import { DnaSliderData } from '../../Data/DnaData';

import customise from '../../assets/Images/customise.svg'

export default function Canvas () {

  //ALL STATES
  const globalVision = useSelector((state) => state.vision.currentVision);
  const globalBackground = useSelector((state) => state.background.currentBackground);
  const globalDna = useSelector((state) => state.dna.currentDna);



  const [currentHistory, setCurrentHistory] = useState([]);
  const [tempArray, setTempArray] = useState([]);




  function SaveCurrentCanvas(){

    let count = document.getElementById('previewSection').childNodes.length+1
    console.log(count)

    let element = document.getElementById('photo');
    html2canvas(element).then(
        (canvas) => {
          const dataURL = canvas.toDataURL('image/png');

          //initilaise button image and container
          let container = document.createElement('div');
          let anchor =document.createElement('img');
          let button = document.createElement('button');

          // add attributes

          //image
          anchor.src= dataURL;    anchor.setAttribute('class','previewImages')
          anchor.setAttribute('id','previewImage'+count)
       

          //button 
          button.setAttribute('id',count)
          button.innerHTML = "Download!"
          button.addEventListener('click',(event)=>{
            console.log(event.target)
            let currentId= event.target.id
            console.log(currentId)
            let currentImage = document.getElementById('previewImage'+currentId)
            downloadjs(currentImage.src, 'download.png', 'image/png');
          
          })

          //container
          container.setAttribute('id','previewContainer')
          container.appendChild(button)
          container.appendChild(anchor)

          document.getElementById('previewSection').prepend(container);
      })  

  }
  
  return (
    <>
    <div className= "Container ">
      <section className = "TopSection">
        <h1 id = "Title"> CUSTOMISE </h1>
        <p>
        Holders will be able to change their character outfits 
        and generate new pfps. To start customising 
        verify your token by connecting your wallet, 
        What is your token id?
        </p>
      </section>
      <section className = "BottomSection">
        <div className = "buttons BSS">
          <h1>LAST 3 CHARACTERS</h1>
          <button onClick={SaveCurrentCanvas}>Save</button>
          <div id='previewSection'>
          </div>      
         <div> 
        </div>
        </div>
        <div className = "Canvas BSS" >
            <div id="output"></div>
            <div id="photo" >
              <img src={globalBackground} alt="currentImage" className='Background downsize' />
              <img src={globalDna} alt="currentImage" className='Dna downsize' />
              <img src={globalVision} alt="currentImage" className='Vision downsize' />
            </div>
        </div>

        <div className = "Controls BSS">
          <ImageGrid 
            dataArray={DnaSliderData.data}
            name={DnaSliderData.name}
          />

          <ImageGrid 
            dataArray={BackgroundSliderData.data}
            name={BackgroundSliderData.name}
          />

          <ImageGrid 
            dataArray={VisionSliderData.data}
            name={VisionSliderData.name}
          />
        </div>
      </section>
    </div>
    </>
  );
}
