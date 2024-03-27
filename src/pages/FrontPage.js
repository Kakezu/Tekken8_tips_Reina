import React from 'react'
import gif from '../images/gif.png'

export default function FrontPage() {
  return (
    <>
      <h1>Reina Moves to Use & Avoid Against Certain Characters</h1>
      <section className='container'>
        <h1>Alisa (SSL)</h1>
        <div className='gif-container'>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Alisa's Chainsaw shenanigans</p>
          </div>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Alisa's Chainsaw shenanigans</p>
          </div>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Alisa's Chainsaw shenanigans</p>
          </div>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Alisa's Chainsaw shenanigans</p>
          </div>
        </div>
      </section>

      <section className='container'>
        <h1>Asuka (SSL)</h1>
        <div className='gif-container'>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Asuka's Low Kickshenaniganst</p>
          </div>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Asuka's Low Kick shenanigans</p>
          </div>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Asuka's Low Kick shenanigans</p>
          </div>
          <div className='gif-flex'>
            <img className="gif-image" src={gif} alt="gif of opponent's movements"/>
            <p>Watch out Asuka's Low Kick shenanigans</p>
          </div>
        </div>
      </section>

    </>
  )
}
