import React from 'react';
import Image from './images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Header = () => {
    return (
        <div>
            <nav>
                <div className='top-container'>
                <img src={Image} alt="logo" />
                <h1>I'm Alex</h1>
                <p>a web developer.</p>
                </div>
                <div className='contact-info'>
                    <ul>
                        <a className='anchor' href='https://www.linkedin.com/in/alex-michel-876961234'><li>LinkedIn</li>&nbsp;<FontAwesomeIcon icon={brands('linkedin')} />&nbsp;&nbsp;</a>
                        <a className='anchor' href='https://github.com/amichel23'><li>GitHUB</li>&nbsp;<FontAwesomeIcon icon={brands('github')} />&nbsp;&nbsp;</a>
                        <a className='anchor' href='https://www.facebook.com/alex.michel.39/' ><li>FaceBook</li>&nbsp;<FontAwesomeIcon icon={brands('facebook')} />&nbsp;&nbsp;</a>
                    </ul>
                    <hr></hr>
                </div>
            </nav>
        </div>
    )
}

export default Header;