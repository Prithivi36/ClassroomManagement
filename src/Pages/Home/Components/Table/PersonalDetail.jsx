import React from 'react'

function PersonalDetail(props) {
  return (
    <div>
        <table style={{overflow:'hidden'}} className='table rounded-3 table-bordered'>
            <thead className='table-dark'>
                <tr >
                    <th>Fields</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Father's Number</td>
                    <td>{props.fatherNumber}</td>
                </tr>
                <tr>
                    <td>Mother's Number</td>
                    <td>{props.motherNumber}</td>
                </tr>
                <tr>
                    <td>Blood Group</td>
                    <td>{props.bloodGroup}</td>
                </tr>
                <tr>
                    <td>CGPA</td>
                    <td>{props.cgpa}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PersonalDetail