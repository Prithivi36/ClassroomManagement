import React from 'react'

function AbsentTable() {
  return (
    <>
     <div className="tab-pane fade show active" id="attendance">
        <table className='table table-bordered mt-2'>
            <thead>
                <tr className='table-dark'>
                    <td>Date</td>
                    <td>Hours</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>31/12/23</td>
                    <td>Full-Day</td>
                </tr>
                <tr>
                    <td>05/07/23</td>
                    <td>1-3 Hour</td>
                </tr>
            </tbody>
        </table>
    </div>   
    </>
  )
}

export default AbsentTable