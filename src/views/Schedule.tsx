import React, { useState } from 'react';
import Button from '../components/Button';
import "./Schedule.scss";

import { useDispatch } from 'react-redux';
import {
  setToaster
} from '../store/appReducer';

import { ReactComponent as Close } from '../icons/close.svg';

interface IScheduleProps {
  isOpen: boolean;
  closeHandler: () => void;
  storeAddress: string;
}

const Schedule: React.FC<IScheduleProps> = (props: IScheduleProps) => {
  let dispatch = useDispatch();

  let [type, setType] = useState("Store");
  let [neeDesignerAssist, setAssist] = useState(true);

  const scheduleAppointment = () => {
    props.closeHandler();
    dispatch(setToaster({ message: "Your Appointment Scheduled", type: "info", isOpen: true }));
    setTimeout(() => {
      dispatch(setToaster({ message: "", type: "", isOpen: false }));
    }, 3000);
  };
  let textAreaRows = 3;

  return (
    <div className={`scheduleContainer ${props.isOpen ? "open" : ""}`}>
      <div className="transHead" onClick={props.closeHandler}>
        <span></span>
      </div>
      <div className="scheduleForm">
        <div className="formHead">
          <Button className="transparent" type="icon" clickHandler={props.closeHandler}><Close width="18px" height="18px" /></Button>
          <span>Schedule Appointment</span>
        </div>


        <div className="formScroll">
          <div className="field">
            <div className="fieldLabel">
              Type
            </div>
            <div className="fieldValue">
              <input type="radio" id="Store" name="scheduleType" value="Store" defaultChecked onChange={() => setType("Store")} />
              <label htmlFor="Store">Store</label>
              <input type="radio" id="Home" name="scheduleType" value="Home" onChange={() => setType("Home")} />
              <label htmlFor="Home">Home</label>
            </div>
            {type === "Home" && <div className="fieldInfo">
              <p> You will be charged a flat fee of &#x20B9; 1,000 per expert visit with samples and the same will be deducted from your Livspace Wallet.</p>
            </div>}
          </div>
          <div className="field">
            <div className="fieldLabel">
              Date
            </div>
            <div className="fieldValue">
              <input type="date" />
            </div>
          </div>
          <div className="field">
            <div className="fieldLabel">
              Time
            </div>
            <div className="fieldValue">
              <select>
                <option value="">Select Time Slot</option>
                <option value="9">9:00am - 11:00am</option>
                <option value="11">11:00am - 1:00pm</option>
                <option value="1">1:00pm - 3:00pm</option>
                <option value="3">3:00pm - 5:00pm</option>
                <option value="5">5:00pm - 7:00pm</option>
              </select>
            </div>
          </div>
          <div className="field">
            <div className="fieldLabel">
              {type} address
            </div>
            <div className="fieldValue">
              <textarea rows={textAreaRows} disabled={type === "Store"?true:false} value={type === "Store"? props.storeAddress: "#2, 80 Feet Road, (opp. Kormangala Indoor Stadium, Kormangala 8th Block, Bengaluru, Karnataka 560095"}></textarea>
            </div>
          </div>
          <div className="field">
            <div className="fieldLabel">
              Do you want Designer Assistance at {type}?
            </div>
            <div className="fieldValue">
              <input type="radio" id="yes" name="designAssist" value="true" defaultChecked onChange={() => setAssist(true)} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="designAssist" value="false" onChange={() => setAssist(false)} />
              <label htmlFor="no">No</label>
            </div>
            {neeDesignerAssist && <div className="fieldInfo">
              <p> You will be charged &#x20B9; 1000 per hour for Designer Assistance and the same will be deducted from your Livspace Wallet.</p>
            </div>}
          </div>
        </div>

        <div className="formFooter">
          <Button className="primary" clickHandler={scheduleAppointment}>Schedule</Button>
        </div>

      </div>
    </div>
  );
}

export default Schedule;