import React from 'react'

function OndutyTable() {
  return (
    <>
    <div className="tab-pane fade" id="onDuty">
        <table className='table table-bordered mt-2'>
            <thead>
                <tr className='table-dark'>
                    <td>Date</td>
                    <td>Hours</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>05/01/23</td>
                    <td>Full-Day</td>
                </tr>
                <tr>
                    <td>15/03/23</td>
                    <td>1-6 Hour</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default OndutyTable