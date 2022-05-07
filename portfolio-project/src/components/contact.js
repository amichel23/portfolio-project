import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import {Link} from 'react';


const Contact = () => {
    
    return (
        <div className="contact" >
        <hr></hr>
            <h2>I can help.</h2>
            <h3>I am current available for freelance work, internships, and employment.</h3>
            <p>If you have a project that you want to get started, think you may need my help with something fancy, or just want to get in touch...</p>
            <button onClick={() => Link.openURL('mailto:lexmichel2014@gmail.com?subject=SendMail&body=Description') }
              title="support@example.com"><FontAwesomeIcon icon={regular('envelope')} /> MESSAGE ME </button>
        </div>
    )
}

export default Contact;