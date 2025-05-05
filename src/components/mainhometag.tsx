import { Fragment, useEffect } from 'react'

import '../css/homeapp.css'
import '../css/mdviewhomeapp.css'
import '../css/animatedstackedatm.css'
import MainSectOne from './mainbodytags/mainsecthomepage/mainsectone'
import MainSectTwo from './mainbodytags/mainsecthomepage/mainsecttwo'
import MainSectThree from './mainbodytags/mainsecthomepage/mainsectthree'
import MainSectFour from './mainbodytags/mainsecthomepage/mainsectfour'
import MainSectFive from './mainbodytags/mainsecthomepage/mainsectfive'
import PayMainSectFive from './mainbodytags/mainsectpaymentlink/mainsectfive'
import MainSectSix from './mainbodytags/mainsecthomepage/mainsectsix'
import MainSectSeven from './mainbodytags/mainsecthomepage/mainsectseven'
import MainSectEight from './mainbodytags/mainsecthomepage/mainsecteight'


const MainHomeTag = () => {

    useEffect(() => {
      document.title = 'Endless possibilities for every business - Flutterwave';
    }, [])
    

  return (
    <Fragment>
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

    </Fragment>
  )
}

export default MainHomeTag