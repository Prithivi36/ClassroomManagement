import React from 'react'

function SkillsModal(props) {
  return (
    <div id='skillsModal' className="modal  fade">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-body">
                    <table style={{overflow:'hidden'}} className='table mb-0 rounded-3 table-light'>
                        <tbody>
                            {props.skills?props.skills.map((skill)=>{
                                return(
                                <tr key={skill.id} ><td><li className='fw-bolder'>{skill.skill}</li></td></tr>
                                )
                            }):<tr></tr>}
                        </tbody>
                    </table>

                    <button data-bs-toggle='modal' className="btn mt-2 d-block btn-primary">OK</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsModal