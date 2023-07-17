import React from 'react'

import flutterwave from '../../Images/flutterwave_svg.png'

// the component
const MainSectOne = () => {
  return (
    <div>
        <div className="first-sect-text">
            <h4>Get paid, anywhere</h4>
            <p>
              Sell online without a website. Create a payment link in just a few clicks and share the link with your customers—no code required.
            </p>
            <button type='button' className='general_btn btn_first_sect'><a href="http://flutterwave.com/ng/contact-sales">Contact sales</a></button>
        </div>
        <div className="flutterwave-svg">
            <img src={flutterwave} alt="flutterwave-svg" width="100%" height="100%" />
        </div>
    </div>
  )
}

export default MainSectOne