import React from 'react'
import { getStudent,postRequest } from '../../../../Api/StudentApi'
import { useParams } from 'react-router-dom'

function LeaveModal() {

  const [permissionDetail,setPermissionDetail]=React.useState({
    type:'',
    studentId:'',
    studentName:'',
    date:'',
    reason:''
  })
  const {id}=useParams()
  React.useEffect(
    ()=>{
      getStudent(id).then(
        res=>setPermissionDetail((prev)=>{
          return({...prev,
            studentId:res.data.regNo,
            studentName:res.data.studentName})
        })
      )
    },[]
  )


  function handleChange(event){
    const {name,value}=event.target
    setPermissionDetail((prev)=>{
      return({...prev,[name]:value})
    })
  }


  function handleSubmit(){
    postRequest(permissionDetail).then(
      res=>{
      location.reload()}
    ).catch(err=>{
      alert(err.response.data.message)
    })
    
  }


  return (
    <div id='leaveModal' className="modal  fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <label className='fw-bolder mb-2' htmlFor="type">Permission Type</label>
            <select onChange={handleChange} className='form-select' name="type" id="type">
              <option value="">Select Permission Type</option>
              <option value="Leave">Leave</option>
              <option value="On Duty">On Duty</option>
            </select>
            <label htmlFor="dateInfo" className='fw-bolder d-block  m-1'> Date :</label>
            <input onChange={handleChange} name='date' id='dateInfo' style={{border:'solid 1px gray'}} className='bg-white p-2 rounded-3'  type="date" />
            <label htmlFor="reasonInfo" className='fw-bolder d-block  m-1'> Reason :</label>
            <input onChange={handleChange} name='reason' id='reasonInfo' type="text " className='form-control my-2' placeholder='Enter Reason' />
            
            <button onClick={handleSubmit} className="btn btn-primary my-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaveModal