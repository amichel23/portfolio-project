import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
    return (
        <div className="footer" >
        <div className='contact-info-bottom'>
        <ul>
            <a className='anchor-bottom' href='https://github.com/amichel23'><li>GitHUB</li>&nbsp;<FontAwesomeIcon icon={brands('github')} />&nbsp;&nbsp;</a>
            <a className='anchor-bottom' href='https://www.linkedin.com/in/alex-michel-876961234'><li>LinkedIn</li>&nbsp;<FontAwesomeIcon icon={brands('linkedin')} />&nbsp;&nbsp;</a>
            <a className='anchor-bottom' href='https://www.facebook.com/alex.michel.39/' ><li>FaceBook</li>&nbsp;<FontAwesomeIcon icon={brands('facebook')} />&nbsp;&nbsp;</a>
        </ul>
        </div>
        <p> © 2022 Alex Michel. All rights reserved.</p>
        </div>
    )
}

export default Footer;