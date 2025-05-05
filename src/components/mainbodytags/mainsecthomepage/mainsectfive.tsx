import creator from '../../../images/Creator.png'
import yangaBeauty from '../../../images/yanga-beauty.png'

const MainSectFive = () => {
  return (
    <div className="fifth_section__cont">
        <div className="heading__qH">
            <h2>Build a successful online business with our <span>Commerce tools.</span></h2>
        </div>
        <div className="flex__text_boxes_qH">
            <div className="first__flx_txt_qH">
                <h6>Store</h6>
                <p>
                    Create a free ecommerce website and start selling worldwide with just a few clicks.                    
                </p>
                <button type='button' className='sect__one_genBtn SS__btn'>
                    <a href="https://flutterwave.com/ng/start-selling">Start selling</a>
                </button>
            </div>
            <div className="first__flx_img_qH">
                <img src={yangaBeauty} alt="Yanga Beauty Lady" width="100%" height="100%" />
            </div>
        </div>
        <div className="flex__text_boxes_qH">
            <figure className="second__flx_img_qH">
                <img src={creator} alt="Creator" width="100%" height="100%" />
                <figcaption className='figCap__qH'>A platform for you, whether you're a big business or a <span> solo&nbsp;artist.</span></figcaption>
            </figure>
            <div className="second__flx_txt_qH">
                <div className='txt__cont_qH'>
                    <h6>Invoices</h6>
                    <p>
                        Generate professional invoices for your customers and get paid from anywhere.
                    </p>
                    <a href="https://flutterwave.com/ng/invoices">
                        <span>Get started</span>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="rgb(251, 78, 32)" xmlns="http://www.w3.org/2000/svg" className="btn__icon">
                            <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z"></path>
                        </svg>
                    </a>
                </div>
                <div className='txt__cont_qH'>
                    <h6>Payment links</h6>
                    <p>
                        Receive one-off or recurring payments from anyone, anywhere, via your unique payment link.
                    </p>
                    <a href="https://flutterwave.com/ng/payment-links">
                        <span>Learn More</span>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="rgb(251, 78, 32)" xmlns="http://www.w3.org/2000/svg" className="btn__icon">
                            <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <p className="p__tag_qH">
            Let's play to our strengths, shall we? You focus on bringing your amazing ideas to life and we focus on providing all the <span>commerce tools</span> you need.
        </p>
        <button type='button' className='sect__one_genBtn OK__btn'>
            <a href="https://flutterwave.com/store">Okay, let's go</a>
        </button>
    </div>
  )
}

export default MainSectFive