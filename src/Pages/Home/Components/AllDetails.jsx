import React from 'react'
import ConcernModal from './Modals/ConcernModal'
import LeaveModal from './Modals/LeaveModal'
import StatusModal from './Modals/StatusModal'
import SkillsAddModal from './Modals/SkillsAddModal'
import { getStudent } from '../../../Api/StudentApi'
import PersonalDetail from './Table/PersonalDetail'
import { useNavigate, useParams } from 'react-router-dom'


function AllDetails() {
    const navigator=useNavigate()
    const [selectedStudent,setSelectedStudent]=React.useState({})
    const {id}=useParams()
    React.useEffect(
        ()=>{
            getStudent(id).then(
                res=>setSelectedStudent(res.data)
            )
        }
        ,[]
    )

    return (

    <div className="container p-3 mt-5">
        <button data-bs-toggle='modal' data-bs-target='#Concerns' className="btn btn-danger me-2 my-1 btn-sm rounded-5">Concerns</button>
        <button data-bs-toggle='modal' data-bs-target='#leaveModal' className="btn btn-sm me-2 my-1 btn-primary rounded-5">+ Permission</button>
        <button data-bs-toggle='modal' data-bs-target='#StatusCheck'  className="btn btn-sm me-2 my-1 btn-success rounded-5">Check Status</button>
        <button data-bs-toggle='modal' data-bs-target='#SkillsAdd' className="btn btn-sm me-2 my-1 btn-warning rounded-5">+ Skills</button>
        <button onClick={()=>navigator('/classroom')} className="btn me-2 my-1 btn-sm btn-secondary rounded-5">Classroom</button>
        <button onClick={()=>navigator('/reset')} className="btn btn-sm me-2 my-1 btn-dark rounded-5">Reset Password</button>
        <ConcernModal merit={selectedStudent.studentConcern}  />
        <LeaveModal />
        <StatusModal request={selectedStudent.leaveOrOdRequests} />
        <SkillsAddModal />
        <div className="card bg-dark rounded-5 p-3 p-md-5 mt-3 mb-5">
            <h6 className='text-light mb-5 fw-bolder'>Parent Details:</h6>
            <PersonalDetail fatherNumber={selectedStudent.fatherNumber} motherNumber={selectedStudent.motherNumber} bloodGroup={selectedStudent.bloodGroup} cgpa={selectedStudent.cgpa} />
        </div>
    </div>
  )
}

export default AllDetails