import React from 'react'

type propsType = {
  value:number,
  displayFooterProps:() => void
}
const TermsPolicy = ({value, displayFooterProps}:propsType) => {

    if (value <= 900) {
      return (
        <React.Fragment>
          <div className="footer-flex-boxes">
            <div className="footer-head" onClick={displayFooterProps}>
              <h5>Legal</h5>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="ft__section__icon">
                <path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
              </svg>
            </div>
            <nav className='footer-nav-list'>
              <p>Privacy policy</p>
              <p>Terms of use</p>
              <p>Cookie policy</p>
              <p>Merchant service agreement</p>
              <p>Payment protection promise</p>
            </nav>
            {/* <nav className='social__links footer-nav-list'>
                <span><a href="https://twitter.com/theflutterwave">Twitter</a></span>
                <span><a href="https://www.facebook.com/theFlutterwave/">Facebook</a></span>
                <span><a href="https://www.instagram.com/theflutterwave/">Instagram</a></span>
                <span><a href="https://www.youtube.com/channel/UCBIAbIvsVyppFIiQP9CV-zQ">YouTube</a></span>
                <span><a href="https://www.linkedin.com/company/flutterwave/">LinkedIn</a></span>
            </nav> */}
            <div id='copyright'>
              <p>&copy;&nbsp;TrinityCodez 2023</p>
            </div>
          </div>
        </React.Fragment>)
    } else {
      return(
      <React.Fragment>
        <div id='copyright'>
          <p>&copy;&nbsp;TrinityCodez 2023</p>
        </div>
        <div className='footer_last_content'>
          <nav>
            <p>Privacy policy</p>
            <p>Terms of use</p>
            <p>Cookie policy</p>
            <p>Merchant service agreement</p>
            <p>Payment protection promise</p>
          </nav>
        </div>
      </React.Fragment>
    )  
  }
}

export default TermsPolicy