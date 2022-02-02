import React from 'react';
import './Mainview.css';

function Mainview() {

  (() => {
    document.title = 'Felipe Layos'
  })()

  return (
    <main className='main'>
      <h2 className='main-title'>Hello World! 🙂</h2>
      <a href="https://medium.com/@jfelipelayos/from-0-to-software-developer-job-my-story-95a30e6fd6f5" className='main-story' target='_blank' rel='noreferrer'>Read my full story</a>
      <br /><br />
      <p className='main-paragraph'>
        Most of my friends call me <strong>Layos</strong>, but my full name is Juan Felipe Rodriguez. I was born in a town
        in Colombia called Urrao, but all my life I have lived in <strong>Medellin</strong>, the capital of the region,
        city that I love btw. It was here where my <strong>passion for technology</strong> started when with my friends we
        used to open all kinds of electronic devices and put them back together trying to make them work again (most
        of the time they didn't come back to life) but that led me to study <strong>software development</strong> in
        different places like university, bootcamps and on my own. Since then I have focused on building fast,
        scalable, accessible, and responsive web applications using modern technologies.
      </p>
    </main>
  )
}

export default Mainview;