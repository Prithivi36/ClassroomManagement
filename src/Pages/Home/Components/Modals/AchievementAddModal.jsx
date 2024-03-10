import React from 'react'

function AchievementAddModal() {
  return (
    <div id='AchieveAdd' className="modal  fade">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <label htmlFor="achieveDateInfo" className='fw-bolder d-block  m-1'> Date :</label>
                    <input id='achieveDateInfo' style={{border:'solid 1px gray'}} className='bg-white p-2 rounded-3'  type="date" />
                    <label htmlFor="Achievement" className='fw-bolder d-block  m-1'> Achievement :</label>
                    <input id='Achievement' type="text " className='form-control my-2' placeholder='Enter Reason' />

                    <select className='form-select'>
                    <option selected>Select Position</option>
                    <option value="1">Place One</option>
                    <option value="2">Place Two</option>
                    <option value="3">Place Three</option>
                    <option value="4">Participant</option>
                    </select>
                    
                    <button className="btn btn-primary my-2">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AchievementAddModal