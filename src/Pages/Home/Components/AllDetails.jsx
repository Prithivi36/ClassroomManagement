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
        <button data-bs-toggle='modal' data-bs-target='#Concerns' className="btn btn-danger me-2 my-1 btn-sm">Concerns</button>
        <button data-bs-toggle='modal' data-bs-target='#leaveModal' className="btn btn-sm me-2 my-1 btn-primary">+ Permission</button>
        <button data-bs-toggle='modal' data-bs-target='#StatusCheck'  className="btn btn-sm me-2 my-1 btn-success">Check Status</button>
        <button data-bs-toggle='modal' data-bs-target='#SkillsAdd' className="btn btn-sm me-2 my-1 btn-warning">+ Skills</button>
        <button onClick={()=>navigator('/classroom')} className="btn btn-sm btn-secondary">Classroom</button>
        <ConcernModal merit={selectedStudent.studentConcern}  />
        <LeaveModal />
        <StatusModal request={selectedStudent.leaveOrOdRequests} />
        <SkillsAddModal />
        <div className="card p-3 p-md-5 mt-3">
            <PersonalDetail fatherNumber={selectedStudent.fatherNumber} motherNumber={selectedStudent.motherNumber} bloodGroup={selectedStudent.bloodGroup} cgpa={selectedStudent.cgpa} />
        </div>
    </div>
  )
}

export default AllDetails