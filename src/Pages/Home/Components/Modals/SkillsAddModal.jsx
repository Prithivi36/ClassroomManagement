import React from 'react'

function SkillsAddModal() {
  return (
    <div id='SkillsAdd' className="modal  fade">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    
                    <label htmlFor="reasonInfo" className='fw-bolder d-block  m-1'> Skills :</label>
                    <input id='reasonInfo' type="text " className='form-control my-2' placeholder='Specify Skills' />
                    
                    <button className="btn btn-primary my-2">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsAddModal