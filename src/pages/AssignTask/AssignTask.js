import React from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Radios from '../../components/Radios/Radios';
import { FormSectionStyle, FormDivStyle, FormStyle, RadioStyle, SelectStyle } from '../Pages.style';
import { employeeNames, phaseInfo, statusInfo } from '../../utils/formData';

const AssignTask = () => {

  return (
    <FormSectionStyle>
      <div className="wrapper">
        <PageHeading text="Assing Task" />
        <FormDivStyle>
          <h2>Employee Task Assignment Form</h2>
          <FormStyle action="#FIXME" method="POST">
            <div>
              <label htmlFor="task">Task</label>
              <input type="text" id="task" />
            </div>
            <span className="error taskErr">error</span>
            <p>Phase</p>
            <RadioStyle>
              {
                phaseInfo.map((phase, i) => {
                  return <Radios key={i} name="phase" title={phase.title} id={phase.id} />
                })
              }
            </RadioStyle>
            <span className="error phaseErr">error</span>
            <p>Status</p>
            <RadioStyle>
              {
                statusInfo.map((status, i) => {
                  return <Radios key={i} name="status" title={status.title} id={status.id} />
                })
              }
            </RadioStyle>
            <span className="error statusErr">error</span>
            <SelectStyle>
              <label htmlFor="assignTo">Assigned To</label>
              <select id="assignTo">
                { employeeNames.map((emp, i) => <option key={i} value={emp}>{emp}</option>) }
              </select>
            </SelectStyle>
              <span className="error assignErr">error</span>
            <SelectStyle>
              <label htmlFor="dueDate">Due Date</label>
              <input type="date" id="dueDate" />
            </SelectStyle>
              <span className="error dateErr">error</span>
            <SelectStyle>
              <label htmlFor="notes">Notes</label>
              <textarea id="notes"></textarea>
            </SelectStyle>
            <button type="submit">Submit</button>
          </FormStyle>
        </FormDivStyle>
      </div>
    </FormSectionStyle>
  )
}

export default AssignTask