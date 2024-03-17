import React from 'react'
import ConcernModal from './Modals/ConcernModal'
import LeaveModal from './Modals/LeaveModal'
import AchievementAddModal from './Modals/AchievementAddModal'
import SkillsAddModal from './Modals/SkillsAddModal'
import { getStudent } from '../../../Api/StudentApi'
import PersonalDetail from './Table/PersonalDetail'

function AllDetails() {
    const [selectedStudent,setSelectedStudent]=React.useState({})
    
    React.useEffect(
        ()=>{
            getStudent(localStorage.getItem('currentUser')).then(
                res=>setSelectedStudent(res.data)
            )
        }
        ,[]
    )

    return (

    <div className="container p-3 mt-5">
        <button data-bs-toggle='modal' data-bs-target='#Concerns' className="btn btn-danger btn-sm">Concerns</button>
        <button data-bs-toggle='modal' data-bs-target='#leaveModal' className="btn btn-sm ms-2 btn-primary">+ Leave</button>
        <button data-bs-toggle='modal' data-bs-target='#AchieveAdd'  className="btn btn-sm ms-2 btn-success">+ Achievements</button>
        <button data-bs-toggle='modal' data-bs-target='#SkillsAdd' className="btn btn-sm ms-2 btn-warning">+ Skills</button>
        <ConcernModal />
        <LeaveModal />
        <AchievementAddModal />
        <SkillsAddModal />
        <div className="card p-3 p-md-5 mt-3">
            <PersonalDetail fatherNumber={selectedStudent.fatherNumber} motherNumber={selectedStudent.motherNumber} bloodGroup={selectedStudent.bloodGroup} cgpa={selectedStudent.cgpa} />
        </div>
    </div>
  )
}

export default AllDetails