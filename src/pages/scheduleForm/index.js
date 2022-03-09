import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../contexts/context';
import PageHeading from '../../components/pageHeading';
import RadioButton from '../../components/radioButton';
import { addScheduleReport } from '../../reducers/reportReducer';
import { days, employeeNames, dayInfo } from '../../utils/formData';
import { validateName, validateWeekDate, validateHours, validateScheduleRadios } from '../../utils/validations/validateSchedule';
import { FormStyle, SelectStyle, FormDivStyle, FormSectionStyle, RadioStyle, ErrorStyle } from '../pages.style';

const ScheduleForm = () => {
  const initialValues ={name:"",weekDate:"",monday:"",tuesday:"",wednesday:"",thursday:"",friday:"",saturday:"",sunday:"",hours: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({errors: "errors"});
  const value = useContext(MyContext);
  const { setEditInfo, editInfo } = value;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const generateId = () => Math.round(Math.random()*10000000)

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }

  /**
  * @param {object} errors
  * @returns {object}
  * @description submits after checking all errors
  */
  const allErrors = (errors) => {
    const myPromise = new Promise((myResolve, myReject) => {
      if(Object.keys(errors).length === 0) myResolve('Success');
      else myReject(errors);
    });
    myPromise.then(
      function(value) {
        if(editInfo.id) dispatch(addScheduleReport({id: editInfo.id, ...formValues }))
        else dispatch(addScheduleReport(formValues))

        setEditInfo({})
        alert('Thank You!');
        navigate("/scheduleTable");
      },
      function(errors) { setFormErrors(errors) }
    );
  }

  /**
  * @param {object} values
  * @returns {object}
  * @description validates form values
  */
  const validate = values => {
    const errors = {};

    validateName(values, errors)
    validateHours(values, errors)
    validateWeekDate(values, errors)
    validateScheduleRadios(values, errors)
    allErrors(errors)
  }

  const handleSubmit = e => {
    e.preventDefault();
    validate(formValues)
  }

  useEffect(() => {
    if(editInfo.id) setFormValues(editInfo)
  }, [editInfo, setEditInfo])

  return (
    <FormSectionStyle>
      <PageHeading text="Log Weekly Shift" />
      <FormDivStyle>
        <h2>Weekly Shift Report</h2>
        <FormStyle action="#FIXME" method="POST" onSubmit={handleSubmit}>
          <SelectStyle>
            <label htmlFor="empName">Employee Name</label>
            <select name="name" id="empName" value={formValues.name} onChange={handleChange}>
              { employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>) }
            </select>
          </SelectStyle>
          <ErrorStyle>{formErrors.name}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="weekDate">What is the first date of the week?</label>
            <input type="date" name="weekDate" id="weekDate" value={formValues.weekDate} onChange={handleChange} />
          </SelectStyle>
          <ErrorStyle>{formErrors.weekDate}</ErrorStyle>
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
                <ErrorStyle>{formErrors[d]}</ErrorStyle>
              </div>
            )
          })}
          <SelectStyle>
            <label htmlFor="hours">What is your weekly work hours ?</label>
            <input type="text" name="hours" id="hours" value={formValues.hours} onChange={handleChange} />
          </SelectStyle>
          <ErrorStyle>{formErrors.hours}</ErrorStyle>
          <button type="submit">Submit</button>
        </FormStyle>
      </FormDivStyle>
    </FormSectionStyle>
  )
}

export default ScheduleForm