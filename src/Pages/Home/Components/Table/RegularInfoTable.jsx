import React from 'react'

function RegularInfo(props) {
  return (
    <table style={{overflow:'hidden'}} className='table rounded-2 table-bordered '>
        <thead className='table-primary'>
            <tr className='fw-bolder'>
                <td>Fields</td>
                <td>Details</td>
            </tr>
        </thead>
        <tbody className='table-dark'>
            <tr>
                <td>Name</td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>Branch</td>
                <td>{props.branch}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{props.phone}</td>
            </tr>
            <tr>
                <td>Mail</td>
                <td>{props.mail}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default RegularInfo