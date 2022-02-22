import React, { useState, useRef } from 'react';
import { days, employeeNames } from '../../utils/formData';
import PageHeading from '../../components/PageHeading/PageHeading';
import DayRadioBtn from '../../components/DayRadioBtn/DayRadioBtn';
import {
  FormStyle,
  SelectStyle,
  FormDivStyle,
  FormSectionStyle
} from '../Pages.style';
import { useDispatch } from 'react-redux';
import { addScheduleReport } from '../../actions/actions';

const LogShift = () => {
  const initialValues = {
    name: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
    hours: ""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({errors: "errors"});

  const dispatch = useDispatch();
  const formRef = useRef(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const validate = values => {
    const errors = {};
    const regexNum = /[0-9]/g;

    if(!values.name) errors.name = 'Please select employee name'
    if(!values.weekDate) errors.weekDate = 'Please select week date'

    if(!values.hours) errors.hours = 'Hours field is required'
    else if (values.hours > 100 || !regexNum.test(values.hours)) errors.hours = "Please enter valid hours"

    for(var i of days) { if(!values[i.toLowerCase()]) errors[i] = `Please select ${i} schedule`; }

    return errors
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues))

    if(Object.keys(formErrors).length === 0) {
      dispatch(addScheduleReport(formValues))
      alert('Thank You!');
      setFormValues(initialValues);
      setFormErrors({error: "error"})
      formRef.current.reset();
    }
  }

  return (
    <FormSectionStyle>
      <div className="wrapper">
        <PageHeading text="Log Weekly Shift" />
        <FormDivStyle>
          <h2>Weekly Shift Report</h2>
          <FormStyle action="#FIXME" method="POST" onSubmit={handleSubmit} ref={formRef}>
            <SelectStyle>
              <label htmlFor="empName">Employee Name</label>
              <select name="name" id="empName" onChange={handleChange}>
                { employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>) }
              </select>
            </SelectStyle>
            <span className="error">{formErrors.name}</span>
            <SelectStyle>
              <label htmlFor="weekDate">What is the first date of the week?</label>
              <input type="date" name="weekDate" id="weekDate" onChange={handleChange} />
            </SelectStyle>
            <span className="error">{formErrors.weekDate}</span>
            { days.map((day, i) => <DayRadioBtn errors={formErrors} change={handleChange} key={i} dayName={day} /> )}
            <SelectStyle>
              <label htmlFor="hours">What is your weekly work hours ?</label>
              <input type="text" name="hours" id="hours" onChange={handleChange} />
            </SelectStyle>
            <span className="error">{formErrors.hours}</span>
            <button type="submit">Submit</button>
          </FormStyle>
        </FormDivStyle>
      </div>
    </FormSectionStyle>
  )
}

export default LogShift