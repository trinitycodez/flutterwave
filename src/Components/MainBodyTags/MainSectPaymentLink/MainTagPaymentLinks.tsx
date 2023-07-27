import '../../../CSS/animatedSVG.css';

import MainSectOne from './MainSectOne';
import MainSectTwo from './MainSectTwo';
import MainSectThree from './MainSectThree';
import MainSectFour from './MainSectFour';
import MainSectFive from './MainSectFive';
import AnimatedSVG from './AnimatedSVG';

const MainTagPaymentLinks = () => {
  return (
    <main>
      <section className="all-sect" id="first-sect">
        <MainSectOne />
      </section>
      <section className="all-sect" id="second-sect">
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
    </main>
  )
}

export default MainTagPaymentLinks