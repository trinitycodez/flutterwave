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
    </main>
    <footer></footer>
    </React.Fragment>
  );
}

export default App;
