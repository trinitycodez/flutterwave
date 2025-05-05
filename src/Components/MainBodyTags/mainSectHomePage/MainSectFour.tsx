import centerPhone from '@/src/images/center_Phone_ads.png'

const MainSectFour = () => {
  return (
    <div className="fourth_section__cont">
        <div className="heading_pH">
            <h2>
                Endless payment possibilities <span>for enterprises</span>
            </h2>
        </div>
        <div className="activites_ads_pH">
            <div className='flex_ads_pH'>
                <div className="text__cols text_col1_pH">
                    <h6>Checkout</h6>
                    <p>
                        Checkout features our smart payment ordering system, incredible speed, and beautiful simplicity. It's designed to grow your revenue and provide the best payment experience to your customers.
                    </p>
                    <button type='button' className='sect__one_genBtn GS__btn'>
                        <a href="http://flutterwave.com/ng/checkout">Get started</a>
                    </button>
                </div>
            </div>
            <div className='flex_ads_pH'>
                <img src={centerPhone} alt="center phone" width='100%' height='100%' />
            </div>
            <div className='flex_ads_pH'>
                <div className="text__cols text_col2_pH">
                    <h6>Accept payments</h6>
                    <p>
                        Easily receive money from anyone, anywhere in the world. via our multitude of secure payment methods.
                    </p>
                    <a href="http://flutterwave.com/ng/send-money">
                        <span>Learn more</span>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="rgb(251, 78, 32)" xmlns="http://www.w3.org/2000/svg" className="btn__icon">
                            <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z"></path>
                        </svg>
                    </a>
                </div>
                <div className="text__cols text_col3_pH">
                    <h6>Transfers (Payout)</h6>
                    <p>
                        Make single or bulk transfers to bank accounts from your Flutterwave dashboard.
                    </p>
                    <a href="https://flutterwave.com/ng/send-money">
                        <span>Learn more</span>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="rgb(251, 78, 32)" xmlns="http://www.w3.org/2000/svg" className="btn__icon">
                            <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSectFour