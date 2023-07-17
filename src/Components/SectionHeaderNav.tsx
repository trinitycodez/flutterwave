import React, { useState } from 'react';
import org_logo from '../Images/org_logo.png';
import HamburgerMenuBar from './MainSectPaymentLink/HamburgerMenuBar';

type payComm = React.CSSProperties

// the component
const SectionHeaderNav = () => {
    const [pay, setPay] = useState('none');
    const [showPay, setShowPay] = useState(false);
    const [com, setCom] = useState('none');
    const [showCom, setShowCom] = useState(false);

    const Pay:payComm = {
        display: pay
    }
    const Com:payComm = {
        display: com
    }
    const payHover = (val:boolean) => {
        if (val) {
            setPay('flex');
            setShowPay(true);
            return;
        }
        setCom('flex');
        setShowCom(true);
    }
    const payOut = (val:boolean) => {
        if (val) {
            setPay('none');
            setShowPay(false);
            return;
        }
        setCom('none');
        setShowCom(false);
    }

    return (
        <nav className="nav-class">
            <div className="nav-content-box org-logo">
                <img src={org_logo} alt="Organisation logo" width="100%" height="100%" />
            </div>
            <HamburgerMenuBar
            togglerBox={{ sPy:showPay, sCo:showCom, capPay:Pay, capComm:Com}}
            payHoverProps={(val:boolean) => {payHover(val)}}
            payOutProps={(val:boolean) => {payOut(val)}}
            />
        </nav>
    )
}

export default SectionHeaderNav