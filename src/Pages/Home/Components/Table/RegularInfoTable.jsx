import React from 'react'

function RegularInfo() {
  return (
    <table style={{overflow:'hidden'}} className='table rounded-3 table-bordered '>
        <thead className='table-dark'>
            <tr>
                <td>Fields</td>
                <td>Details</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Prithivi</td>
            </tr>
            <tr>
                <td>Branch</td>
                <td>B.Tech Artificial Intelligence And Data Science</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>8220812131</td>
            </tr>
            <tr>
                <td>Mail</td>
                <td>22ad036@drngpit.ac.in</td>
            </tr>
        </tbody>
    </table>
  )
}

export default RegularInfo