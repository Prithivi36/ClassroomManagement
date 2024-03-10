import React from 'react'

function LeaveModal() {
  return (
    <div id='leaveModal' className="modal  fade">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <label htmlFor="dateInfo" className='fw-bolder d-block  m-1'> Date :</label>
                    <input id='dateInfo' style={{border:'solid 1px gray'}} className='bg-white p-2 rounded-3'  type="date" />
                    <label htmlFor="reasonInfo" className='fw-bolder d-block  m-1'> Reason :</label>
                    <input id='reasonInfo' type="text " className='form-control my-2' placeholder='Enter Reason' />
                    
                    <button className="btn btn-primary my-2">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeaveModal