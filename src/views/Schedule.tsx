import React from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import "./Schedule.scss";

import { useDispatch } from 'react-redux';
import {
  setToaster
} from '../store/appReducer';

interface IScheduleProps{
  isOpen: boolean,
  closeHandler: () => void
}

const Schedule: React.FC<IScheduleProps> = (props: IScheduleProps) => {
  let dispatch = useDispatch();

  const scheduleAppointment = () => {
    props.closeHandler();
    dispatch(setToaster({message: "Your Appointment Scheduled", type: "info", isOpen: true}));
    setTimeout(() => {
      dispatch(setToaster({message: "", type: "", isOpen: false}));
    },3000);
  };
  let textAreaRows = 3;

  return (
    <div className={`scheduleContainer ${props.isOpen? "open" : ""}`}>
      <div className="transHead" onClick={props.closeHandler}>
        <span></span>
      </div>
      <div className="scheduleForm">
        <div className="formHead">
          <Button className="transparent" type="icon" clickHandler={props.closeHandler}><Icon type="close"/></Button>
          <span>Schedule Appointment</span>
        </div>


        <div className="formScroll">
          <div className="field">
            <div className="fieldLabel">
              Type
            </div>
            <div className="fieldValue">
              <input type="radio" id="store" name="scheduleType" value="store" defaultChecked/>
              <label htmlFor="store">Store</label>
              <input type="radio" id="home" name="scheduleType" value="home"/>
              <label htmlFor="home">Home</label>
            </div>
            <div className="fieldInfo">
              <p> You will be charged a flat fee of &#x20B9; 1,000 per expert visit with samples and the same will be deducted from your Livspace Wallet.</p>
            </div>
          </div>
          <div className="field">
            <div className="fieldLabel">
              Date
            </div>
            <div className="fieldValue">
              <input type="date"/>
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
              Home address
            </div>
            <div className="fieldValue">
              <textarea rows={textAreaRows}></textarea>
            </div>
          </div>
          <div className="field">
            <div className="fieldLabel">
              Need Design Assist?
            </div>
            <div className="fieldValue">
              <input type="radio" id="yes" name="designAssist" value="true" defaultChecked/>
              <label htmlFor="yes">Yes</label>
              <input type="radio" id="no" name="designAssist" value="false"/>
              <label htmlFor="no">No</label>
            </div>
            <div className="fieldInfo">
              <p> You will be charged &#x20B9; 500 per hour for Design Assist and the same will be deducted from your Livspace Wallet.</p>
            </div>
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