import React from 'react';

import '../src/CSS/home.css';
import '../src/CSS/animatedSVG.css'
import AnimatedSVG from './Components/AnimatedSVG';

import flutterwave from '../src/Images/flutterwave_svg.png';
import org_logo from '../src/Images/org_logo.png';
import Payment_illustrastion from '../src/Images/Payment_illustrastion.png';

function App() {
  return (
    <React.Fragment>
      <header className="header-class">
      <nav className="nav-class">
        <div className="nav-content-box org-logo">
          <img src={org_logo} alt="Organisation logo" width="100%" height="100%" />
        </div>
        <div className="nav-content-box">
          <ul className="nav-ULlist-items">
            <li><span>Payments</span></li>
            <li><span>Commerce</span></li>
            <li><span>Issuing</span></li>
            <li><span>Capital</span></li>
            <li><span>Grow</span></li>
            <li><span>FaaS</span></li>
          </ul>
        </div>
        <div className="nav-content-box">
          <button id="btn-sign-in">Sign in</button>
        </div>
      </nav>
    </header>
    <main>
      <section className="all-sect" id="first-sect">
        <div className="first-sect-text">
          <h4>Get paid, anywhere</h4>
          <p>
            Sell online without a website. Create a payment link in just a few clicks and share the link with your customers-no code required.
          </p>
          <button>Get started</button>
        </div>
        <div className="flutterwave-svg">
          <img src={flutterwave} alt="flutterwave-svg" width="100%" height="100%" />
        </div>
      </section>
      <section className="all-sect" id="second-sect">
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
              <li>
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
            <button className='btn-sec-sect'>Get started</button>
          </div>
          <div className='Payment-illustration'>
            <img src={Payment_illustrastion} alt="Payment illustration" width="100%" height="100%" style={{borderRadius: '1rem'}} />
          </div>
        </div>
      </section>
      <section className="all-sect" id="third-sect">
        <div className="start-selling">
          <p>
            Whether you are a freelancer or a creator, this is the best way to receive money from your clients. No code required. Do it all from your Flutterwave dashboard.
          </p>
          <button className="btn-start-selling">Start selling</button>
        </div>
      </section>
      <section className="all-sect" id="fourth-sect">
        <div className='safety-container'>
          <h2>Safety and security guaranteed</h2>
          <p>
            At Flutterwave, we take security seriously, so every payment made on our platform is 100% secure, even exceeding industry standards.
          </p>
          <div className="safety-contigent-box">
            <div className='contigent contigent-one'>
              <h3>ISO 27001 & 22301 Certification</h3>
              <p>
                Our ISO 27001 & 22301 certification means that we have acceptable business practices and processes, including a robust business continuity plan.
              </p>
            </div>
            <div className='contigent contigent-two'>
              <h3>PA DSS & PCI DSS Compliant</h3>
              <p>
                This certification is proof that Flutterwave as a payment gateway processor, has satisfied the highest level of Security Audit and authorizations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='animatedSVG-Sect'>
        <AnimatedSVG></AnimatedSVG>
      </section>
      <section className="all-sect ready-to-start" id='fifth-sect'>
        <div className="cont">
          <div className="cont-wrapper-textbox">
            <h3>Ready to start selling?</h3>
            <p>
              Create an account and instantly start accepting payments, selling your beautiful products online and building financial tools.
            </p>
            <div className="flexbtn-nav">
              <button className="btn-start-selling btn-get-started">Get started</button>
              <div className="contactNav-sales">
                <span>Contact sales</span>
                <svg width="10" height="15" viewBox="0 0 10 15" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" className="btn__icon">
                  <path d="M9.692 8.12608L1.74813 14.7865C1.54551 14.9319 1.28487 15.008 1.0183 14.9993C0.751731 14.9907 0.498863 14.8981 0.310228 14.7399C0.121594 14.5817 0.0110864 14.3697 0.000789915 14.1462C-0.00950656 13.9227 0.0811663 13.7042 0.254688 13.5343L7.44653 7.5L0.254688 1.46569C0.0811663 1.2958 -0.00950656 1.07728 0.000789915 0.853776C0.0110864 0.630275 0.121594 0.418262 0.310228 0.260105C0.498863 0.101948 0.751731 0.00929518 1.0183 0.000662293C1.28487 -0.00797059 1.54551 0.068052 1.74813 0.213538L9.692 6.87392C9.88927 7.04031 10 7.26539 10 7.5C10 7.73461 9.88927 7.95969 9.692 8.12608Z" fill='#FFFFFF'></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className='footer-sect'>
      <div className="footer-nav flex-box">1</div>
      <div className="footer-nav flex-social-handles">2</div>
      <div className="footer-nav flex-terms-policy">3</div>
    </footer>
    </React.Fragment>
  );
}

export default App;
