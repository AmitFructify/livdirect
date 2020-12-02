import React, { useState } from 'react';
import "./ScreenQR.scss";
import QrReader from 'react-qr-scanner';

import { useHistory } from 'react-router-dom';

import Button from "../components/Button";
import Icon from "../components/Icon";

interface IScreenQRProps{
  url?: string;
};

const ScreenQR: React.FC<IScreenQRProps> = (props: IScreenQRProps) => {
  const [result, setResult] = useState("No Result");
  const [delay] = useState(600);

  const history = useHistory();

  const handleScan = (data: any) => {
    setResult(data);
  }

  const handleError = (err:any) => {
    console.error(err)
  }

  return(
    <div className="qrScreenWrapper">
      <Button className="secondary cameraClose" type="icon" clickHandler={history.goBack}><Icon type="close"/></Button>
      <QrReader
        delay={delay}
        style={{height: "100%", width:"100%"}}
        onError={handleError}
        onScan={handleScan}
        />
      <p>{result}</p>
    </div>
  );
};

export default ScreenQR