import { Fragment } from 'react'

import Payment_illustrastion from '../../../images/Payment_illustrastion.png'

// the component
const MainSectTwo = () => {
    return (
        <Fragment>
            <div className='sec-sect-text'>
                <p>
                    Collect payments in minutes, without a line of code
                </p>
            </div>
            <div className="sec-sect-box">
                <div className="sec-sect-text2">
                    <ul>
                        <li>
                            {/* number one step */}
                            <div className="flexText">
                                <div></div>
                                <span className='sec-sect-digits'>1</span>
                                <h6>Create a Flutterwave account</h6>
                            </div>
                            <p>Create a free Flutterwave account if you're a new user or login if you're a registered user.</p>
                        </li>
                        <li id='list_change_hgt'>
                            <div className="flexText">
                                <div></div>
                                <span className='sec-sect-digits'>2</span>
                                <h6>Create a payment link</h6>
                            </div>
                            <p>Sell a product or service, start a subscription. Match the look and feel of your brand by adding your logo and colors.</p>
                        </li>
                        <li>
                            <div className="flexText">
                                <div></div>
                                <span className='sec-sect-digits'>3</span>
                                <h6>Accept payment</h6>
                            </div>
                            <p>Share your payment link, get paid and focus on creating.</p>
                        </li>
                    </ul>
                    <button type='button' className='general_btn btn-sec-sect'><a href='https://flutterwave.com/ng/contact-sales'>Get started</a></button>
                </div>
                <div className='Payment-illustration'>
                    <img src={Payment_illustrastion} alt="Payment illustration" width="100%" height="100%" style={{ borderRadius: '1rem' }} />
                </div>
            </div>

        </Fragment>
    )
}

export default MainSectTwo