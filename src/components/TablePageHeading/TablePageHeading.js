import React from 'react';
import { TablePageStyle, TablePageFormStyle, FilterStyle } from './TablePageHeading.style';
import { deleteTask } from '../../actions/actions';
import { useDispatch } from 'react-redux';

const TablePageHeading = ({ elem, setElem }) => {
  const { showDel, showEdit, deleteIds } = elem;
  const {setShowEdit, setShowDel, setDeleteIds } = setElem
  const dispatch = useDispatch();

  return (
    <>
      <TablePageStyle>
          <TablePageFormStyle>
              <form action="#FIXME" method="POST">
                  <button className="icon" type="submit">search</button>
                  <input type="text" placeholder="Search" />
              </form>
              <FilterStyle>Filter <span className="icon">filter</span></FilterStyle>
          </TablePageFormStyle>
          <div>
            { showDel ? <a href="#FIXME" title="Delete" onClick={() => dispatch(deleteTask({deleteIds, setDeleteIds, setShowDel }))}><span className="icon">del</span> Delete</a> : null }
            { showEdit ? <a href="#FIXME" title="Edit"><span className="icon">edit</span> Edit</a> : null }
          </div>
      </TablePageStyle>
    </>
  )
}

export default TablePageHeading