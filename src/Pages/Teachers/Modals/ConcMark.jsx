import React from 'react'

function ConcMark() {
  return (
    <div id='markConc' className="modal fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <div  className="modal-body">
          <input placeholder='Enter Reg.no' className='form-control' type="text" />
          <button className='btn mt-3 btn-primary'>Inc Count</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ConcMark