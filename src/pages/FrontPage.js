import React from 'react'
import ReactPlayer from 'react-player'
//import gif from '../images/gif.png'
import tekken8_gif from '../images/tekken8_gif.gif'
import ZoomableImage from './ZoomableImage'
import Reina_Azucena from "../images/reina_Azucena.mp4"

export default function FrontPage() {
  return (
    <>
      <h1>Reina Moves to Use & Avoid Against Certain Characters</h1>
      <section className='container'>
        <h1>Azucena (SSR)</h1>
        <div className='gif-container'>
          <div className='gif-flex'>
          <ReactPlayer 
            url={Reina_Azucena} 
            controls={true} 
            loop={true} 
            width={500} 
            />
            <p>Azucena doing her weird sound, block after low and punish the -15</p>
          </div>
          <div className='gif-flex'>
          <ReactPlayer url={Reina_Azucena} controls={true} loop={true} width={500} />
            <p>Watch out Alisa's Chainsaw shenanigans</p>
          </div>
          <div className='gif-flex'>
          <ReactPlayer url={Reina_Azucena} controls={true} loop={true} width={500} />
            <p>Watch out Alisa's Chainsaw shenanigans</p>
          </div>
        </div>
      </section>

      <section className='container'>
        <h1>Asuka (SSL)</h1>
        <div className='gif-container'>
          <div className='gif-flex'>
          <ZoomableImage src={tekken8_gif} alt="gif of opponent's movements"/>
            <p>Watch out Asuka's Low Kickshenaniganst</p>
          </div>
          <div className='gif-flex'>
          <ZoomableImage src={tekken8_gif} alt="gif of opponent's movements"/>
            <p>Watch out Asuka's Low Kick shenanigans</p>
          </div>
          <div className='gif-flex'>
          <ZoomableImage src={tekken8_gif} alt="gif of opponent's movements"/>
            <p>Watch out Asuka's Low Kick shenanigans</p>
          </div>
        </div>
      </section>

    </>
  )
}
