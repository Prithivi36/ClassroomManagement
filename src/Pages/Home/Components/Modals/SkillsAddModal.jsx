import React from 'react'
import { postSkills } from '../../../../Api/StudentApi'
import { useParams } from 'react-router-dom'

function SkillsAddModal() {

  const [skill,setSkill]=React.useState()

  const {id}=useParams()

  function sendSkill(){
    skill?
    postSkills(id,skill).then(
      res=>{
      location.reload()}
    ):alert('Enter Some Skill')
    
  }
  
  return (
    <div id='SkillsAdd' className="modal  fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            
            <label htmlFor="reasonInfo" className='fw-bolder d-block  m-1'> Skills :</label>
            <input onChange={(event)=>setSkill(event.target.value)} id='reasonInfo' type="text " className='form-control my-2' placeholder='Specify Skills' />
            
            <button onClick={sendSkill} className="btn btn-primary my-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsAddModal