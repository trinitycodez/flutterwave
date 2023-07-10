import React, { useState } from 'react';
import org_logo from '../Images/org_logo.png';
import testing from '../Images/Payment_illustrastion.png';

type payComm = React.CSSProperties

// the component
const SectionHeaderNav = () => {
    const [pay, setPay] = useState('none');
    const [show, setShow] = useState(false);
    const payCom:payComm = {
        display: pay
    }

    const payHover = () => {
        setPay('flex');
        setShow(true);
    }
    const payOut = () => {
        setPay('none');
        setShow(false);
    }

    return (
        <nav className="nav-class">
            <div className="nav-content-box org-logo">
                <img src={org_logo} alt="Organisation logo" width="100%" height="100%" />
            </div>
            <div className="nav-content-box">
                <ul className="nav-ULlist-items">
                    <li className='pay' onMouseOver={payHover} onMouseOut={payOut}>
                        <span>Payments</span>
                        {show &&
                        (<ul className='display__pay' style={payCom}>
                            <li>
                                <div className='display__pay__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__pay__text text_pay1'>
                                    <a href="http://">Collect payments</a>
                                    <p>Collect payment in 30+ currencies</p>
                                </div>
                            </li>
                            <li>
                                <div className='display__pay__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__pay__text text_pay2'>
                                    <a href="http://">Send money</a>
                                    <p>Send money to anyone or business globally</p>
                                </div>                                
                            </li>
                            <li>
                                <div className='display__pay__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__pay__text text_pay3'>
                                    <a href="http://">Checkout demo</a>
                                    <p>Experience checkout yourself</p>
                                </div>                                
                            </li>
                        </ul>)}
                    </li>
                    <li className='display__com com'>
                        <span>Commerce</span>
                    </li>
                    <li><a href='https://flutterwave.com/card-issuing'>Issuing</a></li>
                    <li><a href='https://flutterwave.com/capital'>Capital</a></li>
                    <li><a href='https://flutterwave.com/tuition'>Tuition</a></li>
                    <li><a href='https://flutterwave.com/faas'>FaaS</a></li>
                </ul>
            </div>
            <div className="nav-content-box">
                <button id="btn-sign-in"><a href="http://flutterwave.com/login">Sign in</a></button>
            </div>
        </nav>
    )
}

export default SectionHeaderNav