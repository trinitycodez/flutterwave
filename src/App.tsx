import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@/src/countries.css';
import '@/src/App.css';

import Countries from '@/src/components/countries';
import SectionHeaderNav from '@/src/components/sectionheadernav';
import SocialFTHandler from '@/src/components/socialfthandler';
import TermsPolicy from '@/src/components/termspolicy';
import MainHomeTag from '@/src/components/mainhometag';
import MainTagPaymentLinks from '@/src/components/mainbodytags/mainsectpaymentlink/maintagpaymentlinks';

export const MenuContext = React.createContext(0);
export const SlideCardContext = React.createContext({slideCard:false, setWidth:document.body.clientWidth});

const App = () => {

  const [value, setValue] = useState(false);
  const [scWidth, setScWidth] = useState(document.body.clientWidth);

  const handler = () => {
    setValue(false);
  }

  useEffect(() => {
    const watch = () => {
      setScWidth(document.body.clientWidth)
    }
    window.onresize = () => {
      watch();
    }
  
  }, [scWidth])

  const solve = (v:number) => {
    v-=1;
    if (document.querySelector(".footer-nav")!.children.item(v)!.classList.value !== `footer-flex-boxes show${v}`) {
      document.querySelector(".footer-nav")!.children.item(v)!.classList.toggle(`show${v}`);
      document.querySelectorAll(`.show${v} .footer-nav-list > div`).forEach((value) => value!.classList.toggle("show__list_items"));
      return;
    }
    document.querySelectorAll(`.show${v} .footer-nav-list > div`).forEach((value) => value!.classList.toggle("show__list_items"));
    document.querySelector(".footer-nav")!.children.item(v)!.classList.toggle(`show${v}`);
  }
  
  const displayFooterNavLinks = (val:number) => {
    switch (val) {
      case 1: solve(val); break;
      case 2: solve(val); break;
      case 3: solve(val); break;
      case 4: solve(val); break;
      case 5: solve(val); break;
      case 6: 
        if (document.querySelector(".flex-social-handles")!.children.item(1)!.classList.value !== "footer-flex-boxes show5") {
          document.querySelector(".flex-social-handles")!.children.item(1)!.classList.toggle("show5");
          document.querySelectorAll(".show5 .footer-nav-list > span").forEach((value) => value!.classList.toggle("show__list_items"));
          return;
        }
        document.querySelectorAll(".show5 .footer-nav-list > span").forEach((value) => value!.classList.toggle("show__list_items"));
        document.querySelector(".flex-social-handles")!.children.item(1)!.classList.toggle("show5");
        break;
      case 7: 
        if (document.querySelector(".flex-terms-policy")!.children.item(0)!.classList.value !== "footer-flex-boxes show6") {
          document.querySelector(".flex-terms-policy")!.children.item(0)!.classList.toggle("show6");
          document.querySelectorAll(".show6 .footer-nav-list > p").forEach((value) => value!.classList.toggle("show__list_items"));
          return;
        }
        document.querySelectorAll(".show6 .footer-nav-list > p").forEach((value) => value!.classList.toggle("show__list_items"));
        document.querySelector(".flex-terms-policy")!.children.item(0)!.classList.toggle("show6");
        break;
      default:
        break;
    }
  }

  return (
    <BrowserRouter>
      <div onClick={handler}>
        <header className='header-class'>
          <MenuContext.Provider value={scWidth}>
            <SectionHeaderNav />
          </MenuContext.Provider>
        </header>
        <main className='main__class'>
          <Routes>
              <Route path='/' element={
                <SlideCardContext.Provider value={{slideCard:value, setWidth:scWidth}}>
                  <MainHomeTag />
                </SlideCardContext.Provider>
              } />
            <Route path='/payment-links' element={<MainTagPaymentLinks />} />
          </Routes>
        </main>
        <footer className='footer-sect'>
          <div className="footer-nav">
            <div className="footer-flex-boxes">
              <div className="footer-head" onClick={() => displayFooterNavLinks(1)}>
                <h5>Products</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="ft__section__icon">
                  <path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
                </svg>
              </div>
              <nav className='footer-nav-list'>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Collect Payments</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Send Money</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Store</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Payment Links</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Invoices</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Capital</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Grow</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Card Issuing</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>FaaS</a></div>
              </nav>
            </div>
            <div className="footer-flex-boxes">
              <div className="footer-head" onClick={() => displayFooterNavLinks(2)}>
                <h5>Resources</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="ft__section__icon"><path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
                </svg>
              </div>
              <nav className='footer-nav-list'>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Pricing</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Support</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Blog</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Integrations</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Why you got charged</a></div>
                <div className='stop'><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Cookie settings</a></div>
              </nav>
            </div>
            <div className="footer-flex-boxes">
              <div className="footer-head" onClick={()=>displayFooterNavLinks(3)}>
                <h5>Developers</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="ft__section__icon"><path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
                </svg>
              </div>
              <nav className='footer-nav-list'>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>API Documentation</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>API Reference</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>API Status</a></div>
              </nav>
            </div>
            <div className="footer-flex-boxes">
              <div className="footer-head" onClick={()=>displayFooterNavLinks(4)}>
                <h5>Flutterwave</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="ft__section__icon"><path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
                </svg>
              </div>
              <nav className='footer-nav-list'>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Customers</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Careers</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Press kit</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Covid 19</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Barter</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Disha</a></div>
                <div><a href="https://" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Send</a></div>
              </nav>
            </div>
            <div className="footer-flex-boxes">
              <div className="footer-head" onClick={()=>displayFooterNavLinks(5)}>
                <h5>Contact</h5>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="ft__section__icon"><path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
                </svg>
              </div>
              <nav className='footer-nav-list'>
                <div><a href="mailto:hi@flutterwavego.com" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>hi@flutterwavego.com</a></div>
                <div><a href="tel:+23418889595" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>+234 1-8889595</a></div>
                <div><a href="tel:070035888379283" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>0700-FLUTTERWAVE</a></div>
                <div><a href="https://twitter.com/flwsupport" target="_blank" rel="noopener noreferrer" className='footer-ALinks'>Twitter Support</a></div>
                <div>
                  <p className="footer-text">
                    Call lines are open 08:00 to 17:00 WAT, Mondays - Fridays
                  </p>
                </div>
              </nav>
            </div>
          </div>
          <div className="footer-nav flex-social-handles">
            <Countries value={value} setValueVal={(val:boolean)=> setValue(val)} />
            <SocialFTHandler value={scWidth} displayFooterProps={()=>displayFooterNavLinks(6)} />
          </div>
          <div className="footer-nav flex-terms-policy">
            <TermsPolicy value={scWidth} displayFooterProps={()=>displayFooterNavLinks(7)} />
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
