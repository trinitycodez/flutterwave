import React from 'react'

import footCity from '../Images/footCity.png'
import famasi from '../Images/Famasi.png'
import uber from '../SVGs/uber.svg'
import mtn from '../SVGs/mtn.svg'
import chipperCash from '../SVGs/chipperCash.svg'
import piggyVest from '../SVGs/piggyVest.svg'
import wise from '../SVGs/wise.svg'
import microsoft from '../SVGs/microsoft.svg'

const MainHomeTag = () => {
  return (
    <React.Fragment>
        <section className="all-sect first_section__class" id='first-sect'>
            <div className="sect__one_home">
                <div className='sect__one__cont'>
                    <h1 className='heading__one'><span>Endless possibilities</span> for every business</h1>
                    <p>
                        Sell online, process payments, build financial products, or use business tools designed to grow your business.
                    </p>
                    <div className="btn__mH">
                        <button type='button' className='sect__one_genBtn CA__btn'>
                            <a href="http://">Create a free account</a>
                        </button>
                        <button type='button' className='sect__one_genBtn CS__btn'>
                            <a href="http://">Contact sales</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section className="all-sect second_section__class" id="second-sect">
            <div className="sect__one_btn_img">
                <div className="two__boxes_mH first_box_mH">                       
                    <figure className="image__mH">
                        <img src={footCity} alt="" width="100%" height="100%" />
                        <figcaption className='figCap__foodcity'>Food city</figcaption>
                    </figure>
                </div>
                <div className="two__boxes_mH second_box_mH">
                    <figure className="image__nH">
                        <img src={famasi} alt="" width="100%" height="100%" />
                        <figcaption className='figCap__famasi'>Famasi</figcaption>
                    </figure>
                    <p className="text__nH">
                        It's not the size of the company, it's the size of the ambition. Ambitious businesses of all sizes count on Flutterwave to grow their business everywhere.
                    </p>
                </div>
            </div>
        </section>
        <section className="all-sect third_section__class" id="third-sect">
            <div className="third_section__cont">
                <div className="business__para_oH">
                    <p>We are trusted by <strong>1 million+</strong> businesses & <strong>2 million+</strong> individuals</p>
                </div>
                <div className="businesses__items_oH">
                    <div className="img_items_oH">
                        <img src={uber} alt="uber" />
                    </div>
                    <div className="img_items_oH">
                        <img src={mtn} alt="MTN" />                        
                    </div>
                    <div className="img_items_oH">
                        <img src={chipperCash} alt="chipper cash" />                        
                    </div>
                    <div className="img_items_oH">
                        <img src={piggyVest} alt="piggyVest" />                        
                    </div>
                    <div className="img_items_oH">                        
                        <img src={wise} alt="wise" />
                    </div>
                    <div className="img_items_oH">
                        <img src={microsoft} alt="microsoft" />                        
                    </div>
                </div>
            </div>
        </section>
        <section className='all-sect fourth_section__class' id='fourth-sect'>
            <div className="fourth_section__cont">
                <div className="heading_pH">
                    <h2>
                        Endless payment possibilities <span>for enterprises</span>
                    </h2>
                </div>
                <div className="activites_ads_pH">
                    <div className='flex_ads_pH'>
                        <div className="text_col1_pH">
                            <h6>Online Checkout</h6>
                            <p>
                                Our online checkout features our smart payment ordering system, incredible speed, and beautiful simplicity. It's designed to grow your revenue and provide the best payment experience to your customers.
                            </p>
                        </div>
                    </div>
                    <div className='flex_ads_pH'>
                        1
                    </div>
                    <div className='flex_ads_pH'>
                        1
                    </div>
                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default MainHomeTag