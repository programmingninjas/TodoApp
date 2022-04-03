import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Todos(props) {
  let [back, setBack] = useState({
    backgroundColor: "white", cursor: "pointer"
  })
  const changeRow = (snum) => {
    props.flags[snum] = !props.flags[snum]
    props.setFlags(props.flags)
    setBack({ backgroundColor: "#d1e7dd", cursor: "pointer" })
  }
  return (<>
    {props.todoslist.length === 0 ? <div className='text-center my-5'><h3>No Todos Left!</h3><Link to="/addtodo"><button type="button" className="btn btn-success btn-lg my-3">Add Todo</button></Link></div> : <table className="table">
      <thead>
        <tr>
          <th scope="col">Serial No.</th>
          <th scope="col">Todo</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.todoslist).map((snum) => {
          if (props.flags[snum]) {
            return (<tr>
              <th scope="row" style={back} onClick={() => changeRow(snum)}>{parseInt(snum) + 1}</th>
              <td style={back} onClick={() => changeRow(snum)}>{props.todoslist[snum]}</td>
              <td style={back}><button type="button" onClick={() => props.onDelete(snum)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashCan} /></button></td>
            </tr>)
          }
          else {
            return (<tr>
              <th scope="row" style={{ cursor: 'pointer' }} onClick={() => changeRow(snum)}>{parseInt(snum) + 1}</th>
              <td style={{ cursor: 'pointer' }} onClick={() => changeRow(snum)}>{props.todoslist[snum]}</td>
              <td style={{ cursor: 'pointer' }}><button type="button" onClick={() => props.onDelete(snum)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashCan} /></button></td>
            </tr>)
          }
        }
        )
        }
      </tbody>
    </table>}
  </>)
}
