import React from 'react'
import { getAllStudent, getStudentBySkill } from '../../../Api/StudentApi'
import { useNavigate } from 'react-router-dom'
import loadingImg from '../../../Common/Loadin.gif'
//
function MetaInfoCard() {

  const [metaInfo,setMetaInfo]=React.useState([])
  const [loading, setLoading] = React.useState(true);
  const navigator=useNavigate()
  const [recieved,setRecieved]=React.useState(null)
  const [skill,setSkills]=React.useState('')
  React.useEffect(
    ()=>{
      getAllStudent().then(
        res=>{setMetaInfo(res.data)
        setLoading(false)}
      ).catch(err=>{alert('You are Not Authorized')
        navigator('/')
        localStorage.removeItem('token')
        localStorage.removeItem('currentUser')
        setLoading(false)
    })
    },[]
  )

  function getRecieved(){
    getStudentBySkill(skill).then(res=>setRecieved(res.data)
    
    ).catch(err=>alert('No student found with skill'))
  }

  const sortedMetaInfo = [...metaInfo].sort((a, b) => a.regNo - b.regNo);
  
  const metaCards=(recieved||sortedMetaInfo).map((info)=>{
    return(
      <div key={info.id} onClick={()=>navigator('/student/'+info.regNo)} className="card bg-dark text-light flex-row mb-2 px-3 py-3">
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
    
    <p className='my-3 fw-bolder'>Total Students : <span className='fw-medium'>{metaCards.length}</span></p>
    {metaCards}{loading&&<div className='d-flex align-items-center flex-column'><img style={{objectFit:'cover',width: '200px',height:'200px'}}  className='img-fluid rounded-circle' src={loadingImg}/><p className='text-center fw-bolder'>Please wait while Loading...</p></div>}
    </>
  )
}

export default MetaInfoCard