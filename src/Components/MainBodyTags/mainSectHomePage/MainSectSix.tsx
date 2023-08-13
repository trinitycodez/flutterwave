import { useState, useEffect, useRef, useContext, MouseEvent } from 'react'
import { SlideCardContext } from '../../../App';
import network from '../../../svgs/network.svg'
import masterCardLogo from '../../../svgs/masterCardLogo.svg'


const MainSectSix = () => {
    const {slideCard, setWidth} = useContext(SlideCardContext);
    
    const [hovClk, setHovClk] = useState(slideCard);
    const [hovClk2, setHovClk2] = useState(slideCard);
    const refAnimate = useRef<HTMLDivElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null);
    const hoverRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let hold:NodeJS.Timer;
        if (refAnimate) { 
            hold = setInterval(()=>{
              const held = refAnimate.current?.firstElementChild! as HTMLDivElement;
              refAnimate.current?.append(held);
            }, 3000);                
        }
        return () => {
            clearInterval(hold);
        }

    }, [refAnimate])

    // mouseover and onclick
    useEffect(() => {
        hoverRef.current!.classList.remove("__transformSliderTwo");
        if ((setWidth > 600)) {
            (hovClk) ? hoverRef.current!.classList.add("__transformSliderTwo") : hoverRef.current!.classList.remove("__transformSliderTwo");
        }
      
    }, [hovClk, setWidth])
    
    useEffect(() => {        
        hoverRef2.current!.classList.remove("__transformSliderThree");
        if ((setWidth > 600)) {
            (hovClk2) ? hoverRef2.current!.classList.add("__transformSliderThree") : hoverRef2.current!.classList.remove("__transformSliderThree");
        }
      
    }, [hovClk2, setWidth])
    
    // mouseover, mouseout and onclick function
    const action = (e:MouseEvent) => {
        e.stopPropagation()
        switch (e.type) {
            case "click":
            case "mouseover": setHovClk(true); break; 
            case "mouseout": setHovClk(false); break;
            default:
                break;
        }
    }
    const action2 = (e:MouseEvent) => {
        e.stopPropagation()
        switch (e.type) {
            case "click":
            case "mouseover": setHovClk2(true); break; 
            case "mouseout": setHovClk2(false); break;
            default:
                break;
        }
    }
  return (
    <div className="sixth_section__cont">
        <div className="heading__rH">
            <h2>Create physical and  virtual <span>cards</span></h2>
            <p>
                Issue physical and virtual cards that work globally. Create, launch, and manage your cards easily from anywhere.
            </p>
            <button className='sect__one_genBtn GSWC__btn'>
                <a href="http://flutterwave.com/ng/card-issuing">Get started with cards</a>
            </button>
        </div>
        <div className="animate__cont_rH" ref={refAnimate}>
            <div className="animate_stacked__atm">
                <div className="card__head_rH">
                    <img src={network} alt="network" width="100%" height="100%" />
                </div>
                <div className="acct__nameNum_rH">
                    <p className="card__AcctNum_rH">4515-2454-3210-3251</p>
                    <div className="card__name_logo_rH">
                        <div className="name__rH"><span>John Doe</span></div>
                        <div className="logo__rH">
                            <img src={masterCardLogo} alt="" width='100%' height='100%' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate_stacked__atm">
                <div className="card__head_rH">
                    <img src={network} alt="network" width="100%" height="100%" />
                </div>
                <div className="acct__nameNum_rH">
                    <p className="card__AcctNum_rH">5215-2454-1410-9351</p>
                    <div className="card__name_logo_rH">
                        <div className="name__rH"><span>Olowoyori Emmanuel</span></div>
                        <div className="logo__rH">
                            <img src={masterCardLogo} alt="" width='100%' height='100%' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate_stacked__atm">
                <div className="card__head_rH">
                    <img src={network} alt="network" width="100%" height="100%" />
                </div>
                <div className="acct__nameNum_rH">
                    <p className="card__AcctNum_rH">4515-2854-1410-1251</p>
                    <div className="card__name_logo_rH">
                        <div className="name__rH"><span>Ezekiel Sam</span></div>
                        <div className="logo__rH">
                            <img src={masterCardLogo} alt="" width='100%' height='100%' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate_stacked__atm">
                <div className="card__head_rH">
                    <img src={network} alt="network" width="100%" height="100%" />
                </div>
                <div className="acct__nameNum_rH">
                    <p className="card__AcctNum_rH">5215-2454-1410-9351</p>
                    <div className="card__name_logo_rH">
                        <div className="name__rH"><span>Caleb Favour</span></div>
                        <div className="logo__rH">
                            <img src={masterCardLogo} alt="" width='100%' height='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="endless_ads_cont__rH">
            <div className="heading__rH">
                <h2>Endless payment possibilities for every <span>individual</span></h2>
                <p>
                    Flutterwave offers a host of seamless products for individuals, ensuring smooth transactions and efficient money management.
                </p>
            </div>
            <div className="slider__class_rH">
                <div className="slider__ads_cards_rH">
                    <div className="slide_obj" onClick={action} onMouseOver={action} onMouseOut={action}>
                        <h6 className="heading_ads_home__rH">Send money to loved ones</h6>
                        <p className="para_ads_home__rH">
                            Experience the convenience and security of Send, enabling you to effortlessly and securely transfer funds to your beloved ones residing overseas. Begin sharing financial support with the ones who hold significance in your life right <a href='https://send.flutterwave.com'><span>here</span></a>
                        </p>
                    </div>
                    <div className="slide_obj" ref={hoverRef} onClick={action2} onMouseOver={action2} onMouseOut={action2}>
                        <h6 className="heading_ads_rH">Shop online</h6>
                        <p className="para_ads_home__rH">
                            Explore a world of possibilities as you Discover, Shop, and have your purchases conveniently delivered from your cherished online businesses. Embark on a secure shopping journey and relish the joy of acquiring great items from amazing small businesses, right <a href="https://flutterwave.market">here</a>
                        </p>
                    </div>
                    <div className="slide_obj" ref={hoverRef2}>
                        <h6 className="heading_ads_rH">Find events and Buy tickets</h6>
                        <p className="para_ads_home__rH">
                            Browse upcoming events and secure your ticket on our Afriticket platform <a href="https://afritickets.events">here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSectSix