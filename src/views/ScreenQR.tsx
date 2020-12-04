import React, { useState } from 'react';
import "./ScreenQR.scss";
import QrReader from 'react-qr-scanner';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
  setToaster
} from '../store/appReducer';

import Button from "../components/Button";
import CartCard from "../components/CartCard";

import {ReactComponent as Close} from '../icons/close.svg';

interface IScreenQRProps{
  url?: string;
};

const ScreenQR: React.FC<IScreenQRProps> = (props: IScreenQRProps) => {
  const history = useHistory();
  let dispatch = useDispatch();

  const [result, setResult] = useState(null);
  const [productPopup, setProductPopup] = useState(false);
  const [delay] = useState(600);


  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
      setProductPopup(true);
    }
  }

  const handleError = (err:any) => {
    console.error(err)
  }

  const closeProductPop = () => {
    setResult(null);
    setProductPopup(false);
  };

  const addToCart = () => {
    history.goBack();
    dispatch(setToaster({message: "Item added to your cart", type: "info", isOpen: true}));
    setTimeout(() => {
      dispatch(setToaster({message: "", type: "", isOpen: false}));
    },3000);
  };


  return(
    <div className="qrScreenWrapper">
      <Button className="secondary cameraClose" type="icon" clickHandler={history.goBack}><Close width="18px" height="18px"/></Button>
      <QrReader
        delay={delay}
        style={{height: "100vh", width:"100vw"}}
        onError={handleError}
        onScan={handleScan}
        />
      <p>{result}</p>
      <div className={`overlay ${result?"success":""}`}>
        <div></div>
      </div>

      <div className={`productScan ${productPopup? "open":""}`}>
        <div className="head">
            <Button className="transparent" type="icon" clickHandler={closeProductPop}><Close width="18px" height="18px"/></Button>
            <span>Product Detail</span>
        </div>

        <div className="scroll">
          <CartCard/>
        </div>

        <div className="footer">
          <Button className="primary" clickHandler={addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ScreenQR