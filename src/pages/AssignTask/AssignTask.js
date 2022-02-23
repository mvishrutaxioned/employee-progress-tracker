import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTaskAssigned } from '../../actions/actions';
import { employeeNames, phaseInfo, statusInfo } from '../../utils/formData';
import PageHeading from '../../components/PageHeading/PageHeading';
import Radios from '../../components/Radios/Radios';
import { MyContext } from '../../contexts/Context';
import {
  FormSectionStyle,
  FormDivStyle,
  FormStyle,
  RadioStyle,
  SelectStyle } from '../Pages.style';

const AssignTask = () => {
  const initialValues = {
    task: "",
    phase: "",
    status: "",
    assignTo: "",
    dueDate: "",
    notes: ""
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({error: "error"});
  const value = useContext(MyContext);
  const { setEditInfo, editInfo } = value;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    if(editInfo) {
      setFormValues({
        task: editInfo.task,
        phase: editInfo.phase,
        status: editInfo.status,
        assignTo: editInfo.assignTo,
        dueDate: editInfo.dueDate,
        notes: editInfo.notes
      })
    }
  }, [editInfo])

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value })
  }

  const validate = values => {
    const errors = {};
    const regexName = '^[a-zA-Z ]*$';

    if (!values.task) errors.task = "Task is required!"
    else if ((values.task).match(regexName) === null) errors.task = "Please Enter Valid Name"

    if(!values.phase) errors.phase = 'Phase is required'
    if(!values.status) errors.status = 'Status is required'
    if(!values.assignTo) errors.assignTo = 'Assigned to is required'
    if(!values.dueDate) errors.dueDate = 'Due Date is required'

    return errors
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues))

    if(Object.keys(formErrors).length === 0) {
      if(editInfo.id) {
        dispatch(addTaskAssigned({id: editInfo.id, ...formValues }))
        setEditInfo([])
      } else dispatch(addTaskAssigned(formValues))

      alert('Thank You!');
      navigate("/taskList");
      setFormValues(initialValues);
      setFormErrors({error: "error"})
      formRef.current.reset();
    }
  }

  return (
    <FormSectionStyle>
      <div className="wrapper">
        <PageHeading text="Assign Task" />
        <FormDivStyle>
          <h2>Employee Task Assignment Form</h2>
          <FormStyle action="#FIXME" method="POST" onSubmit={handleSubmit} ref={formRef}>
            <div>
              <label htmlFor="task">Task</label>
              <input type="text" id="task" name="task" value={formValues.task} onChange={handleChange} />
            </div>
            <span className="error taskErr">{formErrors.task}</span>
            <p>Phase</p>
            <RadioStyle>
              {phaseInfo.map((phase, i) => {
                  return <Radios key={i} name="phase" value={formValues.phase} change={handleChange} title={phase.title} id={phase.id} />
                })}
            </RadioStyle>
            <span className="error phaseErr">{formErrors.phase}</span>
            <p>Status</p>
            <RadioStyle>
              {statusInfo.map((status, i) => {
                  return <Radios key={i} name="status" value={formValues.status} change={handleChange} title={status.title} id={status.id} />
                })}
            </RadioStyle>
            <span className="error statusErr">{formErrors.status}</span>
            <SelectStyle>
              <label htmlFor="assignTo">Assigned To</label>
              <select id="assignTo" name="assignTo" value={formValues.assignTo} onChange={handleChange}>
                {employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>)}
              </select>
            </SelectStyle>
              <span className="error assignErr">{formErrors.assignTo}</span>
            <SelectStyle>
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" id="dueDate" name="dueDate" value={formValues.dueDate} onChange={handleChange} />
            </SelectStyle>
              <span className="error dateErr">{formErrors.dueDate}</span>
            <SelectStyle>
              <label htmlFor="notes">Notes</label>
              <textarea id="notes" name="notes" value={formValues.notes} onChange={handleChange} placeholder="Optional"></textarea>
            </SelectStyle>
            <button type="submit">Submit</button>
          </FormStyle>
        </FormDivStyle>
      </div>
    </FormSectionStyle>
  )
}

export default AssignTask