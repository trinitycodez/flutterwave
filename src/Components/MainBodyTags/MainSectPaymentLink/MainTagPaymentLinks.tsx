import React, { useEffect } from 'react';
import '../../../css/homePaymentLinks.css';
import '../../../css/MDView.css';
import '../../../css/animatedSVG.css';
import MainSectOne from './MainSectOne';
import MainSectTwo from './MainSectTwo';
import MainSectThree from './MainSectThree';
import MainSectFour from './MainSectFour';
import MainSectFive from './MainSectFive';
import AnimatedSVG from './AnimatedSVG';

const MainTagPaymentLinks = () => {

  useEffect(() => {
    document.title = 'Payment Links - Flutterwave';
  }, [])

  return (
    <React.Fragment>
      <section className="all-sect" id="first-sect">
        <MainSectOne />
      </section>
      <section className="all-sect second-sect-payLink" id="second-sect">
        <MainSectTwo />
      </section>
      <section className="all-sect" id="third-sect">
        <MainSectThree />
      </section>
      <section className="all-sect" id="fourth-sect">
        <MainSectFour />
      </section>
      <section className='animatedSVG-Sect'>
        <AnimatedSVG />
      </section>
      <section className="all-sect ready-to-start" id='fifth-sect'>
        <MainSectFive />
      </section>
    </React.Fragment>
  )
}

export default MainTagPaymentLinks