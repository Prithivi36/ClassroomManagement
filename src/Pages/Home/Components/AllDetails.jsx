import React from 'react'
import ConcernModal from './Modals/ConcernModal'
import LeaveModal from './Modals/LeaveModal'
import AchievementAddModal from './Modals/AchievementAddModal'
import SkillsAddModal from './Modals/SkillsAddModal'

function AllDetails() {
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
            <table style={{overflow:'hidden'}} className='table rounded-3 table-bordered'>
                <thead className='table-dark'>
                    <tr >
                        <th>Fields</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Father's Number</td>
                        <td>9894075707</td>
                    </tr>
                    <tr>
                        <td>Mother's Number</td>
                        <td>9952518670</td>
                    </tr>
                    <tr>
                        <td>Blood Group</td>
                        <td>O+ve</td>
                    </tr>
                    <tr>
                        <td>CGPA</td>
                        <td>8.01</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AllDetails