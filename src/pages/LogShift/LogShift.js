import React from 'react';
import { days, employeeNames } from '../../utils/formData';
import PageHeading from '../../components/PageHeading/PageHeading';
import DayRadioBtn from '../../components/DayRadioBtn/DayRadioBtn';
import {
  FormStyle,
  SelectStyle,
  FormDivStyle,
  FormSectionStyle
} from '../Pages.style';

const LogShift = () => {
  return (
    <FormSectionStyle>
      <div className="wrapper">
        <PageHeading text="Log Weekly Shift" />
        <FormDivStyle>
          <h2>Weekly Shift Report</h2>
          <FormStyle action="#FIXME" method="POST">
            <SelectStyle>
              <label htmlFor="empName">Employee Name</label>
              <select id="empName">
                { employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>) }
              </select>
            </SelectStyle>
            <span className="error empErr">error</span>
            { days.map((day, i) => <DayRadioBtn key={i} dayName={day} /> )}
            <SelectStyle>
              <label htmlFor="hours">What is your weekly work hours ?</label>
              <input type="number" id="hours" />
            </SelectStyle>
            <button type="submit">Submit</button>
          </FormStyle>
        </FormDivStyle>
      </div>
    </FormSectionStyle>
  )
}

export default LogShift