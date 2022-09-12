import React from 'react'
import './case-table.css';
export default function Viewcase(props) {
  return (
    <div>
        <table id='case-table'>
            <tr>
                <th>Case Id</th>
                <td>{props.caseId}</td>
            </tr>
            <tr>
                <th>Case Status</th>
                <td>{props.caseStatus}</td>
            </tr>
        </table>
    </div>
  )
}
