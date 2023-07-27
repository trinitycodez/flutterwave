import React from 'react'

const MainSectFour = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default MainSectFour