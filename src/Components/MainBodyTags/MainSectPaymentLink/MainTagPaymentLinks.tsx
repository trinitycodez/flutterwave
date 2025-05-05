import { useEffect, Fragment } from 'react';
import '@/src/css/homepaymentlinks.css';
import '@/src/css/mdview.css';
import '@/src/css/animatedsvg.css';
import MainSectOne from './mainsectone';
import MainSectTwo from './mainsecttwo';
import MainSectThree from './mainsectthree';
import MainSectFour from './mainsectfour';
import MainSectFive from './mainsectfive';
import AnimatedSVG from './animatedsvg';

const MainTagPaymentLinks = () => {

  useEffect(() => {
    document.title = 'Payment Links - Flutterwave';
  }, [])

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default MainTagPaymentLinks