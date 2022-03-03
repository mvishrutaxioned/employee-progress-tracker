import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addScheduleReport } from '../../reducers/reportReducer';
import { MyContext } from '../../contexts/context';
import { days, employeeNames, dayInfo, reportErr } from '../../utils/formData';
import PageHeading from '../../components/pageHeading';
import RadioButton from '../../components/radioButton';
import {
  FormStyle,
  SelectStyle,
  FormDivStyle,
  FormSectionStyle,
  RadioStyle,
  ErrorStyle
} from '../pages.style';

const ScheduleForm = () => {
  const initialValues = {
    name: "",
    weekDate: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
    hours: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({errors: "errors"});
  const value = useContext(MyContext);
  const { setEditInfo, editInfo } = value;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);

  useEffect(() => {
    if(editInfo.id) setFormValues(editInfo)
  }, [editInfo, setEditInfo])

  useEffect(() => {
    if(Object.keys(formErrors).length === 0) {
      if(editInfo.id) dispatch(addScheduleReport({id: editInfo.id, ...formValues }))
      else dispatch(addScheduleReport(formValues))

      setEditInfo({})
      alert('Thank You!');
      navigate("/scheduleTable");
      setFormValues(initialValues);
      setFormErrors({error: "error"})
      formRef.current.reset();
    }
    //eslint-disable-next-line
  }, [formErrors])

  const generateId = () => Math.round(Math.random()*10000000)

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const validate = values => {
    const errors = {};
    const regexNum = /[0-9]/g;

    if(!values.name) errors.name = reportErr.name
    if(!values.weekDate) errors.weekDate = reportErr.weekDate

    if(!values.hours) errors.hours = reportErr.hours
    else if (values.hours > 100 || !regexNum.test(values.hours)) errors.hours = reportErr.validHours

    for(var i of days) { if(!values[i.toLowerCase()]) errors[i] = `${reportErr.radio} ${i.toLowerCase()}`; }

    return errors
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues))
  }

  return (
    <FormSectionStyle>
      <PageHeading text="Log Weekly Shift" />
      <FormDivStyle>
        <h2>Weekly Shift Report</h2>
        <FormStyle action="#FIXME" method="POST" onSubmit={handleSubmit} ref={formRef}>
          <SelectStyle>
            <label htmlFor="empName">Employee Name</label>
            <select name="name" id="empName" value={formValues.name} onChange={handleChange}>
              { employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>) }
            </select>
          </SelectStyle>
          <ErrorStyle className="error">{formErrors.name}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="weekDate">What is the first date of the week?</label>
            <input type="date" name="weekDate" id="weekDate" value={formValues.weekDate} onChange={handleChange} />
          </SelectStyle>
          <ErrorStyle className="error">{formErrors.weekDate}</ErrorStyle>
          {days.map((d, i) => {
            return (
              <div key={i}>
                <p>{d}</p>
                <RadioStyle>
                {dayInfo.map((day, index) =>
                <RadioButton
                  key={index} check={day.title === formValues[d.toLowerCase()]}
                  name={d.toLowerCase()} value={formValues.monday} change={handleChange} title={day.title} id={generateId()} /> )}
                </RadioStyle>
                <ErrorStyle className="error">{formErrors[d]}</ErrorStyle>
              </div>
            )
          })}
          <SelectStyle>
            <label htmlFor="hours">What is your weekly work hours ?</label>
            <input type="text" name="hours" id="hours" value={formValues.hours} onChange={handleChange} />
          </SelectStyle>
          <ErrorStyle className="error">{formErrors.hours}</ErrorStyle>
          <button type="submit">Submit</button>
        </FormStyle>
      </FormDivStyle>
    </FormSectionStyle>
  )
}

export default ScheduleForm