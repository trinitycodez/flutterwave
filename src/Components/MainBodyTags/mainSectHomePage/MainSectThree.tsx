import uber from '@/src/svgs/uber.svg'
import mtn from '@/src/svgs/mtn.svg'
import chipperCash from '@/src/svgs/chippercash.svg'
import piggyVest from '@/src/svgs/piggyvest.svg'
import wise from '@/src/svgs/wise.svg'
import microsoft from '@/src/svgs/microsoft.svg'


const MainSectThree = () => {
  return (
    <div className="third_section__cont">
        <div className="business__para_oH">
            <p>
                We are trusted by <strong>1 million+</strong> businesses & <strong>2 million+</strong> individuals
            </p>
        </div>
        <div className="businesses__items_oH">
            <div className="img_items_oH">
                <img src={uber} alt="uber" width="100%" height='100%' />
            </div>
            <div className="img_items_oH">
                <img src={mtn} alt="MTN" width="100%" height='100%' />                        
            </div>
            <div className="img_items_oH">
                <img src={chipperCash} alt="chipper cash" width="100%" height='100%' />                        
            </div>
            <div className="img_items_oH">
                <img src={piggyVest} alt="piggyVest" width="100%" height='100%' />                        
            </div>
            <div className="img_items_oH">                        
                <img src={wise} alt="wise" width="100%" height='100%' />
            </div>
            <div className="img_items_oH">
                <img src={microsoft} alt="microsoft" width="100%" height='100%' />                        
            </div>
        </div>
    </div>
  )
}

export default MainSectThree