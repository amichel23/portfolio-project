import React from 'react';
import Image from './images/logos/mernstack.png';
import Design from './images/logos/web-design.png';
import Develop from './images/logos/developer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Body = () => {
    return (
        <div className='body'>
            <div className='body' >
                <img className='body-img' src={Image} alt='mern' /> 
                <h2>Hello there.</h2>
                <p>I'm a Full-Stack Developer based in Perry, Georgia. I primarily work in the MERN Stack, but I have been exposed to many different programs. I attended The Skillspire bootcamp and I am currently attending Eastern University, working towards a MS in Data Science. I have a passion for software engineering and learning everything that I can!</p>
            </div>
            <h1>What I can do.</h1>
            <hr></hr>
            <div className='body-skills' >
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('html5')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('css3')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('js')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('bootstrap')} /> </div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('node')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('react')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('aws')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('docker')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('git')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('digital-ocean')} /></div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('python')} /> </div>
                <div className='body-skills-content'><FontAwesomeIcon icon={brands('mailchimp')} /> </div>
            </div>
            <hr></hr>
            <div className='body-bottom'>
            <div className='body-design' >
                <div className='body-design-img'> 
                    <img src={Design} alt='design' />
                </div>
                <div className='body-design-content' >
                    <h2>Design what you want.</h2>
                    <p>I have an array of skills to convey the message you want to send.</p><br></br><br></br>
                </div>
                
            </div>
            <div className='body-develop' >
                <div className='body-develop-content' >
                    <h2>Develop what you need.</h2>
                    <p>I am a developer, so I know how to create your website, and enable it to run across different devices.</p>
                </div>
                <div className='body-develop-img' >
                    <img src={Develop} alt='develop' />
                </div>
            </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Body;