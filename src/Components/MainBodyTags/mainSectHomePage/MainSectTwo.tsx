import footCity from '@/src/images/footCity.png'
import famasi from '@/src/images/Famasi.png'


const MainSectTwo = () => {
  return (
    <div className="sect__one_btn_img">
        <div className="two__boxes_mH first_box_mH">                       
            <figure className="image__mH">
                <img src={footCity} alt="" width="100%" height="100%" />
                <figcaption className='figCap__foodcity'>Foot city</figcaption>
            </figure>
        </div>
        <div className="two__boxes_mH second_box_mH">
            <figure className="image__nH">
                <img src={famasi} alt="" width="100%" height="100%" />
                <figcaption className='figCap__famasi'>Famasi</figcaption>
            </figure>
            <p className="text__nH">
                It's not the size of the company, it's the size of the ambition. Ambitious businesses of all sizes count on Flutterwave to grow their business everywhere.
            </p>
        </div>
    </div>
  )
}

export default MainSectTwo