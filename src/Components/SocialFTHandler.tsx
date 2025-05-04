import React from 'react'

type propsType = {
    value:number,
    displayFooterProps:() => void
}
const SocialFTHandler = ({value, displayFooterProps}:propsType) => {

    if (value <= 900) {
        return (
            <React.Fragment>
                <div className="footer-flex-boxes">
                    <div className="footer-head" onClick={displayFooterProps}>
                        <h5>Connect</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="ft__section__icon"><path d="M 6.087 10.998 C 5.507 10.458 5.507 9.541 6.085 9 L 6.135 8.954 C 6.71 8.416 7.603 8.415 8.18 8.951 L 11.66 12.184 C 11.852 12.362 12.148 12.363 12.34 12.185 L 15.856 8.932 C 16.413 8.416 17.283 8.446 17.803 9 L 17.803 9 C 18.324 9.554 18.302 10.424 17.755 10.952 L 12.682 15.843 C 12.299 16.211 11.696 16.217 11.307 15.855 Z"></path>
                        </svg>
                    </div>
                    <nav className='social__links footer-nav-list'>
                        <span>Twitter</span>
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>YouTube</span>
                        <span>LinkedIn</span>
                    </nav>
                </div>
            </React.Fragment>)
    } else {
        return (
            <React.Fragment>
                <nav className='social__links'>
                    <span>Twitter</span>
                    <span>Facebook</span>
                    <span>Instagram</span>
                    <span>YouTube</span>
                    <span>LinkedIn</span>
                </nav>
            </React.Fragment>
        )
    }
}

export default SocialFTHandler