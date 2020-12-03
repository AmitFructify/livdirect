import React, { useState } from 'react';
import "./ScreenQR.scss";
import QrReader from 'react-qr-scanner';

import { useHistory } from 'react-router-dom';

import Button from "../components/Button";
import Icon from "../components/Icon";
import CartCard from "../components/CartCard";

interface IScreenQRProps{
  url?: string;
};

const ScreenQR: React.FC<IScreenQRProps> = (props: IScreenQRProps) => {
  const [result, setResult] = useState(null);
  const [productPopup, setProductPopup] = useState(false);
  const [delay] = useState(600);

  const history = useHistory();

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


  return(
    <div className="qrScreenWrapper">
      <Button className="secondary cameraClose" type="icon" clickHandler={history.goBack}><Icon type="close"/></Button>
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
          <div>
            <Button className="transparent" type="icon" clickHandler={closeProductPop}><Icon type="close"/></Button>
            <span>Product Detail</span>
          </div>
        </div>

        <div className="scroll">
          <CartCard/>
        </div>

        <div className="footer">
          <Button className="primary" clickHandler={history.goBack}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ScreenQR