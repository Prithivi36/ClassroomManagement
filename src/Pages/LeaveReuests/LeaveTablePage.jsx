import React from 'react'
import { changeStatus, deleteStatus, getAllLeaveRequest } from '../../Api/StudentApi'
import { useNavigate } from 'react-router-dom'


function LeaveTablePage() {
    const [allRequest,setAllRequest]=React.useState([])
    const navigator=useNavigate()
    React.useEffect(
      ()=>{
        getAllLeaveRequest().then(
          res=>setAllRequest(res.data)
        ).catch(err=>{alert(err.response.data.message)
        navigator('/')})
      },[]
    )
  
    const requests=allRequest.map((req)=>{
      
      return(
        <tr key={req.id} >
          <td className={req.type==='od'?'bg-success':'bg-dark'} >{req.studentId}</td>
          <td>{req.studentName}</td>
          <td>{req.type}</td>
          <td style={{ whiteSpace: 'nowrap' }}>{req.date}</td>
          <td>{req.reason}</td>
          <td>{req.status?'Accepted':'Pending'}</td>
          <td>
          <div className="d-flex">
            <button onClick={()=>{
              changeStatus(req.id).then(res=>location.reload())
            }} className='btn btn-sm btn-success'>Change Status</button>
            <button onClick={()=>{
              deleteStatus(req.id).then(res=>location.reload())
            }} className='btn btn-sm btn-danger ms-3'>Reject</button>
          </div>
          </td>
        </tr>
      )
    })
  console.log(allRequest)
    return (
      <div className="table-responsive">
        <table className='table table-dark table-bordered'>
          <thead>
            <tr>
            <th>Reg.no</th>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests}
          </tbody>
        </table>
      </div>
    )
  }

export default LeaveTablePage