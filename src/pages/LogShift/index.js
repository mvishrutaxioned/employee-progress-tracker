import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addScheduleReport } from '../../reducers/reportReducer';
import { MyContext } from '../../contexts/context';
import { days, employeeNames, dayInfo, reportErr } from '../../utils/formData';
import PageHeading from '../../components/PageHeading';
import Radios from '../../components/Radios';
import {
  FormStyle,
  SelectStyle,
  FormDivStyle,
  FormSectionStyle,
  RadioStyle
} from '../Pages.style';

const LogShift = () => {
  const [formValues, setFormValues] = useState([]);
  const [formErrors, setFormErrors] = useState({errors: "errors"});
  const value = useContext(MyContext);
  const { setEditInfo, editInfo } = value;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);

  useEffect(() => {
    {editInfo &&
      setFormValues({
        name: editInfo.name,
        weekDate: editInfo.weekDate,
        monday: editInfo.monday,
        tuesday: editInfo.tuesday,
        wednesday: editInfo.wednesday,
        thursday: editInfo.thursday,
        friday: editInfo.friday,
        saturday: editInfo.saturday,
        sunday: editInfo.sunday,
        hours: editInfo.hours,
      })
    }
  }, [editInfo])

  useEffect(() => {
    if(Object.keys(formErrors).length === 0) {
      if(editInfo.id) {
        dispatch(addScheduleReport({id: editInfo.id, ...formValues }))
        setEditInfo([])
      } else dispatch(addScheduleReport(formValues))

      setEditInfo([])
      alert('Thank You!');
      navigate("/scheduleTable");
      setFormValues([]);
      setFormErrors({error: "error"})
      formRef.current.reset();
    }
    //eslint-disable-next-line
  }, [formErrors])

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
          <span className="error">{formErrors.name}</span>
          <SelectStyle>
            <label htmlFor="weekDate">What is the first date of the week?</label>
            <input type="date" name="weekDate" id="weekDate" value={formValues.weekDate} onChange={handleChange} />
          </SelectStyle>
          <span className="error">{formErrors.weekDate}</span>
            <p>Monday</p>
            <RadioStyle>
              {dayInfo.map((day, i) => 
              <Radios 
              key={Math.round(Math.random()*10000000)} 
              name="monday" value={formValues.monday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
            </RadioStyle>
            <span className="error">{formErrors.Monday}</span>
            <p>Tuesday</p>
            <RadioStyle>
              {dayInfo.map((day, i) => 
              <Radios 
              key={Math.round(Math.random()*10000000)} 
              name="tuesday" value={formValues.tuesday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
            </RadioStyle>
            <span className="error">{formErrors.Tuesday}</span>
            <p>Wednesday</p>
            <RadioStyle>
              {dayInfo.map((day, i) => 
              <Radios 
              key={Math.round(Math.random()*10000000)} 
              name="wednesday" value={formValues.wednesday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
            </RadioStyle>
            <span className="error">{formErrors.Wednesday}</span>
            <p>Thursday</p>
            <RadioStyle>
              {dayInfo.map((day, i) => 
              <Radios 
              key={Math.round(Math.random()*10000000)} 
              name="thursday" value={formValues.thursday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
            </RadioStyle>
            <span className="error">{formErrors.Thursday}</span>
            <p>Friday</p>
            <RadioStyle>
              {dayInfo.map((day, i) => 
              <Radios 
              key={Math.round(Math.random()*10000000)} 
              name="friday" value={formValues.friday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
            </RadioStyle>
            <span className="error">{formErrors.Friday}</span>
            <p>Saturday</p>
            <RadioStyle>
              {dayInfo.map((day, i) => 
              <Radios 
              key={Math.round(Math.random()*10000000)} 
              name="saturday" value={formValues.saturday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
            </RadioStyle>
            <span className="error">{formErrors.Saturday}</span>
            <p>Sunday</p>
            <RadioStyle>
              {dayInfo.map((day, i) => 
              <Radios 
              key={Math.round(Math.random()*10000000)} 
              name="sunday" value={formValues.sunday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
            </RadioStyle>
            <span className="error">{formErrors.Sunday}</span>
          <SelectStyle>
            <label htmlFor="hours">What is your weekly work hours ?</label>
            <input type="text" name="hours" id="hours" value={formValues.hours} onChange={handleChange} />
          </SelectStyle>
          <span className="error">{formErrors.hours}</span>
          <button type="submit">Submit</button>
        </FormStyle>
      </FormDivStyle>
    </FormSectionStyle>
  )
}

export default LogShift