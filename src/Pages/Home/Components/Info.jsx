import React from 'react'
import Prithivi from '../Images/man.svg'
import RegularInfoTable from './Table/RegularInfoTable'
import SkillsModal from './Modals/SkillsModal'
import { getStudent } from '../../../Api/StudentApi'
import { useParams } from 'react-router-dom'

function Info() {
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
    <div>
      <div className="container pt-4 d-lg-flex justify-content-between">
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <img src={Prithivi} className='img-fluid w-50 rounded-circle bg-dark p-2 p-md-4 ' />
          <div className="card bg-dark rounded-circle p-2 flex-row mt-3">
            <button data-bs-toggle='modal' data-bs-target='#skillsModal' className='btn rounded-circle btn-primary btn-sm'>
            <i className="bi bi-pencil"></i>
            </button>
            <SkillsModal skills={selectedStudent.studentSkills} />
          </div>
        </div>
        <div className="card bg-dark rounded-5 mt-2 ms-2 p-4 justify-content-center ">
        <h6 className='text-light mb-5 mt-3 fw-bolder'>Student Details:</h6>
          <RegularInfoTable name={selectedStudent.studentName} branch={selectedStudent.branch}
            phone={selectedStudent.phone} mail={selectedStudent.mail}
          />
          <div className="card border-0 rounded-5 bg-dark p-2 flex-row justify-content-around my-3">
            <a target='_blank' href={`https://wa.me/+91${selectedStudent.phone}`} className="btn rounded-circle btn-success">
            <i className="bi bi-whatsapp"></i>
            </a>
            {selectedStudent.linkedin?<a href={selectedStudent.linkedin} className="btn rounded-circle btn-primary">
            <i className="bi bi-linkedin"></i>
            </a>:<a   className="btn rounded-circle btn-primary">
            <i className="bi bi-linkedin"></i>
            </a>
            }
            {selectedStudent.mail?<a href={`mailto:${selectedStudent.mail}`} className="btn rounded-circle btn-danger">
            <i className="bi bi-envelope"></i>
            </a>:<a className="btn rounded-circle btn-danger">
            <i className="bi bi-envelope"></i>
            </a>}
            <a href={`tel:+91${selectedStudent.phone}`} className="btn rounded-circle btn-danger">
            <i className="bi bi-telephone"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info