import React from 'react'
import { getAllLeaveRequest } from '../../../Api/StudentApi'

function ReqModal() {
  const [allRequest,setAllRequest]=React.useState([])

  React.useEffect(
    ()=>{
      getAllLeaveRequest().then(
        res=>setAllRequest(res.data)
      )
    },[]
  )

  const requests=allRequest.map((req)=>{
    return(
      <tr>
        <td>{req.studentId}</td>
        <td>{req.studentName}</td>
        <td>{req.type}</td>
        <td>{req.date}</td>
        <td>{req.reason}</td>
        <td>{req.status?'Accepted':'Pending'}</td>
        <td>
        <div className="d-flex">
          <button className='btn btn-sm btn-success'>accept</button>
          <button className='btn btn-sm btn-danger ms-2'>Reject</button>
        </div>
        </td>
      </tr>
    )
  })
console.log(allRequest)
  return (
    <div id='reqCheck' className="modal fade">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body table-responsive">
            <table className='table table-dark'>
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
        </div>
      </div>
    </div>
  )
}

export default ReqModal