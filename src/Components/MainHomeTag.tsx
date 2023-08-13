import React, { useEffect } from 'react'

import '../../src/css/homeApp.css'
import '../css/MDViewHomeApp.css'
import '../css/animatedStackedATM.css'
import MainSectOne from './mainBodyTags/mainSectHomePage/MainSectOne'
import MainSectTwo from './mainBodyTags/mainSectHomePage/MainSectTwo'
import MainSectThree from './mainBodyTags/mainSectHomePage/MainSectThree'
import MainSectFour from './mainBodyTags/mainSectHomePage/MainSectFour'
import MainSectFive from './mainBodyTags/mainSectHomePage/MainSectFive'
import PayMainSectFive from './mainBodyTags/mainSectPaymentLink/MainSectFive'
import MainSectSix from './mainBodyTags/mainSectHomePage/MainSectSix'
import MainSectSeven from './mainBodyTags/mainSectHomePage/MainSectSeven'
import MainSectEight from './mainBodyTags/mainSectHomePage/MainSectEight'


const MainHomeTag = () => {

    useEffect(() => {
      document.title = 'Endless possibilities for every business - Flutterwave';
    }, [])
    

  return (
    <React.Fragment>
        <section className="all-sect first_section__class" id='first-sect'>
            <MainSectOne />
        </section>
        <section className="all-sect second_section__class" id="second-sect">
            <MainSectTwo />
        </section>
        <section className="all-sect third_section__class" id="third-sect">
            <MainSectThree />
        </section>
        <section className='all-sect fourth_section__class' id='fourth-sect'>
            <MainSectFour />
        </section>
        <section className="all-sect fifth_section__class" id="fifth-sect">
            <MainSectFive />
        </section>
        <section className="all-sect sixth_section__class" id="sixth-sect">
            <MainSectSix />
        </section>
        <section className="all-sect seventh_section__class" id="seventh-sect">
            <MainSectSeven />
        </section>
        <section className="all-sect eight_section__class" id="eight-sect">
            <MainSectEight />
        </section>
        <section className="all-sect nineth_section__class ready-to-start" id="nineth-sect">
            <PayMainSectFive />
        </section>

    </React.Fragment>
  )
}

export default MainHomeTag