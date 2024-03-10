import React from 'react'

function SkillsModal() {
  return (
    <div id='skillsModal' className="modal  fade">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-body">
                    <table style={{overflow:'hidden'}} className='table mb-0 rounded-3 table-dark table-striped'>
                        <tbody>
                            <tr><td><li className='fw-bolder'>Python</li></td></tr>
                            <tr><td><li className='fw-bolder'>Spring Boot</li></td></tr>
                            <tr><td><li className='fw-bolder'>Java</li></td></tr>
                            <tr><td><li className='fw-bolder'>React</li></td></tr>
                            <tr><td><li className='fw-bolder'>HTML</li></td></tr>
                            <tr><td><li className='fw-bolder'>CSS</li></td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button data-bs-toggle='modal' className="btn btn-dark">OK</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsModal