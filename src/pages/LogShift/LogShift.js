import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addScheduleReport } from '../../actions/actions';
import { MyContext } from '../../contexts/Context';
import { days, employeeNames, dayInfo } from '../../utils/formData';
import PageHeading from '../../components/PageHeading/PageHeading';
import Radios from '../../components/Radios/Radios';
import {
  FormStyle,
  SelectStyle,
  FormDivStyle,
  FormSectionStyle,
  DayRadioBtnStyle,
  RadioStyle
} from '../Pages.style';

const LogShift = () => {
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
    hours: ""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({errors: "errors"});
  const value = useContext(MyContext);
  const { setEditInfo, editInfo } = value;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef(null);

  useEffect(() => {
    if(editInfo) {
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
      if(editInfo.id) {
        dispatch(addScheduleReport({id: editInfo.id, ...formValues }))
        setEditInfo([])
      } else dispatch(addScheduleReport(formValues))

      alert('Thank You!');
      navigate("/scheduleTable");
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
            <DayRadioBtnStyle>
              <p>Monday</p>
              <RadioStyle>
                {dayInfo.map((day, i) => 
                <Radios 
                key={Math.round(Math.random()*10000000)} 
                name="monday" value={formValues.monday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
              </RadioStyle>
              <span className="error">{formErrors.monday}</span>
            </DayRadioBtnStyle>
            <DayRadioBtnStyle>
              <p>Tuesday</p>
              <RadioStyle>
                {dayInfo.map((day, i) => 
                <Radios 
                key={Math.round(Math.random()*10000000)} 
                name="tuesday" value={formValues.tuesday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
              </RadioStyle>
              <span className="error">{formErrors.tuesday}</span>
            </DayRadioBtnStyle>
            <DayRadioBtnStyle>
              <p>Wednesday</p>
              <RadioStyle>
                {dayInfo.map((day, i) => 
                <Radios 
                key={Math.round(Math.random()*10000000)} 
                name="wednesday" value={formValues.wednesday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
              </RadioStyle>
              <span className="error">{formErrors.wednesday}</span>
            </DayRadioBtnStyle>
            <DayRadioBtnStyle>
              <p>Thursday</p>
              <RadioStyle>
                {dayInfo.map((day, i) => 
                <Radios 
                key={Math.round(Math.random()*10000000)} 
                name="thursday" value={formValues.thursday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
              </RadioStyle>
              <span className="error">{formErrors.thursday}</span>
            </DayRadioBtnStyle>
            <DayRadioBtnStyle>
              <p>Friday</p>
              <RadioStyle>
                {dayInfo.map((day, i) => 
                <Radios 
                key={Math.round(Math.random()*10000000)} 
                name="friday" value={formValues.friday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
              </RadioStyle>
              <span className="error">{formErrors.friday}</span>
            </DayRadioBtnStyle>
            <DayRadioBtnStyle>
              <p>Saturday</p>
              <RadioStyle>
                {dayInfo.map((day, i) => 
                <Radios 
                key={Math.round(Math.random()*10000000)} 
                name="saturday" value={formValues.saturday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
              </RadioStyle>
              <span className="error">{formErrors.saturday}</span>
            </DayRadioBtnStyle>
            <DayRadioBtnStyle>
              <p>Sunday</p>
              <RadioStyle>
                {dayInfo.map((day, i) => 
                <Radios 
                key={Math.round(Math.random()*10000000)} 
                name="sunday" value={formValues.sunday} change={handleChange} title={day.title} id={Math.round(Math.random()*10000000)} /> )}
              </RadioStyle>
              <span className="error">{formErrors.sunday}</span>
            </DayRadioBtnStyle>
            <SelectStyle>
              <label htmlFor="hours">What is your weekly work hours ?</label>
              <input type="text" name="hours" id="hours" value={formValues.hours} onChange={handleChange} />
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