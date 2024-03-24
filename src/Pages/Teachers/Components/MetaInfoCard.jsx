import React from 'react'
import { getAllStudent, getStudentBySkill } from '../../../Api/StudentApi'
import { useNavigate } from 'react-router-dom'
//
function MetaInfoCard() {

  const [metaInfo,setMetaInfo]=React.useState([])
  const navigator=useNavigate()
  const [recieved,setRecieved]=React.useState(null)
  const [skill,setSkills]=React.useState('')
  React.useEffect(
    ()=>{
      getAllStudent().then(
        res=>setMetaInfo(res.data)
      ).catch(err=>alert('You are Not Authorized'))
    },[]
  )

  function getRecieved(){
    getStudentBySkill(skill).then(res=>setRecieved(res.data)
    
    ).catch(err=>alert('You are Not Authorized'))
  }
  const metaCards=(recieved||metaInfo).map((info)=>{
    return(
      <div key={info.id} onClick={()=>navigator('/student/'+info.regNo)} className="card flex-row mb-2 px-3 py-3">
        <table>
          <tbody>
            <tr>
              <td className='fw-bolder'>Name</td>
              <td>{info.studentName}</td>
            </tr>
            <tr>
              <td className='fw-bolder'>Reg.No</td>
              <td>{info.regNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  })

  return (
    <>
    <div className="d-flex mb-3">
        {!recieved?<button onClick={getRecieved} className="btn  btn-primary">Filter By Skils</button>:
        <button onClick={()=>{setRecieved('')
        setSkills('')}} className="btn  btn-secondary">clear</button>}
      <input value={skill} onChange={(event)=>setSkills(event.target.value)} className='w-50 ms-3 form-control' placeholder='Search By Skill' type="text" />
    </div>
    {metaCards}
    </>
  )
}

export default MetaInfoCard