import React, { useState, useContext, ReactNode } from 'react'
import '../../CSS/hamburgerMenuBar.css'

import testing from '../../Images/Payment_illustrastion.png';
import { MenuContext } from '../../App';

type propsType = {
    togglerBox: {
        sPy:boolean,
        sCo:boolean,
        capPay:React.CSSProperties,
        capComm:React.CSSProperties
    }
    payHoverProps:(val:boolean)=> void,
    payOutProps:(val:boolean)=> void
}
// the component
const HamburgerMenuBar = ({togglerBox, payHoverProps, payOutProps}:propsType) => {
    const hamMenuHolder = useContext(MenuContext);
    const {sPy, sCo, capPay, capComm} = togglerBox;

    const [displayMenuCont, setDisplayMenuCont] = useState(false);
    const [transitBar, setTransitBar] = useState('');

    const displayMenu = () => {
        console.log(displayMenuCont)
        setDisplayMenuCont(preValue => !preValue);
        // !transitBar.valueOf() ? setTransitBar('transitBar') : setTransitBar('')
        if (!transitBar.valueOf()) {
            setTransitBar('transitBar');
            document.querySelector(".header-class")!.classList.add('transitBarHMB');
        } else {
            setTransitBar('');
            document.querySelector(".header-class")!.classList.remove('transitBarHMB');
        }
    }

    
    return(
        (hamMenuHolder <= 900) ?
        <React.Fragment>
            {
                (transitBar === "transitBar") &&
                 document.querySelector('.header-class')!.classList.add('transitBarHMB') as ReactNode
            }
            {
                displayMenuCont &&
                <div className='toggle_content_box'>
                    <ul className="nav-ULlist-items">
                        <li className='pay'>
                            <span className='span__pay_text'>PAYMENTS</span>
                            <ul className='display__payCom__toggle' id='pay'>
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
                                    <div className='display__payCom__text text_pay3'>
                                        <a href="http://flutterwave.com/ng/checkout">Checkout demo</a>
                                        <p>Experience checkout yourself</p>
                                    </div>                                
                                </li>
                            </ul>
                        </li>
                        <li className='com'>
                            <span className='span__pay_text'>COMMERCE</span>
                            <ul className='display__payCom__toggle' id='com'>
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
                            </ul>
                        </li>
                        <li><a href='https://flutterwave.com/card-issuing'>Issuing</a></li>
                        <li><a href='https://flutterwave.com/capital'>Capital</a></li>
                        <li><a href='https://flutterwave.com/tuition'>Tuition</a></li>
                        <li><a href='https://flutterwave.com/faas'>FaaS</a></li>
                    </ul>
                    <div className="toggle_content_btn">
                        <button type='button' id="toggle__btn_node"><a href="http://flutterwave.com/login">Sign in</a></button>
                    </div>
                </div>
            }
            <div className='hamburger__menu_bar' onClick={displayMenu}>
                <span className={`bar_span ${transitBar}`}></span>
                <span className={`bar_span ${transitBar}`}></span>
            </div>
        </React.Fragment> :
        <React.Fragment>
            {
                document.querySelector('.header-class')!.classList.remove('transitBarHMB') as ReactNode
            }
            <div className="nav-content-box">
                <ul className="nav-ULlist-items">
                    <li className='pay' onMouseOver={()=>payHoverProps(true)} onMouseOut={()=>payOutProps(true)}>
                        <span>Payments</span>
                        {sPy && (
                        <ul className='display__payCom' style={capPay}>
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
                                <div className='display__payCom__text text_pay3'>
                                    <a href="http://flutterwave.com/ng/checkout">Checkout demo</a>
                                    <p>Experience checkout yourself</p>
                                </div>                                
                            </li>
                        </ul>)
                        }
                    </li>
                    <li className='com' onMouseOver={()=>payHoverProps(false)} onMouseOut={()=>payOutProps(false)}>
                        <span>Commerce</span>
                        { sCo && (
                        <ul className='display__payCom' style={capComm} id='com'>
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
                        </ul>)
                        }
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
        </React.Fragment>
    )
}

export default HamburgerMenuBar
