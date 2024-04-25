import React from 'react'
import ReactPlayer from 'react-player'
import placeholder_video from "../images/placeholder_video.png"
import Reina_Azucena from "../images/reina_Azucena.mp4"
import Reina_Law from "../images/Reina_v_Law.mp4"
import Reina_Law2 from "../images/Reina_v_Law2.mp4"
import Reina_Leroy from "../images/Reina_v_Leroy.mp4"
import Reina_Leroy2 from "../images/Reina_v_Leroy2.mp4"
import Reina_Raven from "../images/Reina_v_Raven.mp4"

export default function FrontPage() {
  return (
    <>
      <h1>Tekken 8 Punishment Guide</h1>
      <p>In this page I will use Reina to punish different opponents but all the situations are applicable to every character in Tekken 8.</p>
      <section className='container'>
        <h1>Azucena (SSR)</h1>
        <div className='mp4-container'>
          <div className='mp4-flex'>
          <ReactPlayer 
            url={Reina_Azucena} 
            controls={true} 
            loop={true} 
            width={500} 
            height={285}
            />
            <p>Azucena doing her weird sound, block after low and punish the -15</p>
          </div>
          <div className='mp4-flex'>
          {/* <ReactPlayer url={Reina_Azucena} controls={true} loop={true} width={500} height={285} /> */}
          <img className='placeholder_video' src={placeholder_video} alt="placeholder"/>
            <p>TBD</p>
          </div>
          <div className='mp4-flex'>
          {/* <ReactPlayer url={Reina_Azucena} controls={true} loop={true} width={500} height={285} /> */}
          <img className='placeholder_video' src={placeholder_video} alt="placeholder"/>
            <p>TBD</p>
          </div>
        </div>
      </section>

      <section className='container'>
        <h1>Law (SSR)</h1>
        <div className='mp4-container'>
        <div className='mp4-flex'>
          <ReactPlayer url={Reina_Law} controls={true} loop={true} width={500} height={285} />
            <p>Law's 3+4, 4 is launch punishable by crouching</p>
          </div>
          <div className='mp4-flex'>
          <ReactPlayer url={Reina_Law2} controls={true} loop={true} width={500} height={285} />
            <p>Law's d2+3 is -15 and launch punishable</p>
          </div>
          <div className='mp4-flex'>
          <img className='placeholder_video' src={placeholder_video} alt="placeholder"/>
            <p>TBD</p>
          </div>
        </div>
      </section>

      <section className='container'>
        <h1>Leroy (SSL)</h1>
        <div className='mp4-container'>
        <div className='mp4-flex'>
          <ReactPlayer url={Reina_Leroy} controls={true} loop={true} width={500} height={285} />
            <p>Leroy's b2,2 is -15 and launch punishable</p>
          </div>
          <div className='mp4-flex'>
          <ReactPlayer url={Reina_Leroy2} controls={true} loop={true} width={500} height={285} />
            <p>Watch out Leroy's db3+4. Especially after Reina's ff+2</p>
          </div>
          <div className='mp4-flex'>
          <img className='placeholder_video' src={placeholder_video} alt="placeholder"/>
            <p>TBD</p>
          </div>
        </div>
      </section>

      <section className='container'>
        <h1>Raven (SSL)</h1>
        <div className='mp4-container'>
        <div className='mp4-flex'>
          <ReactPlayer url={Reina_Raven} controls={true} loop={true} width={500} height={285} />
            <p>Raven's soulzone + 1, 4 is -14</p>
          </div>
          <div className='mp4-flex'>
          <img className='placeholder_video' src={placeholder_video} alt="placeholder"/>
            <p>TBD</p>
          </div>
          <div className='mp4-flex'>
          <img className='placeholder_video' src={placeholder_video} alt="placeholder"/>
            <p>TBD</p>
          </div>
        </div>
      </section>

    </>
  )
}
