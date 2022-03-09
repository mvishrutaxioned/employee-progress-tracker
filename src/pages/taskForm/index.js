import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../contexts/context';
import RadioButton from '../../components/radioButton';
import PageHeading from '../../components/pageHeading';
import { addTaskAssigned } from '../../reducers/taskReducer';
import { employeeNames, phaseInfo, statusInfo } from '../../utils/formData';
import { validateTask, validatePhase, validateAssignTo, validateDueDate, validateStatus } from '../../utils/validations/validateTask';
import { FormSectionStyle, FormDivStyle, FormStyle, RadioStyle, ErrorStyle, SelectStyle } from '../pages.style';

const TaskForm = () => {
  const initialValues = {task:"",phase:"",status:"",assignTo:"",dueDate:"",notes:""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({error: "error"});
  const value = useContext(MyContext);
  const { setEditInfo, editInfo } = value;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateId = () => Math.round(Math.random()*10000000)

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value })
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
        if(editInfo.id) dispatch(addTaskAssigned({id: editInfo.id, ...formValues }))
        else dispatch(addTaskAssigned(formValues))

        setEditInfo({})
        alert('Thank You!');
        navigate("/taskList");
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

    validateTask(values, errors)
    validatePhase(values, errors)
    validateStatus(values, errors)
    validateAssignTo(values, errors)
    validateDueDate(values, errors)
    allErrors(errors)
  }

  const handleSubmit = e => {
    e.preventDefault();
    validate(formValues)
  }

  useEffect(() => {
    if(editInfo.id) setFormValues(editInfo)
  }, [editInfo])

  return (
    <FormSectionStyle>
      <PageHeading text="Assign Task" />
      <FormDivStyle>
        <h2>Employee Task Assignment Form</h2>
        <FormStyle action="#FIXME" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="task">Task</label>
            <input type="text" id="task" name="task" value={formValues.task} onChange={handleChange} />
          </div>
          <ErrorStyle className="error taskErr">{formErrors.task}</ErrorStyle>
          <p>Phase</p>
          <RadioStyle>
            {phaseInfo.map((phase) => {
              return <RadioButton key={generateId()} name="phase" check={phase.title === formValues.phase}
              value={formValues.phase} change={handleChange} title={phase.title} id={phase.id} />
            })}
          </RadioStyle>
          <ErrorStyle className="error phaseErr">{formErrors.phase}</ErrorStyle>
          <p>Status</p>
          <RadioStyle>
            {statusInfo.map((status) => {
              return <RadioButton key={generateId()} name="status" check={status.title === formValues.status}
              value={formValues.status} change={handleChange} title={status.title} id={status.id} />
            })}
          </RadioStyle>
          <ErrorStyle className="error statusErr">{formErrors.status}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="assignTo">Assigned To</label>
            <select id="assignTo" name="assignTo" value={formValues.assignTo} onChange={handleChange}>
              {employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>)}
            </select>
          </SelectStyle>
            <ErrorStyle className="error assignErr">{formErrors.assignTo}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" value={formValues.dueDate} onChange={handleChange} />
          </SelectStyle>
            <ErrorStyle className="error dateErr">{formErrors.dueDate}</ErrorStyle>
          <SelectStyle>
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" name="notes" value={formValues.notes} onChange={handleChange} placeholder="Optional"></textarea>
          </SelectStyle>
          <button type="submit">Submit</button>
        </FormStyle>
      </FormDivStyle>
    </FormSectionStyle>
  )
}

export default TaskForm