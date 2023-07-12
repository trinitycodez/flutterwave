import React, { useState } from 'react';
import org_logo from '../Images/org_logo.png';
import testing from '../Images/Payment_illustrastion.png';

type payComm = React.CSSProperties

// the component
const SectionHeaderNav = () => {
    const [pay, setPay] = useState('none');
    const [showPay, setShowPay] = useState(false);
    const [com, setCom] = useState('none');
    const [showCom, setShowCom] = useState(false);

    const Pay:payComm = {
        display: pay
    }
    const Com:payComm = {
        display: com
    }
    const payHover = (val:boolean) => {
        if (val) {
            setPay('flex');
            setShowPay(true);
            return;
        }
        setCom('flex');
        setShowCom(true);
    }
    const payOut = (val:boolean) => {
        if (val) {
            setPay('none');
            setShowPay(false);
            return;
        }
        setCom('none');
        setShowCom(false);
    }

    return (
        <nav className="nav-class">
            <div className="nav-content-box org-logo">
                <img src={org_logo} alt="Organisation logo" width="100%" height="100%" />
            </div>
            <div className="nav-content-box">
                <ul className="nav-ULlist-items">
                    <li className='pay' onMouseOver={()=>payHover(true)} onMouseOut={()=>payOut(true)}>
                        <span>Payments</span>
                        {showPay &&
                        (<ul className='display__payCom' style={Pay}>
                            <li>
                                <div className='display__payCom__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__payCom__text text_pay1'>
                                    <a href="http://flutterwave.com/ng/collect-payments">Collect payments</a>
                                    <p>Collect payment in 30+ currencies</p>
                                </div>
                            </li>
                            <li>
                                <div className='display__payCom__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__payCom__text text_pay2'>
                                    <a href="http://flutterwave.com/ng/send-money">Send money</a>
                                    <p>Send money to anyone or business globally</p>
                                </div>                                
                            </li>
                            <li>
                                <div className='display__payCom__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__pay__text text_pay3'>
                                    <a href="http://flutterwave.com/ng/checkout">Checkout demo</a>
                                    <p>Experience checkout yourself</p>
                                </div>                                
                            </li>
                        </ul>)}
                    </li>
                    <li className='com' onMouseOver={() => payHover(false)} onMouseOut={() => payOut(false)}>
                        <span>Commerce</span>
                        {showCom &&
                        (<ul className='display__payCom' id='com' style={Com}>
                            <li>
                                <div className='display__payCom__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__payCom__text text_pay1'>
                                    <a href="http://flutterwave.com/ng/store">Store</a>
                                    <p>Start selling online.</p>
                                </div>
                            </li>
                            <li>
                                <div className='display__payCom__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__payCom__text text_pay2'>
                                    <a href="http://flutterwave.com/ng/payment-links">Payment Links</a>
                                    <p>Accept payments wihtout writing code.</p>
                                </div>                                
                            </li>
                            <li>
                                <div className='display__payCom__img'>
                                    <img src={testing} alt="" width='100%' height='100%' />
                                </div>
                                <div className='display__payCom__text text_pay3'>
                                    <a href="http://flutterwave.com/ng/invoices">Invoices</a>
                                    <p>Create professional invoices.</p>
                                </div>                                
                            </li>
                        </ul>)}
                    </li>
                    <li><a href='https://flutterwave.com/card-issuing'>Issuing</a></li>
                    <li><a href='https://flutterwave.com/capital'>Capital</a></li>
                    <li><a href='https://flutterwave.com/tuition'>Tuition</a></li>
                    <li><a href='https://flutterwave.com/faas'>FaaS</a></li>
                </ul>
            </div>
            <div className="nav-content-box">
                <button type='button' id="btn-sign-in"><a href="http://flutterwave.com/login">Sign in</a></button>
            </div>
        </nav>
    )
}

export default SectionHeaderNav