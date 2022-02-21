import React from 'react';
import { TablePageStyle, TablePageFormStyle, FilterStyle } from './TablePageHeading.style';

const TablePageHeading = () => {
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
            <a href="#FIXME" title="Delete"><span className="icon">del</span> Delete</a>
            <a href="#FIXME" title="Edit"><span className="icon">edit</span> Edit</a>
          </div>
      </TablePageStyle>
    </>
  )
}

export default TablePageHeading